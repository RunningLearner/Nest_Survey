import { InputType, Int, Field, ID } from '@nestjs/graphql';

@InputType()
export class CreateSurveyInput {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  title: string;

  @Field(() => Int)
  score: number;
}
