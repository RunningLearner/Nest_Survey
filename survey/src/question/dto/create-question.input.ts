import { InputType, Int, Field, ID } from '@nestjs/graphql';

@InputType()
export class CreateQuestionInput {
  @Field(() => String, { description: 'question' })
  question: string;

  @Field(() => ID)
  surveyId: number;
}
