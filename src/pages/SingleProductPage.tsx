import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import SingleProductBlock from '../components/SingleProductBlock';
import { productSelector } from '../redux/product/selectors';
import burgers from '../utils/burgers.json';

const SingleProductPage = () => {
    const {productId} = useParams();
    const {page} = useSelector(productSelector);
    //const currentPage = `${page}.json`

    const currentProduct = burgers.find(prod => prod.id === productId);

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