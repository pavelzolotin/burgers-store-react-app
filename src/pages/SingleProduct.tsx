import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import SingleProductBlock from '../components/SingleProduct';
import { mergedProducts } from '../utils/mergedData';

const SingleProductPage = () => {
    const {id} = useParams();

    const currentProduct = mergedProducts.find(item => item.id?.toString() === id);

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