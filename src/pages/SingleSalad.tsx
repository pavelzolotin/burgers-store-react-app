import { useParams } from 'react-router-dom';

import SingleProductBlock from '../components/SingleProductBlock';
import { salads } from '../utils/data';

const SingleProductPage = () => {
    const {productId} = useParams();

    const currentProduct = salads.find(prod => prod.id?.toString() === productId);

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