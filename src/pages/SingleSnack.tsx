import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import SingleProductBlock from '../components/SingleProduct';
import { snacks } from '../utils/data';

const SingleProductPage = () => {
    const {productId} = useParams();

    const currentProduct = snacks.find(prod => prod.id?.toString() === productId);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!currentProduct) {
        return <>Загрузка...</>;
    }

    return (
        <>
            <SingleProductBlock
                currentProduct={currentProduct}
            />
        </>
    );
};

export default SingleProductPage;