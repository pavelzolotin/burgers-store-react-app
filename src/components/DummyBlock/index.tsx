import styled from 'styled-components';

import LogoDark from '../../assets/img/dark-logo.png';
import LogoLight from '../../assets/img/light-logo.png';

const H1 = styled.h1`
  font-family: 'DanceFont';
  font-size: 5.6rem;
  color: #555555;
  text-align: center;
  transition: color .3s ease;

  @media (max-width: 767px) {
    font-size: 3.2rem;
  }
`;

const Img = styled.img`
  @media (max-width: 767px) {
    width: 100%;
  }
`;

const DummyBlock = ({theme}) => {
    return (
        <>
            <H1>
                Мы находимся в разработке
            </H1>
            <Img
                src={theme === 'dark' ? LogoLight : LogoDark}
                alt="dummy-image"
            />
        </>
    );
};

export default DummyBlock;