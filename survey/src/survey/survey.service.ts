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
      id: createSurveyInput.id,
      title: createSurveyInput.title,
      score: createSurveyInput.score,
    });
    return 'This action adds a new survey';
  }

  async findAll() {
    return `This action returns all survey`;
  }

  async findOne(id: string) {
    return `This action returns a #${id} survey`;
  }

  async update(id: string, updateSurveyInput: UpdateSurveyInput) {
    return `This action updates a #${id} survey`;
  }

  async remove(id: string) {
    return `This action removes a #${id} survey`;
  }
}
