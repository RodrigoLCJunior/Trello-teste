import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Quadro } from './quadros.entity';
import { CriarQuadroDto } from './dto/criar-quadro.dto';
import { AtualizarQuadroDto } from './dto/atualizar-quadro.dto';

@Injectable()
export class QuadrosService {
  constructor(
    @InjectRepository(Quadro)
    private quadrosRepository: Repository<Quadro>,
  ) {}

  async criar(criarQuadroDto: CriarQuadroDto): Promise<Quadro> {
    const quadro = this.quadrosRepository.create(criarQuadroDto);
    return await this.quadrosRepository.save(quadro);
  }

  async buscarTodos(): Promise<Quadro[]> {
    return await this.quadrosRepository.find();
  }

  async buscarUm(id: number): Promise<Quadro> {
    return await this.quadrosRepository.findOne({
      where: { id },
    });
  }
  

  async atualizar(id: number, atualizarQuadroDto: AtualizarQuadroDto): Promise<Quadro> {
    await this.quadrosRepository.update(id, atualizarQuadroDto);
    return this.buscarUm(id);
  }

  async remover(id: number): Promise<void> {
    await this.quadrosRepository.delete(id);
  }
}
