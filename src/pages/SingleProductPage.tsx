import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import axios from 'axios';

import useCheckMobileScreen from '../hooks/useDeviceDetect';
import SkeletonSingle from '../UI/Skeleton/SkeletonSingle';
import SkeletonSingleMobile from '../UI/Skeleton/SkeletonSingleMobile';
import SingleProductBlock from '../components/SingleProductBlock';

type ProductState = {
    id: string;
    title: string;
    imageUrl: string[];
    description: string;
    price: number;
    count: number;
}

const SingleProductPage = () => {
    const [currentProduct, setCurrentProduct] = useState<ProductState>([] as any);
    const [isActive, setIsActive] = useState<boolean>(true);
    const {isMobile} = useCheckMobileScreen();

    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const getItems = async () => {
            setIsActive(true);

            try {
                const {data} = await axios.get(`https://645b40dda8f9e4d6e7636f96.mockapi.io/burgers/${id}`);
                setCurrentProduct(data);
                setIsActive(false);
            } catch (err) {
                console.warn('Товар не может быть загружен', err);
                navigate('/');
            }
        };

        getItems();
    }, [id, navigate]);

    if (!currentProduct) {
        return <>Загрузка...</>;
    }

    return (
        <>
            {
                isActive
                    ? isMobile ? <SkeletonSingleMobile /> : <SkeletonSingle />
                    : (
                        <SingleProductBlock
                            currentProduct={currentProduct}
                        />
                    )
            }
        </>
    );
}

export default SingleProductPage;