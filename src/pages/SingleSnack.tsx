import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import SingleProductBlock from '../components/SingleProductBlock';
import { productSelector } from '../redux/product/selectors';
import snacks from '../utils/snacks.json';

const SingleProductPage = () => {
    const {productId} = useParams();
    const {page} = useSelector(productSelector);

    const currentProduct = snacks.find(prod => prod.id === productId);

    if (!currentProduct) {
        return <>Загрузка...</>;
    }

    return (
        <>
            {
                <SingleProductBlock
                    currentProduct={currentProduct}
                />
            }
        </>
    );
}

export default SingleProductPage;