import { Module } from '@nestjs/common';
import { ProductosController } from './productos.controller';

@Module({
  imports: [],
  controllers: [ProductosController],
})
export class ProductosModule {}
