import { Table, Column, Model, DataType, BelongsToMany } from 'sequelize-typescript';
import { Title } from './Title';
import { TitleAuthor } from './TitleAuthor';

@Table
export class Author extends Model {
  @Column({
        type: DataType.STRING(255)
    })
  firstName!: string;

  @Column({
        type: DataType.STRING(255)
    })
  lastName!: string;

  @Column({
        type: DataType.STRING(255)
    })
  email!: string;

  @Column({
        type: DataType.STRING(255)
    })
  phoneNumber!: string;

  @BelongsToMany(() => Title, () => TitleAuthor)
  titles!: Title[];
}
