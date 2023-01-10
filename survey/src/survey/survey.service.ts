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
    // console.log(survey);
    return survey;
  }

  async findFinishedSurveys() {
    const survey = await this.findAll();

    // 모든 문항에 적어도 하나의 답이 제출되었고 설문지에 하나이상의 문항이 있는 설문지들
    const filteredSurvey = survey.filter((each) => {
      return (
        each.questions.filter((question) => {
          return (
            question.choices.filter((choice) => {
              return choice.answers.length !== 0;
            }).length !== 0
          );
        }).length == each.questions.length && each.questions.length > 0
      );
    });

    filteredSurvey.map(async (survey) => {
      const totalScore = await this.correctSurvey(survey);
      survey.totalScore = totalScore;
    });
    console.log('filteredSurvey:::::', filteredSurvey);
    return filteredSurvey;
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
