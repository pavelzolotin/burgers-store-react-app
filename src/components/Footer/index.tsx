import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

import { themeSelector } from '../../redux/themeMode/selectors';
import { iconsNav } from '../../utils/data';

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  width: 100%;
  padding: 2rem 4rem 0;

  @media (max-width: 1440px) {
    padding: 2rem 0 3rem 2rem;
  }

  @media (max-width: 767px) {
    flex-direction: column;
    justify-content: center;
    padding: 2rem 0 10rem 2rem;
  }
`;

const Icons = styled.div`
  display: flex;
  margin-bottom: 4rem;

  @media (max-width: 767px) {
    margin-bottom: 0;
  }
`;

const NavIcon = styled.button`
  display: flex;
  align-items: center;
  min-width: 5rem;
  width: 5rem;
  height: 5rem;
  margin: 0 2rem 0 1.5rem;
  padding: 0;
  background-color: transparent;
`;

const NavIconImg = styled.img`
  width: 100%;
`;

const Copyright = styled.div`
  position: absolute;
  width: 100%;
  bottom: 1rem;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const CopyDescription = styled.p`
  font-size: 1.6rem;
  text-align: center;
  color: ${({theme}) => theme.links};
`;

const Footer = () => {
    const {theme} = useSelector(themeSelector);

    return (
        <Container>
            <Copyright>
                <CopyDescription>© 2023 Jazz&Burg's</CopyDescription>
            </Copyright>
            <Icons>
                {
                    iconsNav.map(icon => (
                        <Link to={icon.link} key={icon.id} target="_blank">
                            <NavIcon key={icon.id}>
                                <NavIconImg
                                    src={theme === 'dark' ? icon.imageLight : icon.imageDark}
                                    alt={icon.alt}
                                />
                            </NavIcon>
                        </Link>
                    ))
                }
            </Icons>
        </Container>
    );
};

export default Footer;