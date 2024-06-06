import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TransacationServiceBase } from "./base/transacation.service.base";

@Injectable()
export class TransacationService extends TransacationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
