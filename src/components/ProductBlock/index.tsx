import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import styled from 'styled-components';

import { addItem } from '../../redux/cart/slice';
import { cartItemSelectorById } from '../../redux/cart/selectors';

const Product = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 33%;
  margin-bottom: 12rem;
  border-radius: 1rem;
  transition: all .3s;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    background-color: rgba(129, 129, 129, .2);
    transform: translateY(-1rem);
  }

  @media (min-width: 1420px) {
    width: 25%;
  }

  @media (max-width: 767px) {
    width: 100%;
  }
`;

const ImageBox = styled.div``;

const Img = styled.img`
  width: 22rem;
  height: 22rem;
  object-fit: contain;
`;

const H3 = styled.h3`
  color: ${({theme}) => theme.title};
  font-size: 2.4rem;
  font-weight: 300;
  letter-spacing: 1.4px;
  margin-bottom: 2rem;
`;

const H4 = styled.h4`
  color: ${({theme}) => theme.links};
  font-family: 'Helvetica Neue Light';
  font-size: 1.8rem;
  font-weight: 300;
  white-space: pre-line;
  letter-spacing: 1.2px;
  line-height: 2.3rem;
  transition: all .3s;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.4rem;

  @media (min-width: 1500px) {
    padding: 1.8rem;
  }

  @media (max-width: 1400px) {
    width: 75%;
  }

  @media (max-width: 767px) {
    width: 100%;
  }
`;

const Price = styled.div`
  color: ${({theme}) => theme.links};
  font-family: 'Helvetica Neue Medium';
  font-weight: 300;
  font-size: 2.6rem;
  letter-spacing: 1.2px;
  line-height: 2.7rem;
  transition: all .3s;

  span {
    color: ${({theme}) => theme.links};
    opacity: 0.5;
    transition: all .3s;
    margin-left: -.2rem;
  }
`;

const Button = styled.button`
  height: 5.2rem;
  color: ${({theme}) => theme.buttonText};
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
  }
  
  i {
    display: inline-block;
    border-radius: 30px;
    background-color: #fbb040;
    border: 1px solid #333;
    color: #333;
    font-weight: 300;
    width: 2.3rem;
    height: 2.4rem;
    font-style: normal;
    font-size: 1.4rem;
    line-height: 2.2rem;
    position: relative;
    top: 0;
    left: .7rem;
  }
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  height: 12rem;
`;

const ProductBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 5rem;
  padding: 0 1.2rem;
`;

const ProductBlock = ({id, title, imageUrl, descriptionShort, price}) => {
    const dispatch = useDispatch();
    const cartItem = useSelector(cartItemSelectorById(id));

    const addedCount = cartItem ? cartItem.count : 0;

    const onClickAdd = () => {
        const item = {
            id,
            title,
            price,
            imageUrl,
            count: 0
        };

        dispatch(addItem(item));
    };

    return (
        <Product>
            <ImageBox>
                <Link to={`/items/${id}`}>
                    <Img
                        src={imageUrl}
                        alt="product"
                    />
                </Link>
            </ImageBox>
            <Info>
                <TextBox>
                    <H3>{title}</H3>
                    <H4>{descriptionShort}</H4>
                </TextBox>
                <ProductBottom>
                    <Price>{price} <span>₽</span></Price>
                    <Button
                        onClick={() => onClickAdd()}
                    >
                        <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                                fill="white"
                            />
                        </svg>
                        <span>Выбрать</span>
                        {
                            addedCount > 0 && <i>{addedCount}</i>
                        }
                    </Button>
                </ProductBottom>
            </Info>
        </Product>
    );
};

export default ProductBlock;