import { Field } from "@nestjs/graphql";
import { BaseEntity } from "./base-entity";
import { Team } from "./team";
import { MatchResultEnum } from "src/types/match-result.enum";

export class Match extends BaseEntity {
    @Field(() => Team, { nullable: false })
    homeTeam: Team;

    @Field(() => Team, { nullable: false })
    awayTeam: Team;

    @Field(() => MatchResultEnum)
    result: keyof typeof MatchResultEnum;
}