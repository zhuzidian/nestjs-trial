import { Module } from "@nestjs/common"
import { CatController } from "src/cat/cat.controller"
import { CatService } from "src/cat/cat.service"

@Module({
  controllers: [CatController],
  providers: [CatService],
  // exports: [CatService],
})
export class CatModule {}
