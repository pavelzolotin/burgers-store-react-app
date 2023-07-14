export type FetchProductsArgs = {
    page: string;
};

export type Product = {
    id: string;
    title: string;
    descriptionShort: string;
    price: number;
    weight: number;
    imageUrl: string[];
};

export enum Status {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error'
}

export interface ProductSliceState {
    products: Product[];
    page: any;
    status: Status;
}