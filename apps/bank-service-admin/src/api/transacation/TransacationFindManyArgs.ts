import { TransacationWhereInput } from "./TransacationWhereInput";
import { TransacationOrderByInput } from "./TransacationOrderByInput";

export type TransacationFindManyArgs = {
  where?: TransacationWhereInput;
  orderBy?: Array<TransacationOrderByInput>;
  skip?: number;
  take?: number;
};
