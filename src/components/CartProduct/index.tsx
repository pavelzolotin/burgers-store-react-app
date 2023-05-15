import { useDispatch } from 'react-redux';

import styled from 'styled-components';

import { addItem, minusItem, removeItem } from '../../redux/cart/slice';
import { CartItem } from '../../redux/cart/types';

const Product = styled.div`
  display: flex;
  width: 100%;
  border-top: 1px solid #333333;
  padding-top: 3rem;
  margin-top: 3rem;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

const Image = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1.5rem;

  @media (max-width: 767px) {
    justify-content: center;
    margin-bottom: 5rem;
  }

  img {
    width: 15rem;

    @media (max-width: 767px) {
      width: 60%;
      height: 100%;
    }
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40%;

  @media (max-width: 767px) {
    width: 100%;
    align-items: center;
    margin-bottom: 4rem;
  }

  h3 {
    font-size: 2.2rem;
    line-height: 2.7rem;
    letter-spacing: 0.01em;
    color: ${({theme}) => theme.links};
  }

  p {
    font-size: 1.8rem;
    color: #8d8d8d;
  }
`;

const Action = styled.div`
  display: flex;
  width: 45%;
  justify-content: space-between;

  @media (max-width: 767px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

const Count = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  width: 15%;

  @media (max-width: 767px) {
    align-items: center;
    position: absolute;
    left: 1.5rem;
  }

  b {
    font-size: 2.2rem;
    color: ${({theme}) => theme.links};
  }
`;

const ButtonPlus = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3.2rem;
  height: 3.2rem;
  min-width: 3.2rem;
  padding: 0;
  border-width: .2rem;
  background-color: #f5f5f5;

  &,
  span {
    color: #333333;
  }

  svg {
    path {
      fill: #333333;
    }
  }

  &:hover {
    background-color: #fbb040;
  }
`;

const ButtonMinus = styled(ButtonPlus)`
  &.disabled {
    background-color: #ffffff73;
  }
`;

const Price = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 33%;
  font-size: 2.2rem;
  color: ${({theme}) => theme.links};

  @media (max-width: 767px) {
    justify-content: center;
    margin: 4rem 0 4rem .5rem;
  }
`;

const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 4%;

  @media (max-width: 767px) {
    justify-content: center;
    position: absolute;
    right: 3rem;
  }

  svg {
    transform: rotate(45deg);
  }
`;

const Circle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3.2rem;
  height: 3.2rem;
  min-width: 3.2rem;
  padding: 0;
  border-width: .2rem;
  background-color: #f5f5f5;

  &,
  span {
    color: #333333;
  }

  svg {
    path {
      fill: #333333;
    }
  }

  &:hover {
    background-color: #fbb040;
  }
`;

type CartItemProps = {
    id: string;
    title: string;
    price: number;
    count: number;
    imageUrl: string;
};

const CartProduct = ({id, title, price, count, imageUrl}: CartItemProps) => {
    const dispatch = useDispatch();

    const onClickPlus = () => {
        dispatch(addItem({
            id
        } as CartItem));
    };

    const onClickMinus = () => {
        if (count > 1) {
            dispatch(minusItem(id));
        }
    };

    const onClickRemove = () => {
        if (window.confirm('Вы хотите удалить позицию?')) {
            dispatch(removeItem(id));
        }
    };

    return (
        <Product>
            <Image>
                <img
                    src={imageUrl}
                    alt=""
                />
            </Image>
            <Info>
                <h3>{title}</h3>
            </Info>
            <Action>
                <Count>
                    <ButtonMinus
                        className={`${count === 1 ? 'disabled' : ''}`}
                        onClick={onClickMinus}
                    >
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
                                fill="#EB5A1E" />
                        </svg>
                    </ButtonMinus>
                    <b>{count}</b>
                    <ButtonPlus onClick={onClickPlus}>
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
                                fill="#EB5A1E" />
                            <path
                                d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
                                fill="#EB5A1E" />
                        </svg>
                    </ButtonPlus>
                </Count>
                <Price>
                    <div>{price * count} <span>₽</span></div>
                </Price>
                <Remove
                    onClick={onClickRemove}
                >
                    <Circle>
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
                                fill="#EB5A1E" />
                            <path
                                d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
                                fill="#EB5A1E" />
                        </svg>
                    </Circle>
                </Remove>
            </Action>
        </Product>
    );
};

export default CartProduct;