import { Field, ObjectType } from "@nestjs/graphql";
import { User } from "./user";
import { Team } from "./team";

@ObjectType()
export class Coach extends User {
    @Field(() => Team, { nullable: false })
    team: Team;
}