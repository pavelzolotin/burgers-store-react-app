import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

import { cartSelector } from '../redux/cart/selectors';
import { productSelector } from '../redux/product/selectors';
import { setCategories } from '../redux/categories/slice';
import { clearItems } from '../redux/cart/slice';
import { setPage } from '../redux/product/slice';
import { categoriesSelector } from '../redux/categories/selectors';
import CartItem from '../components/CartProduct';
import CartEmpty from './CartEmpty';

const Container = styled.div`
  width: 150rem;
  padding: 15rem 0;

  @media (max-width: 767px) {
    width: 100%;
    padding: 0;
  }
`;

const Content = styled.div`
  max-width: 82rem;
  margin: 9rem auto;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 767px) {
    flex-direction: column;
    gap: 3rem;
  }
`;

const H2 = styled.h2`
  display: flex;
  align-items: center;
  font-size: 3.2rem;
  color: #f5f5f5;

  svg {
    position: relative;
    top: -.2rem;
    width: 3rem;
    height: 3rem;
    margin-right: 1rem;

    path {
      stroke: #f5f5f5;
      stroke-width: 1.9;
    }
  }
`;

const Clear = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;

  span {
    display: inline-block;
    margin: .4rem 0 0 .7rem;
    font-size: 1.8rem;
    color: #f5f5f5;
  }

  span,
  svg,
  path {
    transition: all 0.15s ease-in-out;
  }
`;

const Items = styled.div``;

const Bottom = styled.div`
  margin: 5rem 0;
`;

const Details = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }

  div {
    font-size: 2.2rem;

    @media (max-width: 767px) {
      margin: .5rem 0 .5rem 0;
    }

    span {
      &:first-child {
        margin-left: 1.2rem;
      }

      &:last-child {
        margin-left: .5rem;
        opacity: .5;
      }
    }
  }
`;

const ProductCount = styled.div`
  color: #f5f5f5;
`;

const CashCount = styled.div`
  color: #f5f5f5;
`;

const CartButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 7rem;

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: center;
    gap: 3rem;
  }
`;

const Button = styled.button`
  padding: 1.5rem 2.5rem;
  color: #f5f5f5;
  font-family: 'Helvetica Neue Medium';
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

const Cart = () => {
    const dispatch = useDispatch();
    const {items, totalPrice} = useSelector(cartSelector);
    const {page} = useSelector(productSelector);
    const {categories} = useSelector(categoriesSelector);

    const itemsTotalCount = items.reduce((sum, item) => sum + item.count, 0);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const onClickCategories = () => {
        dispatch(setCategories(`${categories}`));
        dispatch(setPage(`${page}`));
    };

    const onClickClear = () => {
        if (window.confirm('Вы хотите очистить корзину?')) {
            dispatch(clearItems());
        }
    };

    if (!totalPrice) {
        return <CartEmpty />
    }

    return (
        <Container>
            <Content>
                <Top>
                    <H2>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z"
                                stroke="white" strokeWidth="1.8" strokeLinecap="round"
                                strokeLinejoin="round" />
                            <path
                                d="M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z"
                                stroke="white" strokeWidth="1.8" strokeLinecap="round"
                                strokeLinejoin="round" />
                            <path
                                d="M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669"
                                stroke="white" strokeWidth="1.8" strokeLinecap="round"
                                strokeLinejoin="round" />
                        </svg>
                        Корзина
                    </H2>
                    <Clear>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.5 5H4.16667H17.5" stroke="#B6B6B6" strokeWidth="1.2"
                                  strokeLinecap="round" strokeLinejoin="round" />
                            <path
                                d="M6.66663 5.00001V3.33334C6.66663 2.89131 6.84222 2.46739 7.15478 2.15483C7.46734 1.84227 7.89127 1.66667 8.33329 1.66667H11.6666C12.1087 1.66667 12.5326 1.84227 12.8451 2.15483C13.1577 2.46739 13.3333 2.89131 13.3333 3.33334V5.00001M15.8333 5.00001V16.6667C15.8333 17.1087 15.6577 17.5326 15.3451 17.8452C15.0326 18.1577 14.6087 18.3333 14.1666 18.3333H5.83329C5.39127 18.3333 4.96734 18.1577 4.65478 17.8452C4.34222 17.5326 4.16663 17.1087 4.16663 16.6667V5.00001H15.8333Z"
                                stroke="#B6B6B6" strokeWidth="1.2" strokeLinecap="round"
                                strokeLinejoin="round" />
                            <path d="M8.33337 9.16667V14.1667" stroke="#B6B6B6" strokeWidth="1.2"
                                  strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M11.6666 9.16667V14.1667" stroke="#B6B6B6" strokeWidth="1.2"
                                  strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span onClick={onClickClear}>Очистить корзину</span>
                    </Clear>
                </Top>
                <Items>
                    {
                        items.map(item => (
                            <CartItem
                                key={item.id}
                                {...item}
                            />
                        ))
                    }
                </Items>
                <Bottom>
                    <Details>
                        <ProductCount>Всего товаров:<span>{itemsTotalCount}</span><span>шт.</span></ProductCount>
                        <CashCount>Сумма заказа:<span>{totalPrice}</span><span>₽</span></CashCount>
                    </Details>
                    <CartButtons>
                        <Button>
                            <Link to={`/${page}`}>
                                <svg width="8" height="14" viewBox="0 0 8 14" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 13L1 6.93015L6.86175 1" stroke="#D3D3D3" strokeWidth="1.5"
                                          strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span onClick={onClickCategories}>Вернуться назад</span>
                            </Link>
                        </Button>
                        <Button>
                            <span>Оплатить</span>
                        </Button>
                    </CartButtons>
                </Bottom>
            </Content>
        </Container>
    );
};

export default Cart;