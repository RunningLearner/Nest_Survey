import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Survey } from 'src/survey/entities/survey.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Question {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String)
  @Column()
  question: string;

  @Field(() => Int)
  @Column({ nullable: true })
  choices: number;

  @Field(() => Survey)
  @ManyToOne(() => Survey, (survey) => survey.questions)
  survey: Survey;

  @Field(() => ID)
  @Column()
  surveyId: number;
}