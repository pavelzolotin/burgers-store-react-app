import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import SingleProductBlock from '../components/SingleProductBlock';
import { burgers } from '../utils/data';

const SingleProductPage = () => {
    const {productId} = useParams();

    const currentProduct = burgers.find(prod => prod.id?.toString() === productId);

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