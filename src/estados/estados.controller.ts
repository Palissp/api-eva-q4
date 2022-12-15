import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
import { ApiTags } from '@nestjs/swagger';
import {
  CantonesEcuador,
  ProvinciasEcuador,
} from '../productos/const/ecuador.const';

@ApiTags('Estado')
@Controller('estado')
export class EstadosController {
  constructor() {}

  @Get('provincias')
  findAll(@Req() request: Request) {
    return ProvinciasEcuador;
  }

  @Get('provincias/:id')
  findOne(@Param('id') id: string) {
    const cantones = CantonesEcuador.find((item) => item.id === id);
    if (!cantones) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
    return this.parseArray(cantones);
  }

  parseArray(cantonesFiltered: { id; cantones }): Array<{ id; canton }> {
    return cantonesFiltered.cantones.map((canton: string) => {
      return {
        id: this.encodeName(canton),
        canton: canton,
      };
    });
  }

  encodeName(cantonName: string): string {
    const canton = cantonName.replace(/ /g, '');
    return (
      canton[0] +
      canton[Math.round(canton.length / 2)] +
      canton[canton.length - 1]
    );
  }
}
