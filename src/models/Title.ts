import { Table, Column, Model, DataType, ForeignKey, BelongsTo, BelongsToMany } from 'sequelize-typescript';
import { Author } from './Author';
import { Format } from './Format';
import { TitleAuthor } from './TitleAuthor';

@Table
export class Title extends Model {
  @Column({
    type: DataType.STRING,
    primaryKey: true
  })
  ISBN!: string;

  @Column({
        type: DataType.STRING
    })
  title!: string;

  @Column({
        type: DataType.STRING(255)
    })
  description!: string;

  @Column({
        type: DataType.DATE
    })
  dateOfPublication!: Date;

  @ForeignKey(() => Format)
  @Column({
        type: DataType.STRING
    })
  formatCode!: string;

  @BelongsTo(() => Format)
  format!: Format;

  @BelongsToMany(() => Author, () => TitleAuthor)
  authors!: Author[];
}
