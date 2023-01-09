import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Question } from 'src/question/entities/question.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Choice {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String)
  @Column()
  choice: string;

  @Field()
  @Column()
  number: number;

  // @Field(() => Boolean, { nullable: true })
  // @Column({ nullable: true })
  // checked: boolean;

  @Field(() => Question)
  @ManyToOne(() => Question, (question) => question.choices)
  question: Question;

  @Field()
  @Column()
  questionId: number;
}
