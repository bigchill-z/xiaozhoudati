import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_appId", ["appId"], {})
@Index("idx_userId", ["userId"], {})
@Entity("user_answer", { schema: "xiaozhoudati" })
export class UserAnswer {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("bigint", { name: "appId", comment: "应用 id" })
  appId: string;

  @Column("tinyint", {
    name: "appType",
    comment: "应用类型（0-得分类，1-角色测评类）",
    default: () => "'0'",
  })
  appType: number;

  @Column("tinyint", {
    name: "scoringStrategy",
    comment: "评分策略（0-自定义，1-AI）",
    default: () => "'0'",
  })
  scoringStrategy: number;

  @Column("text", {
    name: "choices",
    nullable: true,
    comment: "用户答案（JSON 数组）",
  })
  choices: string | null;

  @Column("bigint", {
    name: "resultId",
    nullable: true,
    comment: "评分结果 id",
  })
  resultId: string | null;

  @Column("varchar", {
    name: "resultName",
    nullable: true,
    comment: "结果名称，如物流师",
    length: 128,
  })
  resultName: string | null;

  @Column("text", { name: "resultDesc", nullable: true, comment: "结果描述" })
  resultDesc: string | null;

  @Column("varchar", {
    name: "resultPicture",
    nullable: true,
    comment: "结果图标",
    length: 1024,
  })
  resultPicture: string | null;

  @Column("int", { name: "resultScore", nullable: true, comment: "得分" })
  resultScore: number | null;

  @Column("bigint", { name: "userId", comment: "用户 id" })
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
