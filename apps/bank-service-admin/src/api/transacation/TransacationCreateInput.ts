import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type TransacationCreateInput = {
  amount?: string | null;
  customer?: CustomerWhereUniqueInput | null;
  date?: Date | null;
};
