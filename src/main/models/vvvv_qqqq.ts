import { Column, DataType, Default, Model, Table } from "sequelize-typescript";
import { Field, ObjectType } from "type-graphql";
import { ZzzzzType } from "../types";

@ObjectType()
@Table({ tableName: "vvvv_vvvvs" })
export default class Yyyyy extends Model<Yyyyy> {
    @Field()
    @Default("MIKAITOU")
    @Column({
        type: DataType.ENUM,
        values: [ZzzzzType.MIKAITOU, ZzzzzType.MARU, ZzzzzType.SANKAKU, ZzzzzType.BATSU],
    }) // @Columnはプロパティの直前にしないとエラーになる。
    vvvv_kahi!: string;
}
