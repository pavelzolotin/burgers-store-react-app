import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import SingleProductBlock from '../components/SingleProductBlock';
import drinks from '../utils/drinks.json';

const SingleProductPage = () => {
    const {productId} = useParams();
    const [isLoading, setIsLoading] = useState(true);

    const currentProduct = drinks.find(prod => prod.id === productId);

    if (!currentProduct) {
        return <>Загрузка...</>;
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        window.scrollTo(0, 0);
        setIsLoading(false);
    }, []);

    return (
        <>
            {
                !isLoading &&
                <SingleProductBlock
                    currentProduct={currentProduct}
                />
            }
        </>
    );
}

export default SingleProductPage;