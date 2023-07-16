import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import SingleProductBlock from '../components/SingleProductBlock';
import salads from '../utils/salads.json';

const SingleProductPage = () => {
    const {productId} = useParams();

    const currentProduct = salads.find(prod => prod.id === productId);

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
}

export default SingleProductPage;