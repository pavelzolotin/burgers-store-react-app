import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import styled from 'styled-components';

import { categoriesSelector } from '../redux/categories/selectors';
import { productSelector } from '../redux/product/selectors';
import ProductBlock from '../components/ProductBlock';
import snacks from '../utils/snacks.json';

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
    padding: 3rem 1rem;
    margin: 1rem auto;
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

const H1 = styled.h1`
  font-family: 'Helvetica Neue Light';
  font-size: 6.2rem;
  letter-spacing: 1.4px;
  color: #f5f5f5;
  margin-bottom: 5rem;

  @media (max-width: 767px) {
    font-size: 4.2rem;
    margin-bottom: 2rem;
  }
`;

export type Product = {
    id: string;
    title: string;
    descriptionShort: string;
    price: number;
    weight: number,
    imageUrl: string[];
};

const Snacks = () => {
    const {categories} = useSelector(categoriesSelector);
    const {page} = useSelector(productSelector);

    const items = snacks.map(item => (
        <ProductBlock
            key={item.id}
            {...item}
        />
    ));

    useEffect(() => {
        localStorage.setItem('page', page);
        localStorage.setItem('category', categories);

        window.scrollTo(0, 0);
    }, [categories, page]);

    return (
        <>
            <Content>
                <>
                    <Categories>
                        <H1>{categories}</H1>
                    </Categories>
                    <Items>
                        {items}
                    </Items>
                </>
            </Content>
        </>
    );
};

export default Snacks;