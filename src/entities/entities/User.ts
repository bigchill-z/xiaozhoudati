import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("user", { schema: "xiaozhoudati" })
export class User {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "userAccount", comment: "账号", length: 256 })
  userAccount: string;

  @Column("varchar", { name: "userPassword", comment: "密码", length: 512 })
  userPassword: string;

  @Column("varchar", {
    name: "unionId",
    nullable: true,
    comment: "微信开放平台id",
    length: 256,
  })
  unionId: string | null;

  @Column("varchar", {
    name: "mpOpenId",
    nullable: true,
    comment: "公众号openId",
    length: 256,
  })
  mpOpenId: string | null;

  @Column("varchar", {
    name: "userName",
    nullable: true,
    comment: "用户昵称",
    length: 256,
  })
  userName: string | null;

  @Column("varchar", {
    name: "userAvatar",
    nullable: true,
    comment: "用户头像",
    length: 1024,
  })
  userAvatar: string | null;

  @Column("varchar", {
    name: "userProfile",
    nullable: true,
    comment: "用户简介",
    length: 512,
  })
  userProfile: string | null;

  @Column("varchar", {
    name: "userRole",
    comment: "用户角色：user/admin/ban",
    length: 256,
    default: () => "'user'",
  })
  userRole: string;

  @Column("datetime", {
    name: "createTime",
    comment: "创建时间",
    default: () => "'CURRENT_TIMESTAMP(6)'",
  })
  createTime: Date;

  @Column("datetime", {
    name: "updateTime",
    comment: "更新时间",
    default: () => "'CURRENT_TIMESTAMP(6)'",
  })
  updateTime: Date;

  @Column("tinyint", {
    name: "isDelete",
    comment: "是否删除",
    default: () => "'0'",
  })
  isDelete: number;
}
