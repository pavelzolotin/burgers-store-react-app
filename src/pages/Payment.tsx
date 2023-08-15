import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import InputMask from 'comigo-tech-react-input-mask';

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
  margin: 5rem auto 0 auto;
  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;
  border: .2rem solid transparent;
  -webkit-user-select: none;
  user-select: none;

  @media (max-width: 767px) {
    width: 100%;
    margin: 0 auto;
  }
`;

const Title = styled.div`
  margin-bottom: 3rem;

  p {
    color: #f5f5f5;
    font-size: 2.2rem;
    white-space: pre-line;
    text-align: center;
  }
`;

const Fields = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const CustomField = styled.div`
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
  textarea {
    padding: 2rem 1rem 0px;
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

const Comment = styled(Adress)``;

const PhoneNumber = styled(CustomField)``;

const Button = styled.input`
  padding: .8rem 2.5rem;
  margin-top: 2rem;
  background-color: #81818133;
  color: #ffffff;
  border: .2rem solid #fbb040;
  line-height: 2.3rem;
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

const Payment = () => {
    const {totalPrice} = useSelector(cartSelector);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [adress, setAdress] = useState('');
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
                <p>Подтверждение заказа</p>
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
                    <CustomField>
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
                    </CustomField>
                    <input className="payform-tinkoff-row" type="hidden" placeholder="E-mail" name="email" />
                    <PhoneNumber>
                        <InputMask
                            className="payform-tinkoff-row"
                            type="text"
                            mask='+7 (999) 999-99-99'
                            placeholder='+7 (999) 999-99-99'
                            name="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                        />
                    </PhoneNumber>
                    <Adress>
                        <textarea
                            className="payform-tinkoff-row"
                            placeholder="Адрес доставки"
                            name="description"
                            value={adress}
                            onChange={(e) => setAdress(e.target.value.replace(/[a-zA-Z]*$/, ''))}
                            required
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
        </Content>
    );
};

export default Payment;