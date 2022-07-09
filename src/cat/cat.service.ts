import { Injectable } from "@nestjs/common"
import { Cat } from "./interfaces/cat"

@Injectable()
export class CatService {
  private readonly cats: Cat[] = []

  create(cat: Cat) {
    this.cats.push(cat)
  }

  findAll(): Cat[] {
    return this.cats
  }

  findOne(id: number): Cat {
    return {
      name: "a cat",
      age: 10,
      breed: "",
    }
  }
}
