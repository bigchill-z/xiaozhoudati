import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 256, nullable: false, comment: '账号' })
  userAccount: string;

  @Column({ type: 'varchar', length: 512, nullable: false, comment: '密码' })
  userPassword: string;

  @Column({ type: 'varchar', length: 256, nullable: true, comment: '微信开放平台id' })
  unionId: string;

  @Column({ type: 'varchar', length: 256, nullable: true, comment: '公众号openId' })
  mpOpenId: string;

  @Column({ type: 'varchar', length: 256, nullable: true, comment: '用户昵称' })
  userName: string;

  @Column({ type: 'varchar', length: 1024, nullable: true, comment: '用户头像' })
  userAvatar: string;

  @Column({ type: 'varchar', length: 512, nullable: true, comment: '用户简介' })
  userProfile: string;

  @Column({ type: 'varchar', length: 256, nullable: false, default: 'user', comment: '用户角色：user/admin/ban' })
  userRole: string;

  @CreateDateColumn({ comment: '创建时间' })
  createTime: Date;

  @UpdateDateColumn({ comment: '更新时间' })
  updateTime: Date;

  @Column({ type: 'tinyint', nullable: false, default: 0, comment: '是否删除' })
  isDelete: number;
}