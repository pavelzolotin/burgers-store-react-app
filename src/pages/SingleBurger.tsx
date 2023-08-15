import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import SingleProductBlock from '../components/SingleProduct';
import {burgers} from '../utils/data';

const SingleBurger = () => {
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
};

export default SingleBurger;