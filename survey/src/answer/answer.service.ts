import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAnswerInput } from './dto/create-answer.input';
import { UpdateAnswerInput } from './dto/update-answer.input';
import { Answer } from './entities/answer.entity';

@Injectable()
export class AnswerService {
  constructor(
    @InjectRepository(Answer)
    private answerRepository: Repository<Answer>,
  ) {}

  async create(createAnswerInput: CreateAnswerInput) {
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
    await this.answerRepository.update(id, updateAnswerInput);
    const choice = await this.answerRepository.findOneBy({ id });
    return choice;
  }

  async remove(id: number) {
    try {
      await this.answerRepository.delete(id);
      return `Answer ${id} is deleted successfully`;
    } catch (error) {
      console.log(error);
    }
  }
}
