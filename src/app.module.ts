import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from "@nestjs/common"
import { AppController } from "./app.controller"
import { AppService } from "./app.service"
import { CatModule } from "./cat/cat.module"
import { LoggerModdleware } from "./logger.middleware"

@Module({
  imports: [CatModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(LoggerModdleware).forRoutes("cat")
    consumer
      .apply(LoggerModdleware)
      .forRoutes({ path: "cat", method: RequestMethod.GET })
  }
}
