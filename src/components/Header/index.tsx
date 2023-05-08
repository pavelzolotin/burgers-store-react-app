import { Link, NavLink } from 'react-router-dom';

import styled from 'styled-components';

import LogoDark from '../../assets/img/dark-logo-main.svg';
import LogoLight from '../../assets/img/light-logo-main.svg';
import { headerLinks } from '../../utils/links';
import ToggleTheme from '../../UI/ToggleTheme';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100%;
  height: 9rem;
  padding: 2rem 4rem 3rem 8rem;
  background-color: ${({theme}) => theme.backgroundColor};
  transition: background-color .3s ease;
  z-index: 10;
`;

const LeftPart = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

const RightPart = styled.div`
  display: flex;
  justify-content: end;
`;

const LogoBox = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;

  @media (max-width: 767px) {
    margin-left: .7rem;
  }
`;

const LogoImage = styled.img`
  width: 20rem;

  @media (max-width: 767px) {
    width: 18rem;
  }
`;

const LogoDescription = styled.p`
  padding: .7rem .7rem .7rem 0;
  margin-top: -.3rem;
  font-size: 1.6rem;
  color: #7b7b7b;
  transition: color .3s;
`;

const Pages = styled.div`
  display: flex;
  display: -webkit-flex;
  gap: 3rem;
  -webkit-column-gap: 3rem;
  margin-left: 8rem;

  a {
    font-size: 1.8rem;
    color: ${({theme}) => theme.links};
    transition: color .3s;

    &.active {
      color: #ada9a9;
    }

    &:hover {
      color: #ada9a9;
    }
  }
`;

type HeaderProps = {
    theme: string;
    setTheme: any;
};

const Header = ({theme, setTheme}: HeaderProps) => {
    return (
        <Container>
            <LeftPart>
                <LogoBox>
                    <Link to="/">
                        <LogoImage
                            src={theme === 'dark' ? LogoLight : LogoDark}
                            alt="Logo"
                        />
                    </Link>
                    <LogoDescription>Пожалуй, лучшие бургеры в мире</LogoDescription>
                </LogoBox>
                <Pages>
                    {
                        headerLinks.map(link => (
                            <NavLink
                                to={`/${link.item}`}
                                key={link.id}
                            >
                                {link.title}
                            </NavLink>
                        ))
                    }
                </Pages>
            </LeftPart>
            <RightPart>
                <ToggleTheme
                    theme={theme}
                    setTheme={setTheme}
                />
            </RightPart>
        </Container>
    );
};

export default Header;