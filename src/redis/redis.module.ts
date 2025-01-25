// redis.module.ts
import { Global, Inject, Module } from '@nestjs/common';
import { RedisService } from './redis.service';
import { createClient } from 'redis';
import { ConfigService } from '@nestjs/config';
// 声明为全局模块，这样只需要在 AppModule 里引入，别的模块不用引入也可以注入 RedisService
@Global()
@Module({
  providers: [
    RedisService,
    {
      provide: 'REDIS_CLIENT',
      async useFactory(configService:ConfigService) {
        // 创建 Redis 客户端实例
        const client = createClient({
          socket: {
            host: configService.get('redis_server_host'), // Redis 服务器的主机地址
            port: configService.get('redis_server_port')  // Redis 服务器的端口号
          },
          database: configService.get('redis_server_db')   // 使用的 Redis 数据库编号
        });

        // 连接到 Redis 服务器
        await client.connect();

        // 返回 Redis 客户端实例
        return client;
      },
      inject: [ConfigService]
    },
  ],
  exports: [RedisService]
})
export class RedisModule {}