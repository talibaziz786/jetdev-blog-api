import { Column, Model, Table, DataType } from 'sequelize-typescript';

@Table({
  timestamps: true,
  tableName: 'articles',
})
export class Article extends Model<Article> {
  @Column({
    type: DataType.BIGINT,
    allowNull: false,
    autoIncrement: true,
    unique: true,
    primaryKey: true,
  })
  public id?: number;

  @Column({ field: 'title', type: 'varchar' })
  public title: string;

  @Column({ field: 'nickName', type: 'varchar' })
  public nickName: string;

  @Column({ field: 'content', type: 'varchar' })
  public content: string;

  @Column({ field: 'createdAt', type: DataType.DATE })
  public createdAt: Date;

  @Column({ field: 'updatedAt', type: DataType.DATE })
  public updatedAt: Date;
}
