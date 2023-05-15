export type Product = {
    id: string;
    title: string;
    price: number;
    imageUrl: string[];
    descriptionShort: string;
};

export enum Status {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error'
}

export interface ProductSliceState {
    products: Product[];
    status: Status;
}