import { Module } from '@nestjs/common';
import * as path from 'path';
import * as winston from 'winston';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { User } from './user/entities/user.entity';
import { RedisModule } from './redis/redis.module';
import { utilities, WINSTON_MODULE_NEST_PROVIDER, WinstonLogger, WinstonModule } from 'nest-winston';
import { CustomTypeOrmLogger } from './CustomTypeOrmLogger';
import 'winston-daily-rotate-file'
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: 'src/.env', // 为什么 .env 不放在根目录呢？因为build时根目录下的配置文件不会自动复制到 dist 目录
    }),
    TypeOrmModule.forRootAsync({
      useFactory(configService: ConfigService,logger: WinstonLogger) {
        return {
          type: "mysql",
          host: configService.get('mysql_server_host'),
          port: configService.get('mysql_server_port'),
          username: configService.get('mysql_server_username'),
          password: configService.get('mysql_server_password'),
          database: configService.get('mysql_server_database'),
          synchronize: true,
          logging: true,
          logger: new CustomTypeOrmLogger(logger),
          entities: [
            User 
          ],
          poolSize: 10,
          connectorPackage: 'mysql2',
          extra: {
              authPlugin: 'sha256_password',
          }
        }
      },
      inject: [ConfigService,WINSTON_MODULE_NEST_PROVIDER]
    }),
    WinstonModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        level: 'debug',
        transports: [
          new winston.transports.DailyRotateFile({
              level: configService.get('winston_log_level'),
              dirname: configService.get('winston_log_dirname'),
              filename: configService.get('winston_log_filename'),
              datePattern: configService.get('winston_log_date_pattern'),
              maxSize: configService.get('winston_log_max_size')
          }),
          new winston.transports.Console({
            format: winston.format.combine( 
              winston.format.timestamp(),
              utilities.format.nestLike(),
            ),
          }),
        ],
      }),
      inject: [ConfigService]
    }),
    RedisModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
