import { RootState } from "../store";

export const selectCreamData = (state: RootState) => state.creams;
export const selectCreamSTATUS = (state: RootState) => state.creams.status;
