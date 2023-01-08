import { InputType, Int, Field, ID } from '@nestjs/graphql';

@InputType()
export class CreateSurveyInput {
  @Field(() => String)
  title: string;
}
