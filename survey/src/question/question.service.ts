import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateQuestionInput } from './dto/create-question.input';
import { UpdateQuestionInput } from './dto/update-question.input';
import { Question } from './entities/question.entity';

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(Question)
    private questionRepository: Repository<Question>,
  ) {}

  async create(createQuestionInput: CreateQuestionInput) {
    const question = await this.questionRepository.create({
      question: createQuestionInput.question,
      surveyId: createQuestionInput.surveyId,
      score: createQuestionInput.score,
      answer: createQuestionInput.answer,
    });
    return this.questionRepository.save(question);
  }

  async findAll() {
    return await this.questionRepository.find({
      relations: ['choices', 'choices.answers'],
    });
  }

  async findOne(id: number) {
    const question = await this.questionRepository.findOne({
      where: { id },
      relations: ['choices', 'choices.answers'],
    });
    return question;
  }

  async update(id: number, updateQuestionInput: UpdateQuestionInput) {
    await this.questionRepository.update(id, updateQuestionInput);
    const question = await this.questionRepository.findOneBy({ id });
    return question;
  }

  async remove(id: number) {
    try {
      await this.questionRepository.delete(id);
      return `Qusetion ${id} is deleted successfully`;
    } catch (error) {
      console.log(error);
    }
  }
}
