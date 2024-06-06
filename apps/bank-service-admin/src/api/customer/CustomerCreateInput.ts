import { TransacationCreateNestedManyWithoutCustomersInput } from "./TransacationCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  email?: string | null;
  name?: string | null;
  transacations?: TransacationCreateNestedManyWithoutCustomersInput;
};
