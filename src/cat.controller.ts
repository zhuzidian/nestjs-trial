import { Controller, Get, HttpCode, Param, Post } from "@nestjs/common"

@Controller("cat")
export class CatController {
  @Post()
  @HttpCode(204)
  create(): string {
    return "add a new cat"
  }

  @Get()
  findAll(): string {
    return "return all cat"
  }

  @Get(":id")
  findOne(@Param("id") id: string): string {
    return `return a #${id} cat`
  }
}
