import { useState, useEffect } from 'react';

import styled from 'styled-components';
import axios from 'axios';

import Skeleton from '../UI/Skeleton';
import ProductBlock from '../components/ProductBlock';

const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 7rem auto;
  padding: 12rem 0;
  max-width: 140rem;

  @media (min-width: 1500px) {
    max-width: 150rem;
  }

  @media (max-width: 767px) {
    padding: 3rem 0;
  }
`;

const Categories = styled.div`

`;

const Items = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const H1 = styled.h1`
  color: ${({theme}) => theme.links};
  font-size: 6.2rem;
  margin-bottom: 5rem;
`;

type Product = {
    id: string;
    title: string;
    description: string;
    price: number;
    imageUrl: string[];
};

type CategoriesProps = {
    categories: string;
};

const Home = ({categories}: CategoriesProps) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState<Boolean>(true);

    useEffect(() => {
        const fetchProducts = () => {
            setIsLoading(true);

            axios.get(`./burgers.json`)
                .then(res => {
                    setProducts(res.data);
                    setIsLoading(false);
                })
                .catch(err => console.warn(err));
        };

        fetchProducts();
        window.scrollTo(0, 0);
    }, []);

    const items = products.map(item => (
        <ProductBlock
            key={item.id}
            {...item}
        />
    ));

    const skeletons = [...Array(8)].map((_, i) => (
        <Skeleton key={i} />
    ));
    console.log(categories)
    return (
        <>
            <Content>
                <Categories>
                    {
                        isLoading
                            ? ''
                            : <H1>{categories}</H1>
                    }
                </Categories>
                <Items>
                    {
                        isLoading
                            ? skeletons
                            : items
                    }
                </Items>
            </Content>
        </>
    );
};

export default Home;