import { TransacationUpdateManyWithoutCustomersInput } from "./TransacationUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  email?: string | null;
  name?: string | null;
  transacations?: TransacationUpdateManyWithoutCustomersInput;
};
