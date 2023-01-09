import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Question } from 'src/question/entities/question.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Survey {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String)
  @Column()
  title: string;

  @Field(() => [Question], { nullable: true })
  @OneToMany(() => Question, (question) => question.survey)
  questions: Question[];
}
