import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EstadoModule } from './estados/estado.module';
import { ProductosModule } from './productos/productos.module';
import { RegistroModule } from './registro/registro.module';

@Module({
  imports: [ProductosModule, EstadoModule, RegistroModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
