import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Quadro {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column({ nullable: true })
  descricao?: string;
}
