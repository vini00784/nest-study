import { Field, ObjectType } from "@nestjs/graphql";
import { Team } from "./team";
import { User } from "./user";

@ObjectType()
export class Player extends User {
    @Field(() => Number, { nullable: false })
    age: number;

    @Field(() => Team, { nullable: false })
    team: Team;
}