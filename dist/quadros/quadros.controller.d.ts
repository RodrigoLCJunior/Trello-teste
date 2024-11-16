import { QuadrosService } from './quadros.service';
import { CriarQuadroDto } from './dto/criar-quadro.dto';
import { AtualizarQuadroDto } from './dto/atualizar-quadro.dto';
import { Quadro } from './quadros.entity';
export declare class QuadrosController {
    private readonly quadrosService;
    constructor(quadrosService: QuadrosService);
    criar(criarQuadroDto: CriarQuadroDto): Promise<Quadro>;
    buscarTodos(): Promise<Quadro[]>;
    buscarUm(id: number): Promise<Quadro>;
    atualizar(id: number, atualizarQuadroDto: AtualizarQuadroDto): Promise<Quadro>;
    remover(id: number): Promise<void>;
}
