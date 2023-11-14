import { products } from './data';

const getProductsProps = products.map(product => product.products);

export const mergedProducts = getProductsProps.flat(1);