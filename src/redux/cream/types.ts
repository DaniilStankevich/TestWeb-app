export type FetchСreamArgs = {
    sortBy: string, 
    order: string, 
    category: string,  
    searchHome: string, 
    currentPage: number,
}

export type Cream = {
    id: string,
    name: string ,
    price:  number, 
    imageUrl: string, 
}
  
export interface creamSliceState {
      items: Cream[],
      status:  Status   //'idle' | 'loading' | 'success' | 'error' 
}
  
export enum Status {
    LOADING = 'loading',
    SUCCES = 'success',
    ERROR = 'error'
}