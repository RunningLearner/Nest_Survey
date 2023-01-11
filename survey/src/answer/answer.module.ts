import { Module } from '@nestjs/common';
import { AnswerService } from './answer.service';
import { AnswerResolver } from './answer.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Answer } from './entities/answer.entity';
import { Choice } from 'src/choice/entities/choice.entity';
import { Survey } from 'src/survey/entities/survey.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Answer, Choice, Survey])],
  providers: [AnswerResolver, AnswerService],
})
export class AnswerModule {}
