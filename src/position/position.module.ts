import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Position } from "./entities/position.entity";
import { PositionService } from "./position.service";
import { PositionController } from "./position.controller";

@Module({
  imports: [
    TypeOrmModule.forFeature([Position])
  ],
  controllers: [PositionController],
  providers: [PositionService]
})
export class PositionModule {
}
