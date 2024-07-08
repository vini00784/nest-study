import { Field, ObjectType } from "@nestjs/graphql";
import { Player } from "./player";
import { Coach } from "./coach";
import { BaseEntity } from "./base-entity";

@ObjectType()
export class Team extends BaseEntity {
    @Field(() => String, { nullable: false })
    name: string;

    @Field(() => [Player], { nullable: false })
    players: Player[];

    @Field(() => Coach, { nullable: false })
    coach: Coach;
}