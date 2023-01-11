import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Survey } from 'src/survey/entities/survey.entity';
import { Repository } from 'typeorm';
import { CreateAnswerInput } from './dto/create-answer.input';
import { UpdateAnswerInput } from './dto/update-answer.input';
import { Answer } from './entities/answer.entity';

@Injectable()
export class AnswerService {
  constructor(
    @InjectRepository(Answer)
    private answerRepository: Repository<Answer>,
    @InjectRepository(Survey)
    private surveyRepository: Repository<Survey>,
  ) {}

  async create(createAnswerInput: CreateAnswerInput) {
    const survey = await this.surveyRepository.findOneBy({
      id: createAnswerInput.surveyId,
    });
    if (survey.finished) {
      throw new Error(`이미 완료된 설문지 입니다.`);
    }
    const answer = await this.answerRepository.create({
      choiceId: createAnswerInput.choiceId,
    });
    return this.answerRepository.save(answer);
  }

  async findAll() {
    return await this.answerRepository.find();
  }

  async findOne(id: number) {
    const answer = await this.answerRepository.findOne({
      where: { id },
    });
    return answer;
  }

  async update(id: number, updateAnswerInput: UpdateAnswerInput) {
    const survey = await this.surveyRepository.findOneBy({
      id: updateAnswerInput.surveyId,
    });
    if (survey.finished) {
      throw new Error(`이미 완료된 설문지 입니다.`);
    }
    await this.answerRepository.update(id, updateAnswerInput);
    const choice = await this.answerRepository.findOneBy({ id });
    return choice;
  }

  async remove(id: number, surveyId: number) {
    try {
      const survey = await this.surveyRepository.findOneBy({
        id: surveyId,
      });
      if (survey.finished) {
        throw new Error(`이미 완료된 설문지 입니다.`);
      }
      await this.answerRepository.delete(id);
      return `답변ID:${id}이 성공적으로 삭제되었습니다.`;
    } catch (error) {
      console.log(error);
    }
  }
}
