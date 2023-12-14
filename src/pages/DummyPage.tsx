import styled from 'styled-components';

import LogoLight from '../assets/img/logo-dark-theme.png';

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  height: 100vh;
  max-width: 1400px;

  @media (max-width: 767px) {
    padding: 0 2rem;
  }
  
  h1 {
    opacity: .2;
  }
`;

const ImageBox = styled.div`
  width: 80rem;
  height: 30rem;

  @media (max-width: 767px) {
    width: 100%;
    height: 16rem;
  }
  
  img {
    width: 100%;
  }
`;

const Img = styled.img`
  @media (max-width: 767px) {
    width: 100%;
  }
`;

const DummyPage = () => {
    return (
        <Container>
            <ImageBox>
                <Img
                    src={LogoLight}
                    alt="dummy-image"
                />
            </ImageBox>
            <h1>
                Скоро открытие...
            </h1>
        </Container>
    );
};

export default DummyPage;