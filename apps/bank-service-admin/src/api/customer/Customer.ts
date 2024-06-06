import { Transacation } from "../transacation/Transacation";

export type Customer = {
  createdAt: Date;
  email: string | null;
  id: string;
  name: string | null;
  transacations?: Array<Transacation>;
  updatedAt: Date;
};
