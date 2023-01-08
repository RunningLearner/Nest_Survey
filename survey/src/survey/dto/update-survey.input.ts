import { CreateSurveyInput } from './create-survey.input';
import { InputType, Field, PartialType, ID, Int } from '@nestjs/graphql';

@InputType()
export class UpdateSurveyInput extends PartialType(CreateSurveyInput) {
  @Field(() => ID)
  id: number;

  @Field(() => String)
  title: string;
}
