import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import InputMask from 'comigo-tech-react-input-mask';
import { AddressSuggestions, DaDataSuggestion, DaDataAddress } from 'react-dadata';
import 'react-dadata/dist/react-dadata.css';

import { cartSelector } from '../redux/cart/selectors';

const Content = styled.div`
  width: 60rem;
  height: 85vh;
  margin-top: 7rem;

  @media (max-width: 767px) {
    width: 100%;
    margin-top: 4rem;
    padding: 0 1.2rem;
  }

  h2 {
    text-align: center;
  }
`;

const FormContent = styled.form`
  background-color: #81818133;
  color: #f5f5f5;
  font-family: 'Play', sans-serif;
  font-size: 1.8rem;
  border-radius: .5rem;
  width: 75%;
  padding: 3rem;
  margin: 3rem auto 0 auto;
  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;
  border: .2rem solid transparent;
  -webkit-user-select: none;
  user-select: none;

  @media (max-width: 767px) {
    width: 100%;
  }
`;

const Title = styled.div`
  p {
    color: #f5f5f5;
    font-size: 1.8rem;
    white-space: pre-line;
    text-align: center;
    opacity: .4;
    margin-top: 1rem;
  }
`;

const Text = styled.h3`
  color: #f5f5f5;
  font-size: 2.2rem;
  font-weight: 100;
  text-align: center;
`;

const Fields = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const Name = styled.div`
  position: relative;
  
  &:before {
    content: '*';
    position: absolute;
    top: 1.3rem;
    left: -2rem;
    font-size: 1.6rem;
    color: #f5f5f5;
    opacity: .4;
  }
  
  input {
    padding: 1rem;
    min-width: 20rem;
    border-radius: .5rem;
    font-family: 'Play', sans-serif;
    font-weight: 300;
    font-size: 1.6rem;
    text-align: center;
    background-color: #81818133;
    color: #f5f5f5;
    border: none;

    &:focus-visible {
      outline: .2rem solid #fbb040;
    }
  }
`;

const Adress = styled.div`
  position: relative;

  &:before {
    content: '*';
    position: absolute;
    top: 1.3rem;
    left: -2rem;
    font-size: 1.6rem;
    color: #f5f5f5;
    opacity: .4;
  }
`;

const Comment = styled.div`
  textarea {
    padding: 2rem 1rem 0;
    min-width: 30rem;
    border-radius: 0.5rem;
    font-family: Play, sans-serif;
    font-weight: 300;
    font-size: 1.6rem;
    text-align: center;
    background-color: rgba(129, 129, 129, 0.2);
    color: rgb(245, 245, 245);
    border: none;

    &:focus-visible {
      outline: .2rem solid #fbb040;
    }

    @media (max-width: 767px) {
      min-width: 33rem;
    }
  }
`;

const PhoneNumber = styled(Name)``;

const Button = styled.input`
  padding: .8rem 2.5rem;
  margin-top: 2rem;
  background-color: #81818133;
  color: #ffffff;
  font-family: 'Helvetica Neue Medium';
  font-weight: 300;
  font-size: 1.6rem;
  letter-spacing: 1.2px;
  line-height: 2.3rem;
  border: .2rem solid #fbb040;
  border-radius: .5rem;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;
  -webkit-user-select: none;
  user-select: none;

  @media (hover: hover) {
    &:hover {
      background-color: #fbb040;
    }
  }
`;

const Bottom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
  
  svg {
    margin-right: .7rem;
  }
  
 button {
   padding: 1.2rem 2.5rem;
   margin-top: 2rem;
   background-color: #81818133;
   color: #ffffff;
   font-family: 'Helvetica Neue Medium';
   font-weight: 300;
   font-size: 1.6rem;
   letter-spacing: 1.2px;
   line-height: 2.3rem;
   border: .2rem solid #fbb040;
   border-radius: .5rem;
   text-align: center;
   cursor: pointer;
   transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;
   -webkit-user-select: none;
   user-select: none;

   @media (hover: hover) {
     &:hover {
       background-color: #fbb040;
     }
   }
 }
`;

const Payment = () => {
    const {totalPrice} = useSelector(cartSelector);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [adress, setAdress] = useState<DaDataSuggestion<DaDataAddress> | undefined>();
    const [comment, setComment] = useState('');
    const form = useRef();

    const w = window as any;

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        w.pay(form.current);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Content>
            <Helmet>
                <script src="https://securepay.tinkoff.ru/html/payForm/js/tinkoff_v2.js" type="text/javascript" />
            </Helmet>
            <Title>
                <Text>Подтверждение заказа</Text>
                <p>* - обязательное поле</p>
            </Title>
            <FormContent name="payform-tinkoff" onSubmit={handleSubmit} ref={form}>
                <Fields>
                    <input className="payform-tinkoff-row" type="hidden" name="terminalkey" value="1690797679440" />
                    <input className="payform-tinkoff-row" type="hidden" name="frame" value="false" />
                    <input className="payform-tinkoff-row" type="hidden" name="language" value="ru" />
                    <input
                        className="payform-tinkoff-row"
                        type="hidden"
                        placeholder="Сумма заказа"
                        name="amount"
                        value={totalPrice}
                    />
                    <input className="payform-tinkoff-row" type="hidden" placeholder="Номер заказа" name="order" />
                    <Name>
                        <input
                            className="payform-tinkoff-row"
                            type="text"
                            placeholder="Имя"
                            name="name"
                            maxLength={15}
                            value={name}
                            onChange={e => setName(e.target.value.replace(/[a-zA-Z0-9]*$/, ''))}
                            required
                        />
                    </Name>
                    <input className="payform-tinkoff-row" type="hidden" placeholder="E-mail" name="email" />
                    <PhoneNumber>
                        <InputMask
                            className="payform-tinkoff-row"
                            type="text"
                            mask="+7(\999) 999-99-99"
                            placeholder='+7 (999) 999-99-99'
                            name="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                        />
                    </PhoneNumber>
                    <Adress>
                        <AddressSuggestions
                            token="393b12bfd037ce56fd23d0554fd0304be0de2787"
                            value={adress}
                            onChange={setAdress}
                            inputProps={{
                                'placeholder': 'Адрес доставки',
                                'name': 'description',
                                'required': true
                            }}
                        />
                    </Adress>
                    <Comment>
                        <textarea
                            className="payform-tinkoff-row"
                            placeholder="Комментарий"
                            name="comment"
                            value={comment}
                            onChange={(e) => setComment(e.target.value.replace(/[a-zA-Z]*$/, ''))}
                        />
                    </Comment>
                    <Button className="payform-tinkoff-row" type="submit" value="Оплатить" />
                </Fields>
            </FormContent>
            <Bottom>
                <Link to="/cart">
                    <button>
                        <svg width="8" height="14" viewBox="0 0 8 14" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 13L1 6.93015L6.86175 1" stroke="#D3D3D3" strokeWidth="1.5"
                                  strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>Вернуться в корзину</span>
                    </button>
                </Link>
            </Bottom>
        </Content>
    );
};

export default Payment;