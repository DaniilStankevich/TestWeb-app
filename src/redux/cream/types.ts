

export type Cream = {
    id: string,
    name: string ,
    price:  number, 
    imageUrl: string, 
}
  
export interface creamSliceState {
      items: Cream[],
}
  
