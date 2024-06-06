import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TransacationService } from "./transacation.service";
import { TransacationControllerBase } from "./base/transacation.controller.base";

@swagger.ApiTags("transacations")
@common.Controller("transacations")
export class TransacationController extends TransacationControllerBase {
  constructor(
    protected readonly service: TransacationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
