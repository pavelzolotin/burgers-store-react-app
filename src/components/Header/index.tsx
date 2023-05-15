import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, NavLink, useLocation } from 'react-router-dom';

import styled from 'styled-components';

import {themeSelector} from '../../redux/themeMode/selectors';
import { cartSelector } from '../../redux/cart/selectors';
import LogoDark from '../../assets/img/dark-logo-main.svg';
import LogoLight from '../../assets/img/light-logo-main.svg';
import LogoDarkMobile from '../../assets/img/dark-logo-mobile.svg';
import LogoLightMobile from '../../assets/img/light-logo-mobile.svg';
import { headerLinks } from '../../utils/links';
import useCheckMobileScreen from '../../hooks/useDeviceDetect';
import ToggleTheme from '../../UI/ToggleTheme';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  width: 100%;
  height: 9rem;
  padding: 2rem 4rem 3rem 8rem;
  background-color: ${({theme}) => theme.backgroundColor};
  transition: all .3s;
  z-index: 10;

  @media (max-width: 1440px) {
    padding: 2rem 0 3rem 2rem;
  }

  @media (max-width: 767px) {
    flex-direction: column;
    padding: 1rem;
    height: auto;
  }
`;

const LeftPart = styled.div`
  display: flex;
  align-items: center;
  transition: all .7s;

  @media (max-width: 767px) {
    flex-direction: column;
    opacity: 1;
    height: 100%;
  }
`;

const RightPart = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 70%;
  transition: all .3s;

  @media (max-width: 767px) {
    flex-direction: column-reverse;
    justify-content: space-between;
    width: 100%;
    background-color: ${({theme}) => theme.backgroundColor};
    z-index: 10;
  }
`;

const LogoBox = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;

  @media (max-width: 767px) {
    align-items: center;
  }
`;

const LogoImage = styled.img`
  width: 20rem;

  @media (max-width: 767px) {
    width: 18rem;
    margin-top: -3rem;
  }
`;

const LogoImageMobile = styled(LogoImage)`
  @media (max-width: 767px) {
    width: 7rem;
    margin-top: -1rem;
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

  @media (max-width: 767px) {
    width: 100%;
    padding: 1.5rem;
    overflow: auto;
  }

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

const HeaderEndWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 767px) {
    width: 100%;
  }
`;

const CartWrapper = styled.div``;

const CartButton = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
  padding: 1rem 2rem 1rem 0;

  a {
    display: flex;
    align-items: center;
    line-height: 2.3rem;
    color: #ffffff;
    background-color: ${({theme}) => theme.button};
    border: .2rem solid #fbb040;
    border-radius: 1rem;
    padding: 1rem 2.5rem;
    min-width: 10rem;
    text-align: center;
    cursor: pointer;
    transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;
    -webkit-user-select: none;
    user-select: none;

    &:hover {
      background-color: #fbb040;
    }
  }
`;

const CartPrice = styled.span`
  font-weight: 600;
  font-size: 1.6rem;
  color: #ffffff;
`;

const CartCount = styled(CartPrice)``;

const ButtonDelimiter = styled.div`
  width: .1rem;
  height: 2.5rem;
  background-color: rgba(255, 255, 255, 0.25);
  margin-left: 1.4rem;
  margin-right: 1.4rem;
`;

const CartSvg = styled.svg`
  margin-right: .8rem;
  margin-bottom: .1rem;
`;


type HeaderProps = {
    setCategories: any;
};

const Header = ({setCategories}: HeaderProps) => {
    const {theme} = useSelector(themeSelector);
    const {items, totalPrice} = useSelector(cartSelector);
    const [sectionHidden, setSectionHidden] = useState<string>('');
    const [logoMobile, setLogoMobile] = useState<string | boolean>(false);
    const {isMobile} = useCheckMobileScreen();
    const {pathname} = useLocation();

    const itemsTotalCount = items.reduce((sum, item) => sum + item.count, 0);

    const onClickCategories = (link) => {
        setCategories(link.title);
    };

    useEffect(() => {
        window.addEventListener('scroll', isStickyHeader);

        return () => {
            window.removeEventListener('scroll', isStickyHeader);
        };
    }, []);

    const isStickyHeader = () => {
        const scrollTop = window.scrollY;
        const stickyMobile: string | number = scrollTop;

        if (stickyMobile > 100) {
            setLogoMobile(true);
            setSectionHidden('hidden');
        }

        if (stickyMobile < 30) {
            setLogoMobile(false);
            setSectionHidden('show');
        }
    };

    return (
        <Container>
            <LeftPart className={isMobile ? sectionHidden : ''}>
                <LogoBox>
                    <Link to="/">
                        <LogoImage
                            src={theme === 'dark' ? LogoLight : LogoDark}
                            alt="Logo"
                        />
                    </Link>
                    <LogoDescription>Пожалуй, лучшие бургеры в мире</LogoDescription>
                </LogoBox>
            </LeftPart>
            <RightPart>
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
                <HeaderEndWrap>
                    <ToggleTheme />
                    {
                        isMobile && logoMobile ? (
                            <LogoImageMobile
                                src={theme === 'dark' ? LogoLightMobile : LogoDarkMobile}
                                alt="Logo"
                            />
                        ) : ''
                    }
                    <CartWrapper>
                        <CartButton>
                            {
                                pathname !== '/cart' && (
                                    <Link to="/cart">
                                        <CartPrice>{totalPrice} ₽</CartPrice>
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
                                        <CartCount>{itemsTotalCount}</CartCount>
                                    </Link>
                                )
                            }
                        </CartButton>
                    </CartWrapper>
                </HeaderEndWrap>
            </RightPart>
        </Container>
    );
};

export default Header;