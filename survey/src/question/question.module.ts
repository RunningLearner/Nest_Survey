import { Module } from '@nestjs/common';
import { QuestionService } from './question.service';
import { QuestionResolver } from './question.resolver';
import { Question } from './entities/question.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Survey } from 'src/survey/entities/survey.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Question, Survey])],
  providers: [QuestionResolver, QuestionService],
})
export class QuestionModule {}
