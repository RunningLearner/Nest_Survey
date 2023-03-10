import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { SurveyService } from './survey.service';
import { Survey } from './entities/survey.entity';
import { CreateSurveyInput } from './dto/create-survey.input';
import { UpdateSurveyInput } from './dto/update-survey.input';

@Resolver(() => Survey)
export class SurveyResolver {
  constructor(private readonly surveyService: SurveyService) {}

  @Mutation(() => Survey)
  createSurvey(
    @Args('createSurveyInput') createSurveyInput: CreateSurveyInput,
  ) {
    return this.surveyService.create(createSurveyInput);
  }

  @Query(() => [Survey])
  findAllSurveys() {
    return this.surveyService.findAllSurveys();
  }

  //완료된 설문지 목록 반환
  @Query(() => [Survey])
  findFinishedSurveys() {
    return this.surveyService.findFinishedSurveys();
  }

  //완료된 설문지 목록 반환
  @Mutation(() => Survey)
  finishSurvey(@Args('surveyId') surveyId: number) {
    return this.surveyService.finishSurvey(surveyId);
  }

  @Query(() => Survey)
  findOneSurvey(@Args('id', { type: () => Int }) id: number) {
    return this.surveyService.findOneSurvey(id);
  }

  @Mutation(() => Survey)
  updateSurvey(
    @Args('updateSurveyInput') updateSurveyInput: UpdateSurveyInput,
  ) {
    return this.surveyService.update(updateSurveyInput.id, updateSurveyInput);
  }

  @Mutation(() => String)
  removeSurvey(@Args('id', { type: () => Int }) id: number) {
    return this.surveyService.remove(id);
  }
}
