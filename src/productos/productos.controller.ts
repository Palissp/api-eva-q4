import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
import { ApiTags } from '@nestjs/swagger';
import { CatalogoConst } from './const/catalogo.const';

@ApiTags('Productos')
@Controller('productos')
export class ProductosController {
  constructor() {}

  @Get()
  findAll(@Req() request: Request) {
    if (Math.random() < 0.5) {
      return CatalogoConst;
    } else {
      throw new HttpException(
        'Hubo un error en la recopilación del catálogo (Este es un estado de ejemplo aleatorio)',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
