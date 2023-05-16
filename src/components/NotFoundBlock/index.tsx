import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

import { setCategories } from '../../redux/categories/slice';

const Container = styled.div`
  padding: 15rem;
  margin: 0 auto;
  text-align: center;

  @media (max-width: 767px) {
    padding: 0;
    margin: 7rem auto;
  }
`;

const H1 = styled.h1`
  font-size: 2.8rem;
  color: #555555;
  margin: 4rem 0 4rem 0;
`;

const Description = styled.p`
  font-size: 2.2rem;
  color: #f5f5f5;
`;

const Button = styled.button`
  padding: 1.5rem 2.5rem;
  margin-top: 5rem;
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
    font-weight: 600;
    font-size: 1.6rem;
  }
`;

const NotFound = () => {
    const dispatch = useDispatch();

    const onClickCategories = () => {
        dispatch(setCategories('Бургеры'));
    };

    return (
        <Container>
            <H1>Ничего не найдено</H1>
            <Description>К сожалению, данная страница отсутствует.</Description>
            <Link to="/">
                <Button>
                    <svg width="8" height="14" viewBox="0 0 8 14" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 13L1 6.93015L6.86175 1" stroke="#D3D3D3" strokeWidth="1.5"
                              strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span onClick={onClickCategories}>Вернуться назад</span>
                </Button>
            </Link>
        </Container>
    );
};

export default NotFound;