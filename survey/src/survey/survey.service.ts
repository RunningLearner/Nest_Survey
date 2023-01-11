import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSurveyInput } from './dto/create-survey.input';
import { UpdateSurveyInput } from './dto/update-survey.input';
import { Survey } from './entities/survey.entity';

@Injectable()
export class SurveyService {
  constructor(
    @InjectRepository(Survey) private surveyRepository: Repository<Survey>,
  ) {}

  async create(createSurveyInput: CreateSurveyInput) {
    const survey = await this.surveyRepository.create({
      title: createSurveyInput.title,
    });

    return this.surveyRepository.save(survey);
  }

  async findAll() {
    const survey = await this.surveyRepository.find({
      relations: [
        'questions',
        'questions.choices',
        'questions.choices.answers',
      ],
    });
    return survey;
  }

  async finishSurvey(id: number) {
    await this.surveyRepository.update(id, { finished: true });
    const survey = await this.surveyRepository.findOneBy({ id });
    return survey;
  }

  async findFinishedSurveys() {
    const finishedSurvey = await this.surveyRepository.find({
      where: { finished: true },
      relations: [
        'questions',
        'questions.choices',
        'questions.choices.answers',
      ],
    });

    finishedSurvey.map(async (survey) => {
      const totalScore = await this.correctSurvey(survey);
      survey.totalScore = totalScore;
    });
    console.log('finishedSurvey:::::', finishedSurvey);
    return finishedSurvey;
  }

  // 완료된 설문지 채점
  async correctSurvey(survey: Survey) {
    let totalScore = 0;

    for (const question of survey.questions) {
      for (const choice of question.choices) {
        if (choice.answers.length > 0 && choice.number == question.answer) {
          totalScore += question.score;
          break;
        }
      }
    }
    return totalScore;
  }

  async findOne(id: number) {
    const survey = await this.surveyRepository.findOne({
      where: { id },
      relations: [
        'questions',
        'questions.choices',
        'questions.choices.answers',
      ],
    });
    console.log(survey);

    return survey;
  }

  async update(id: number, updateSurveyInput: UpdateSurveyInput) {
    await this.surveyRepository.update(id, updateSurveyInput);
    const survey = await this.surveyRepository.findOneBy({ id });
    return survey;
  }

  async remove(id: number) {
    try {
      await this.surveyRepository.delete(id);
      return `Survey ${id} is deleted successfully`;
    } catch (error) {
      console.log(error);
    }
  }
}
