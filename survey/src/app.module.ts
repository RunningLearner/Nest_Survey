import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { SurveyModule } from './survey/survey.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Survey } from './survey/entities/survey.entity';
import { QuestionModule } from './question/question.module';
import { Question } from './question/entities/question.entity';
import { ChoiceModule } from './choice/choice.module';
import { Choice } from './choice/entities/choice.entity';
import { AnswerModule } from './answer/answer.module';
import { AnswerModule } from './answer/answer.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      debug: true,
      playground: true,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
    }),
    SurveyModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'password',
      database: 'survey',
      synchronize: true,
      logging: true,
      entities: [Survey, Question, Choice],
    }),
    QuestionModule,
    ChoiceModule,
    AnswerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
