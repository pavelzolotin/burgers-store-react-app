const Payment = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    return (
        <>
            <form name="payform-tinkoff" onSubmit={handleSubmit}>
                <input className="payform-tinkoff-row" type="hidden" name="terminalkey" value="TinkoffBankTest" />
                <input className="payform-tinkoff-row" type="hidden" name="frame" value="true" />
                <input className="payform-tinkoff-row" type="hidden" name="language" value="ru" />
                <input className="payform-tinkoff-row" type="text" placeholder="Сумма заказа" name="amount" required />
                <input className="payform-tinkoff-row" type="text" placeholder="Номер заказа" name="order" />
                <input className="payform-tinkoff-row" type="text" placeholder="Описание заказа" name="description" />
                <input className="payform-tinkoff-row" type="text" placeholder="ФИО плательщика" name="name" />
                <input className="payform-tinkoff-row" type="text" placeholder="E-mail" name="email" />
                <input className="payform-tinkoff-row" type="text" placeholder="Контактный телефон" name="phone" />
                <input className="payform-tinkoff-row" type="submit" value="Оплатить" />
            </form>
        </>
    );
};

export default Payment;