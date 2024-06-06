import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type TransacationUpdateInput = {
  amount?: string | null;
  customer?: CustomerWhereUniqueInput | null;
  date?: Date | null;
};
