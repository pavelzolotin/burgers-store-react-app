import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

import cartEmpty from '../assets/img/empty-cart.png';
import { setCategories } from '../redux/categories/slice';
import { setPage } from '../redux/product/slice';

const Cart = styled.div`
  margin: 8rem auto;
  width: 65rem;
  text-align: center;

  @media (max-width: 767px) {
    width: 100%;
    padding: 0 2rem 0 2rem;
    margin: 2rem auto;
  }
`;

const H2 = styled.h2`
  font-size: 3.6rem;
  font-weight: 700;
  color: #f5f5f5;
  margin-bottom: 1.5rem;
`;

const Description = styled.p`
  font-size: 2rem;
  line-height: 145.4%;
  letter-spacing: 0.01em;
  color: #777777;
`;

const Img = styled.img`
  display: block;
  width: 30rem;
  margin: 4.5rem auto 6rem;
`;

const Button = styled.button`
  padding: 1.5rem 2.5rem;
  color: #f5f5f5;
  font-family: 'Helvetica Neue Medium', sans-serif;
  letter-spacing: 1.2px;
  border: .2rem solid #fbb040;
  transition: all .3s;

  &:hover {
    background-color: #fbb040;
  }

  svg {
    margin-right: .7rem;
  }

  span {
    font-weight: 300;
    font-size: 1.6rem;
    color: #f5f5f5;
  }
`;

const CartEmpty = () => {
    const dispatch = useDispatch();

    const onClickReturn = () => {
        dispatch(setCategories('Бургеры'));
        dispatch(setPage('burgers'));
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Cart>
            <H2>Корзина пустая 😕</H2>
            <Description>
                Вероятнее всего, вы ещё ничего не заказывали.
                <br />
                Для того, чтобы сделать заказ, перейдите на главную страницу.
            </Description>
            <Img
                src={cartEmpty}
                alt="empty-cart"
            />
            <Link to="/" onClick={onClickReturn}>
                <Button>
                    <svg width="8" height="14" viewBox="0 0 8 14" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 13L1 6.93015L6.86175 1" stroke="#D3D3D3" strokeWidth="1.5"
                              strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>Вернуться назад</span>
                </Button>
            </Link>
        </Cart>
    );
};

export default CartEmpty;