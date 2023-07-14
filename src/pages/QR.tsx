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
    return (
        <Container>
            <QRBlock />
        </Container>
    );
};

export default QRPage;