import styled from 'styled-components';

import Image from '../../assets/img/dummy.png';

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  height: 90vh;
`;

const H1 = styled.h1`
  font-family: 'DanceFont';
  font-size: 56px;
  color: #555555;
  text-align: center;

  @media (max-width: 767px) {
    font-size: 32px;
  }
`;

const Img = styled.img`
  @media (max-width: 767px) {
    width: 100%;
  }
`;

const DummyBlock = () => {
    return (
        <Content>
            <H1>
                Мы находимся в разработке
            </H1>
            <Img src={Image} alt="dummy-image" />
        </Content>
    );
};

export default DummyBlock;