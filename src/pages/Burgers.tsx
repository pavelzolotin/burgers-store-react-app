import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import styled from 'styled-components';

import { products } from '../utils/data';
import { categoriesSelector } from '../redux/categories/selectors';
import { productSelector } from '../redux/product/selectors';
import ProductBlock from '../components/ProductBlock';

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 10rem auto 0 auto;
  padding: 0 3rem;
  max-width: 140rem;

  @media (min-width: 1500px) {
    max-width: 150rem;
    padding: 3rem 0 0 0;
  }

  @media (max-width: 767px) {
    padding: 2rem 1rem;
    margin: 0 auto;
  }
`;

const Categories = styled.div``;

const Items = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

export type Product = {
    id: string;
    prod: string,
    title: string;
    descriptionShort: string;
    price: number;
    weight: number,
    imageUrl: string[];
};

const Burgers = () => {
    const {categories} = useSelector(categoriesSelector);
    const {page} = useSelector(productSelector);
    const items = products[0].products.map(item => (
        <ProductBlock
            key={item.id}
            prod={item}
            {...item}
        />
    ));

    useEffect(() => {
        localStorage.setItem('page', page);
        localStorage.setItem('category', categories);

        window.scrollTo(0, 0);
    }, [categories, page]);

    return (
        <Content>
            <Categories>
                <h1>{categories}</h1>
            </Categories>
            <Items>
                {items}
            </Items>
        </Content>
    );
};

export default Burgers;