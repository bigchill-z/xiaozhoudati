import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_appName", ["appName"], {})
@Entity("app", { schema: "xiaozhoudati" })
export class App {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id", comment: "id" })
  id: string;

  @Column("varchar", { name: "appName", comment: "应用名", length: 128 })
  appName: string;

  @Column("varchar", {
    name: "appDesc",
    nullable: true,
    comment: "应用描述",
    length: 2048,
  })
  appDesc: string | null;

  @Column("varchar", {
    name: "appIcon",
    nullable: true,
    comment: "应用图标",
    length: 1024,
  })
  appIcon: string | null;

  @Column("tinyint", {
    name: "appType",
    comment: "应用类型（0-得分类，1-测评类）",
    default: () => "'0'",
  })
  appType: number;

  @Column("tinyint", {
    name: "scoringStrategy",
    comment: "评分策略（0-自定义，1-AI）",
    default: () => "'0'",
  })
  scoringStrategy: number;

  @Column("int", {
    name: "reviewStatus",
    comment: "审核状态：0-待审核, 1-通过, 2-拒绝",
    default: () => "'0'",
  })
  reviewStatus: number;

  @Column("varchar", {
    name: "reviewMessage",
    nullable: true,
    comment: "审核信息",
    length: 512,
  })
  reviewMessage: string | null;

  @Column("bigint", {
    name: "reviewerId",
    nullable: true,
    comment: "审核人 id",
  })
  reviewerId: string | null;

  @Column("datetime", {
    name: "reviewTime",
    nullable: true,
    comment: "审核时间",
  })
  reviewTime: Date | null;

  @Column("bigint", { name: "userId", comment: "创建用户 id" })
  userId: string;

  @Column("datetime", {
    name: "createTime",
    comment: "创建时间",
    default: () => "CURRENT_TIMESTAMP",
  })
  createTime: Date;

  @Column("datetime", {
    name: "updateTime",
    comment: "更新时间",
    default: () => "CURRENT_TIMESTAMP",
  })
  updateTime: Date;

  @Column("tinyint", {
    name: "isDelete",
    comment: "是否删除",
    default: () => "'0'",
  })
  isDelete: number;
}
