import { InputType, Int, Field, ID } from '@nestjs/graphql';

@InputType()
export class CreateQuestionInput {
  @Field(() => String)
  question: string;

  @Field(() => ID)
  surveyId: number;

  @Field(() => Int)
  answer: number;

  @Field(() => Int)
  score: number;
}
