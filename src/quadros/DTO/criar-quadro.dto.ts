import { IsString, IsOptional } from 'class-validator';

export class CriarQuadroDto {
  @IsString()
  nome: string;

  @IsOptional()
  @IsString()
  descricao?: string;
}
