import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './categories/category.entity';
import { CategoriesModule } from './categories/categories.module';
import { UsersModule } from './users/users.module';
import { User } from './users/users.entity';
import { TarefaModule } from './tarefa/tarefa.module';
import { CartaoModule } from './cartao/cartao.module';
import { Tarefa } from './tarefa/tarefa.entity';
import { Cartao } from './cartao/cartao.entity';
import { CartaoController } from './cartao/cartao.controller';
import { CartaoService } from './cartao/cartao.service';
import { TarefaController } from './tarefa/tarefa.controller';
import { TarefaService } from './tarefa/tarefa.service';
import { QuadrosModule } from './quadros/quadros.module';
import { Quadro } from './quadros/quadros.entity';
import { QuadrosController } from './quadros/quadros.controller';
import { QuadrosService } from './quadros/quadros.service';
import { UsersController } from './users/users.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "unicesumar",
      password: "unicesumar",
      database: "blog",
      entities: [Category, User, Tarefa, Cartao, Quadro],
      synchronize: true
    }),
    TypeOrmModule.forFeature([Cartao, Tarefa, Quadro]),
    CategoriesModule,
    UsersModule,
    TarefaModule,
    CartaoModule,
    QuadrosModule
  ],
  controllers: [AppController, CartaoController, TarefaController, QuadrosController],
  providers: [AppService, CartaoService, TarefaService, QuadrosService]
})
export class AppModule { }
