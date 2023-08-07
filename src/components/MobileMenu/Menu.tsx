import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

import { headerLinks } from '../../utils/links';
import { setCategories } from '../../redux/categories/slice';
import { setPage } from '../../redux/product/slice';

export const StyledMenu = styled.nav<{ open: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  padding: 2rem;
  text-align: left;
  background: #212426;
  transform: ${({open}) => open ? 'translateX(0)' : 'translateX(-100%)'};
  transition: transform 0.3s ease-in-out;

  a {
    font-size: 1.8rem;
    transition: color .3s;
    color: #f5f5f5;
    text-decoration: none;
    white-space: nowrap;

    @media (hover: hover) {
      &:hover {
        color: #ada9a9;
      }
    }
  }
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 3rem;
`;

const MobileMenu = ({open, setOpen, onClickCategories}) => {
    const dispatch = useDispatch();

    const closeMenu = (link) => {
        onClickCategories(link);
        setOpen(false);
    };

    const onClickBurgers = () => {
        dispatch(setCategories('Бургеры'));
        dispatch(setPage('burgers'));
        setOpen(false);
    };

    return (
        <StyledMenu open={open}>
            <Links>
                <NavLink
                    to="/"
                    onClick={() => onClickBurgers()}
                >
                    Бургеры
                </NavLink>
                {
                    headerLinks.map(link => (
                        <NavLink
                            to={`/${link.item}`}
                            key={link.id}
                            onClick={() => closeMenu(link)}
                        >
                            {link.title}
                        </NavLink>
                    ))
                }
            </Links>
        </StyledMenu>
    );
};

export default MobileMenu;