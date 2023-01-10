import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateChoiceInput } from './dto/create-choice.input';
import { UpdateChoiceInput } from './dto/update-choice.input';
import { Choice } from './entities/choice.entity';

@Injectable()
export class ChoiceService {
  constructor(
    @InjectRepository(Choice)
    private choiceRepository: Repository<Choice>,
  ) {}
  async create(createChoiceInput: CreateChoiceInput) {
    const choice = await this.choiceRepository.create({
      choice: createChoiceInput.choice,
      questionId: createChoiceInput.questionId,
      number: createChoiceInput.number,
    });
    return this.choiceRepository.save(choice);
  }

  async findAll() {
    return await this.choiceRepository.find({ relations: ['answer'] });
  }

  async findOne(id: number) {
    const choice = await this.choiceRepository.findOne({
      where: { id },
      relations: ['answer'],
    });
    return choice;
  }

  async update(id: number, updateChoiceInput: UpdateChoiceInput) {
    await this.choiceRepository.update(id, updateChoiceInput);
    const choice = await this.choiceRepository.findOneBy({ id });
    return choice;
  }

  async remove(id: number) {
    try {
      await this.choiceRepository.delete(id);
      return `Choice ${id} is deleted successfully`;
    } catch (error) {
      console.log(error);
    }
  }
}
