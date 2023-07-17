import { Link } from 'react-router-dom';

import styled from 'styled-components';

import PrivacyPolicy from '../../assets/privacy-policy.pdf';
import DataAgreement from '../../assets/agreement-to-personal-data.pdf';
import { iconsNav } from '../../utils/icons';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 100%;
  padding: 8rem 4rem 0;

  @media (max-width: 1440px) {
    padding: 6rem 0 3rem 2rem;
  }

  @media (max-width: 767px) {
    flex-direction: column;
    justify-content: center;
    padding: 4rem 0 10rem 2rem;
  }
`;

const LinksAndIcons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5rem;

  @media (max-width: 767px) {
    text-align: center;
  }

  a {
    margin-bottom: .7rem;
    font-size: 1.8rem;
    color: #f5f5f5;
    transition: color .3s;

    &:hover {
      color: #ada9a9;
    }
  }
`;

const Icons = styled.div`
  display: flex;
  margin-bottom: 5rem;

  @media (max-width: 767px) {
    justify-content: center;
  }
`;

const NavIconImg = styled.img`
  width: 100%;
  border-radius: 1.2rem;
  transition: background-color .3s;
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

  &:hover {
    ${NavIconImg} {
      background-color: #81818133;
      transition: background-color .3s;
    }
  }
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
  color: #f5f5f5;
`;

const Footer = () => {
    return (
        <Container>
            <LinksAndIcons>
                <Links>
                    <Link to={PrivacyPolicy} target="_blank">Политика конфиденциальности</Link>
                    <Link to={DataAgreement} target="_blank">Согласие на обработку ПД</Link>
                </Links>
                <Icons>
                    {
                        iconsNav.map(icon => (
                            <Link to={icon.link} key={icon.id} target="_blank">
                                <NavIcon key={icon.id}>
                                    <NavIconImg
                                        src={icon.imageLight}
                                        alt={icon.alt}
                                    />
                                </NavIcon>
                            </Link>
                        ))
                    }
                </Icons>
            </LinksAndIcons>
            <Copyright>
                <CopyDescription>© 2023 Jazz&Burg's</CopyDescription>
            </Copyright>
        </Container>
    );
};

export default Footer;