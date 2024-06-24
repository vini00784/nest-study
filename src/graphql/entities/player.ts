import { Field, ObjectType } from "@nestjs/graphql";
import { Team } from "./team";

@ObjectType()
export class Player {
    @Field(() => Number, { nullable: false })
    age: number;

    @Field(() => Team, { nullable: false })
    team: Team;
}