import { InputType, Int, ID, Field } from '@nestjs/graphql';

@InputType()
export class CreateChoiceInput {
  @Field(() => String)
  choice: string;

  @Field()
  number: number;

  @Field(() => ID)
  questionId: number;
}
