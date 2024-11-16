import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { QuadrosService } from './quadros.service';
import { CriarQuadroDto } from './dto/criar-quadro.dto';
import { AtualizarQuadroDto } from './dto/atualizar-quadro.dto';
import { Quadro } from './quadros.entity';

@Controller('quadros')
export class QuadrosController {
  constructor(private readonly quadrosService: QuadrosService) {}

  @Post()
  async criar(@Body() criarQuadroDto: CriarQuadroDto): Promise<Quadro> {
    return this.quadrosService.criar(criarQuadroDto);
  }

  @Get()
  async buscarTodos(): Promise<Quadro[]> {
    return this.quadrosService.buscarTodos();
  }

  @Get(':id')
  async buscarUm(@Param('id') id: number): Promise<Quadro> {
    return this.quadrosService.buscarUm(id);
  }

  @Patch(':id')
  async atualizar(@Param('id') id: number, @Body() atualizarQuadroDto: AtualizarQuadroDto): Promise<Quadro> {
    return this.quadrosService.atualizar(id, atualizarQuadroDto);
  }

  @Delete(':id')
  async remover(@Param('id') id: number): Promise<void> {
    return this.quadrosService.remover(id);
  }
}
