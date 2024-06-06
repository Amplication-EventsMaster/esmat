import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TransacationModuleBase } from "./base/transacation.module.base";
import { TransacationService } from "./transacation.service";
import { TransacationController } from "./transacation.controller";
import { TransacationResolver } from "./transacation.resolver";

@Module({
  imports: [TransacationModuleBase, forwardRef(() => AuthModule)],
  controllers: [TransacationController],
  providers: [TransacationService, TransacationResolver],
  exports: [TransacationService],
})
export class TransacationModule {}
