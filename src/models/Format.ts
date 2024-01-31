import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { Title } from './Title';

@Table
export class Format extends Model {
  @Column({
    type: DataType.STRING,
    primaryKey: true
  })
  formatCode!: string;

  @Column({    
    type: DataType.STRING(255)
  })
  formatDescription!: string;

  @HasMany(() => Title)
  titles!: Title[];
}
