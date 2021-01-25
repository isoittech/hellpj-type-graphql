import { Table, Model, HasMany } from "sequelize-typescript";
import { Field, ObjectType } from "type-graphql";
import Yyyyy from "./vvvv_qqqq";

@ObjectType()
@Table
export default class Xxxxx extends Model<Xxxxx> {
    @Field((type) => [Yyyyy])
    @HasMany(() => Yyyyy)
    Yyyyy?: Yyyyy[];
}
