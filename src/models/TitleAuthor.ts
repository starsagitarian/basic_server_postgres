import { Table, Column, Model, ForeignKey, DataType } from 'sequelize-typescript';
import { Title } from './Title';
import { Author } from './Author';

@Table
export class TitleAuthor extends Model {
  @ForeignKey(() => Title)
  @Column({
        type: DataType.STRING,
    })
  titleId!: string;

  @ForeignKey(() => Author)
  @Column({
        type: DataType.INTEGER
    })
  authorId!: number;
}
