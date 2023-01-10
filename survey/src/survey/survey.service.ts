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
    console.log(survey);
    return survey;
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
