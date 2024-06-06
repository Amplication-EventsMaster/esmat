import { Transacation as TTransacation } from "../api/transacation/Transacation";

export const TRANSACATION_TITLE_FIELD = "amount";

export const TransacationTitle = (record: TTransacation): string => {
  return record.amount?.toString() || String(record.id);
};
