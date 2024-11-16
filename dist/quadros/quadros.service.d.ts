import { Repository } from 'typeorm';
import { Quadro } from './quadros.entity';
import { CriarQuadroDto } from './dto/criar-quadro.dto';
import { AtualizarQuadroDto } from './dto/atualizar-quadro.dto';
export declare class QuadrosService {
    private quadrosRepository;
    constructor(quadrosRepository: Repository<Quadro>);
    criar(criarQuadroDto: CriarQuadroDto): Promise<Quadro>;
    buscarTodos(): Promise<Quadro[]>;
    buscarUm(id: number): Promise<Quadro>;
    atualizar(id: number, atualizarQuadroDto: AtualizarQuadroDto): Promise<Quadro>;
    remover(id: number): Promise<void>;
}
