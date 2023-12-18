import { Column, Model, Table, DataType } from 'sequelize-typescript';

@Table({
  timestamps: true,
  tableName: 'article_comments',
})
export class ArticleComment extends Model<ArticleComment> {
  @Column({
    type: DataType.BIGINT,
    allowNull: false,
    autoIncrement: true,
    unique: true,
    primaryKey: true,
  })
  public id?: number;

  @Column({ field: 'articleId', type: DataType.BIGINT })
  public articleId: number;

  @Column({ field: 'parentCommentId', type: DataType.BIGINT })
  public parentCommentId: number;

  @Column({ field: 'nickName', type: 'varchar' })
  public nickName: string;

  @Column({ field: 'content', type: 'varchar' })
  public content: string;

  @Column({ field: 'createdAt', type: 'varchar' })
  public createdAt: Date;

  @Column({ field: 'updatedAt', type: 'varchar' })
  public updatedAt: Date;
}
