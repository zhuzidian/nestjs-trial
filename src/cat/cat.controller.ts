import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  UseGuards,
} from "@nestjs/common"
import { AuthGuard } from "src/auth.guard"
import { CatService } from "./cat.service"
import { CreateCatDto } from "./dto/create-cat.dto"
import { Cat } from "./interfaces/cat"

@UseGuards(AuthGuard)
@Controller("cat")
export class CatController {
  constructor(private catService: CatService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    this.catService.create(createCatDto)
  }

  @Get(":id")
  async findOne(
    @Param(
      "id",
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.BAD_REQUEST }),
    )
    id: number,
  ) {
    return this.catService.findOne(id)
  }

  // @Get()
  // async findAll(): Promise<Cat[]> {
  //   return this.catService.findAll()
  // }
  @Get()
  async findAll() {
    throw new HttpException("禁止访问", HttpStatus.FORBIDDEN)
  }
}
