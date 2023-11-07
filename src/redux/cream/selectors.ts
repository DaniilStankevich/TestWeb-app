import { RootState } from "../store"

export const selectPizzaData = (state: RootState) => state.creams
export const selectPizzaSTATUS = (state: RootState) => state.creams.status
