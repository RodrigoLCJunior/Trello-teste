import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuadrosController } from './quadros.controller';
import { QuadrosService } from './quadros.service';
import { Quadro } from './quadros.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Quadro])],
  controllers: [QuadrosController],
  providers: [QuadrosService],
  exports: [QuadrosService], // Exporta o serviço
})
export class QuadrosModule {}
