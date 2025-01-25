import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_appId", ["appId"], {})
@Entity("scoring_result", { schema: "xiaozhoudati" })
export class ScoringResult {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id", comment: "id" })
  id: string;

  @Column("varchar", {
    name: "resultName",
    comment: "结果名称，如物流师",
    length: 128,
  })
  resultName: string;

  @Column("text", { name: "resultDesc", nullable: true, comment: "结果描述" })
  resultDesc: string | null;

  @Column("varchar", {
    name: "resultPicture",
    nullable: true,
    comment: "结果图片",
    length: 1024,
  })
  resultPicture: string | null;

  @Column("varchar", {
    name: "resultProp",
    nullable: true,
    comment: "结果属性集合 JSON，如 [I,S,T,J]",
    length: 128,
  })
  resultProp: string | null;

  @Column("int", {
    name: "resultScoreRange",
    nullable: true,
    comment: "结果得分范围，如 80，表示 80及以上的分数命中此结果",
  })
  resultScoreRange: number | null;

  @Column("bigint", { name: "appId", comment: "应用 id" })
  appId: string;

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
