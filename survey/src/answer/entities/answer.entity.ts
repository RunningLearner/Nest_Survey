import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Choice } from 'src/choice/entities/choice.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Answer {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field((type) => Choice)
  @ManyToOne((type) => Choice, (choice) => choice.answers)
  choice: Choice;

  @Field()
  @Column()
  choiceId: number;
}
