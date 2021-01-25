import "reflect-metadata";
import { Arg, Field, InputType, Mutation, ObjectType, Resolver } from "type-graphql";
import Yyyyy from "../models/vvvv_qqqq";
import { XxxxxServiceOutputDto, ZzzzzType } from "../types";

@ObjectType()
export class ZzzzzInput {
    @Field((type) => ZzzzzType)
    zzzzz!: ZzzzzType;
    // @Field()
    // zzzzz!: string;
}

@InputType()
export class XxxxxInput {
    @Field((type) => [ZzzzzInput])
    zzzzzInputs!: ZzzzzInput[];
    // @Field((type) => [String])
    // zzzzzInputs!: string[];
}

@Resolver((of) => Yyyyy)
export class XxxxxResolver {
    @Mutation((returns) => Yyyyy)
    async addXxxxx(@Arg("Xxxxx") XxxxxInput: XxxxxInput): Promise<Yyyyy> {
        const serviceOutput: XxxxxServiceOutputDto = {};

        return Promise.resolve(serviceOutput.addedXxxxx!);
    }
}
