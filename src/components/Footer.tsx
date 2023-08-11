import { Link } from 'react-router-dom';

import styled from 'styled-components';

import PrivacyPolicy from '../assets/privacy-policy.pdf';
import DataAgreement from '../assets/agreement-to-personal-data.pdf';
import { iconsNav } from '../utils/icons';

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
    flex-direction: column-reverse;
    justify-content: center;
    gap: 2rem;
    padding: 4rem 0 2rem 0;
  }
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  gap: .7rem;

  @media (max-width: 767px) {
    text-align: center;
  }

  a {
    font-size: 1.8rem;
    color: #f5f5f5;
    opacity: .4;
    transition: all .3s;

    @media (hover: hover) {
      &:hover {
        opacity: 1;
        color: #ada9a9;
        transition: all .3s;
      }
    }
  }
`;

const Icons = styled.div`
  display: flex;
  margin-bottom: 3rem;

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

const LinksCopyrightBox = styled.div`
  display: flex;

  @media (max-width: 767px) {
    flex-direction: column;
    gap: 5rem;
  }
`;

const Copyright = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: .5rem;

  @media (min-width: 1200px) {
    position: absolute;
    width: 100%;
    bottom: 1rem;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const Text = styled.div`
  display: flex;
  gap: .7rem;

  span {
    font-size: 1.6rem;
    color: #f5f5f5;
    opacity: .4;
  }

  span:last-child {
    opacity: .4;
    transition: opacity .3s;
  }
`;

const LinkDev = styled.div`
  display: flex;
  gap: .7rem;

  span {
    font-size: 1.6rem;
    color: #f5f5f5;
    opacity: .4;
  }

  a {
    font-size: 1.6rem;
    color: #f5f5f5;
    opacity: .4;
    transition: all .3s;

    @media (hover: hover) {
      &:hover {
        color: #fbb040;
        opacity: 1;
        transition: all .3s;
      }
    }
  }
`;

const CopyDescription = styled.p`
  font-size: 1.6rem;
  text-align: center;
  color: #f5f5f5;
  opacity: .4;
`;

const Footer = () => {
    return (
        <Container>
            <LinksCopyrightBox>
                <Links>
                    <Link to={PrivacyPolicy} target="_blank">Политика конфиденциальности</Link>
                    <Link to={DataAgreement} target="_blank">Согласие на обработку ПД</Link>
                </Links>
                <Copyright>
                    <Text>
                        <CopyDescription>© 2023 Jazz&Burg's</CopyDescription>
                    </Text>
                    <LinkDev>
                        <span>
                            разработано
                        </span>
                        <a href="https://pashadev.ru/" target="_blank" rel="noreferrer">PASHADEV</a>
                    </LinkDev>
                </Copyright>
            </LinksCopyrightBox>
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
        </Container>
    );
};

export default Footer;