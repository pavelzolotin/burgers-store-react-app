import { useEffect } from 'react';

import styled from 'styled-components';

import useCheckMobileScreen from '../../hooks/useDeviceDetect';
import CartSkeleton from '../Skeleton/CartSkeleton';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding-top: 3rem;
  max-width: 140rem;

  @media (max-width: 767px) {
    width: 100%;
  }
`;

const Loading = () => {
    const {isMobile} = useCheckMobileScreen();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Container>
            {
                isMobile && <CartSkeleton />
            }
        </Container>
    );
};

export default Loading;