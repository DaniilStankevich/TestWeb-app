export type CartItem = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  count: number;
};

export interface MyActionPayload {
  id: number;
}

export interface CartSliceState {
  totalPrice: number;
  items: CartItem[];
  amountCreams: number;
}
