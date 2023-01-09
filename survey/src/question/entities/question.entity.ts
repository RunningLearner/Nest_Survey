import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Choice } from 'src/choice/entities/choice.entity';
import { Survey } from 'src/survey/entities/survey.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@ObjectType()
@Entity()
export class Question {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  question: string;

  @Field(() => Int)
  @Column()
  score: number;

  @Field(() => Int, { nullable: true })
  @Column({ nullable: true })
  answer: number;

  @Field(() => [Choice], { nullable: true })
  @OneToMany(() => Choice, (choice) => choice.question)
  choices: Choice[];

  @Field(() => Survey)
  @ManyToOne(() => Survey, (survey) => survey.questions)
  survey: Survey;

  @Field()
  @Column()
  surveyId: number;
}
