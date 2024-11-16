import { IsString, IsOptional } from 'class-validator';

export class AtualizarQuadroDto {
  @IsOptional()
  @IsString()
  nome?: string;

  @IsOptional()
  @IsString()
  descricao?: string;
}
