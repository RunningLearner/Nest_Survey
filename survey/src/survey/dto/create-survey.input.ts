import { InputType, Int, Field, ID } from '@nestjs/graphql';

@InputType()
export class CreateSurveyInput {
  @Field(() => ID)
  id: number;

  @Field(() => String)
  title: string;

  @Field(() => Int)
  score: number;
}
