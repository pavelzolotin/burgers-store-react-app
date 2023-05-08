import { Link, NavLink, useLocation } from 'react-router-dom';

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
  letter-spacing: .2px;
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
    letter-spacing: 1.2px;
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

const CartWrapper = styled.div``;
const CartButton = styled.button``;
const CartPrice = styled.span``;
const CartCount = styled.span``;
const ButtonDelimiter = styled.div``;
const CartSvg = styled.svg``;

type HeaderProps = {
    theme: string;
    setTheme: any;
    setCategories: any;
};

const Header = ({theme, setTheme, setCategories}: HeaderProps) => {
    const {pathname} = useLocation();

    const onClickCategories = (link) => {
        setCategories(link.title);
    };

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
                                onClick={() => onClickCategories(link)}
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
                <CartWrapper>
                    <CartButton>
                        {
                            pathname !== '/cart' && (
                                <Link to="/cart">
                                    <CartPrice>0 ₽</CartPrice>
                                    <ButtonDelimiter></ButtonDelimiter>
                                    <CartSvg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 18 18"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z"
                                            stroke="white"
                                            strokeWidth="1.8"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z"
                                            stroke="white"
                                            strokeWidth="1.8"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669"
                                            stroke="white"
                                            strokeWidth="1.8"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </CartSvg>
                                    <CartCount>0</CartCount>
                                </Link>
                            )
                        }
                    </CartButton>
                </CartWrapper>
            </RightPart>
        </Container>
    );
};

export default Header;