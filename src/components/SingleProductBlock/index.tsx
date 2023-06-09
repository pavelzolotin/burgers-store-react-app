import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

import { addItem } from '../../redux/cart/slice';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5rem;
  width: 120rem;
  height: 85vh;

  @media (max-width: 767px) {
    flex-direction: column;
    width: 100%;
    height: 100%;
    margin-top: 7rem;
  }

  img {
    width: 40%;

    @media (max-width: 767px) {
      width: 55%;
    }
  }
`;

const About = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;

  @media (max-width: 767px) {
    width: 100%;
  }

  &:before {
    content: '';
    background-color: rgba(129, 129, 129, 0.2);
    border-radius: 1rem 0 0 1rem;
    width: 50%;
    height: 70%;
    position: absolute;
    right: 0;
    z-index: -1;

    @media (max-width: 767px) {
      display: none;
    }
  }
`;

const H2 = styled.h2`
  width: 80%;
  color: ${({theme}) => theme.title};
  font-size: 3.6rem;
  font-weight: 300;
  letter-spacing: 1.4px;
  margin: 4rem 0 2rem 0;
`;

const Description = styled.p`
  width: 80%;
  color: ${({theme}) => theme.links};
  font-family: 'Helvetica Neue Light';
  font-size: 1.8rem;
  font-weight: 300;
  white-space: pre-line;
  letter-spacing: 1.2px;
  line-height: 2.3rem;
  margin-bottom: 4rem;
  transition: all .3s;
`;

const Bottom = styled.div`
  display: flex;
  gap: 3rem;

  @media (max-width: 767px) {
    flex-direction: column-reverse;
  }
`;

const PriceBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  width: 80%;
`;

const Price = styled.div`
  color: ${({theme}) => theme.links};
  font-weight: 300;
  font-size: 3.2rem;
  letter-spacing: 1.2px;
  line-height: 2.7rem;
  margin-bottom: 8rem;
  transition: all .3s;

  span {
    color: ${({theme}) => theme.links};
    opacity: 0.5;
    transition: all .3s;
    margin-left: .5rem;
  }
`;

const Button = styled.button`
  padding: 1.5rem 2.5rem;
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

const SingleProductBlock = ({cartItem, currentProduct}) => {
    const dispatch = useDispatch();

    const addedCount = cartItem ? cartItem.count : 0;

    const onClickAdd = () => {
        const id = currentProduct.id;
        const title = currentProduct.title;
        const price = currentProduct.price;
        const imageUrl = currentProduct.imageUrl;
        const count = currentProduct.count;

        const item = {
            id,
            title,
            price,
            imageUrl,
            count
        };

        dispatch(addItem(item));
    };

    return (
        <Container>
            <img
                src={
                    currentProduct && currentProduct.imageUrl
                    && currentProduct.imageUrl
                }
                alt="single-product"
            />
            <About>
                <H2>{currentProduct.title}</H2>
                <Description>{currentProduct.descriptionFull}</Description>
                <PriceBox>
                    <Price>{currentProduct.price}<span>₽</span></Price>
                </PriceBox>
                <Bottom>
                    <Link to="/burgers">
                        <Button>
                            <svg width="8" height="14" viewBox="0 0 8 14" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 13L1 6.93015L6.86175 1" stroke="#D3D3D3" strokeWidth="1.5"
                                      strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span>Вернуться назад</span>
                        </Button>
                    </Link>
                    <Button onClick={() => onClickAdd()}>
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
                        <span>Добавить</span>
                        {
                            addedCount > 0 && <i>{addedCount}</i>
                        }
                    </Button>
                </Bottom>
            </About>
        </Container>
    );
}

export default SingleProductBlock;