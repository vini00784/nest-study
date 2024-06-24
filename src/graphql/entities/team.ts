import { Field, ObjectType } from "@nestjs/graphql";
import { Player } from "./player";
import { Coach } from "./coach";

@ObjectType()
export class Team {
    @Field(() => String, { nullable: false })
    name: string;

    @Field(() => [Player], { nullable: false })
    players: Player[];

    @Field(() => Coach, { nullable: false })
    coach: Coach;
}