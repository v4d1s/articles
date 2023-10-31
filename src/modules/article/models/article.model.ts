import {AutoIncrement, Column, Model, PrimaryKey, Table} from "sequelize-typescript";

@Table
export class Article extends Model {
    @Column({
        primaryKey: true,
        autoIncrement: true
    })
    id: number
    @Column
    name: string
    @Column
    text: string
    // @Column
    // createdAt: Date
    // @Column
    // updatedAt: Date
}