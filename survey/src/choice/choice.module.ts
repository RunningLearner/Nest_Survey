import { Module } from '@nestjs/common';
import { ChoiceService } from './choice.service';
import { ChoiceResolver } from './choice.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Question } from 'src/question/entities/question.entity';
import { Choice } from './entities/choice.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Question, Choice])],
  providers: [ChoiceResolver, ChoiceService],
})
export class ChoiceModule {}
