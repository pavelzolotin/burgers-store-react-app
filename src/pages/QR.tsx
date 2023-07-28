import { useEffect } from 'react';

import styled from 'styled-components';

import QRBlock from '../components/QR';

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  height: 100vh;
  max-width: 1400px;
`;

const QRPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Container>
            <QRBlock />
        </Container>
    );
};

export default QRPage;