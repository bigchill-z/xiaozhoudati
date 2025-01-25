import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("idx_appId", ["appId"], {})
@Entity("question", { schema: "xiaozhoudati" })
export class Question {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id", comment: "id" })
  id: string;

  @Column("text", {
    name: "questionContent",
    nullable: true,
    comment: "题目内容（json格式）",
  })
  questionContent: string | null;

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
