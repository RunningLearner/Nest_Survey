import { CreateQuestionInput } from './create-question.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateQuestionInput extends PartialType(CreateQuestionInput) {
  @Field(() => Int)
  id: number;

  @Field({ nullable: true })
  qusetion: string;

  @Field(() => Int, { nullable: true })
  score: number;
}
