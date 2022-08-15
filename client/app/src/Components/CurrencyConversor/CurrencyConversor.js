import InputWithLabel from '../InputWithLabel/InputWithLabel'
import Select from '../Select/Select'
import WrapperDirection from '../WrapperDirection/WrapperDirection'

import './CurrencyConversor.css'

const getCurrenciesDropdowns = ({ conversions, selectFromOptions, selectToOptions }) => {

    if (!(Array.isArray(conversions))) return false;

    const conversionsEach = { from: [], to: [] };

    conversions.forEach((elm, idx) => {

        if (elm.fromName)
            conversionsEach.from.push({
                id: "f-" + idx,
                value: elm.fromName
            });

        if (elm.toName)
            conversionsEach.to.push({
                id: "t-" + idx,
                value: elm.toName
            });
    })

    const selectFrom = <Select options={conversionsEach.from} {...selectFromOptions} />
    const selectTo = <Select options={conversionsEach.to} {...selectToOptions} />

    return [selectFrom, selectTo];
}

const CurrencyConversor = ({ conversions, currencies, currenciesDispatch, className }) => {

    const onChangeConversorHandler = (evt) => {
        console.log("u didnt tell me what to do when the selectors change so f* u");
    }

    const onChangeAmount = (evt) => {

        if (isNaN(evt.target.value) || !evt.target.value) return;

        const action = evt.target.name.includes("from") ? "fromAmount" : "toAmount";

        currenciesDispatch({
            type: action,
            data: {
                value: evt.target.value
            }
        });
    }

    const [currenciesFromElement, currenciesToElement] = getCurrenciesDropdowns({
        conversions: conversions,
        selectFromOptions: {
            name: "currenciesFrom",
            onChange: onChangeConversorHandler
        },
        selectToOptions: {
            name: "currenciesTo",
            onChange: onChangeConversorHandler
        }
    });

    return (
        <WrapperDirection
            direction="vertical"
            className={`CurrencyConversor ${className}`}
        >
            <InputWithLabel label="Recibes">
                <WrapperDirection direction="horizontal">
                    <input
                        type="number"
                        placeholder="0.00"
                        name="fromAmount"
                        min={currencies.minFromValue}
                        onChange={onChangeAmount}
                        value={currencies.fromAmount}
                    />
                    {currenciesFromElement || <div>hola</div>}
                </WrapperDirection>
            </InputWithLabel>

            <InputWithLabel label="Pagas">
                <WrapperDirection direction="horizontal">
                    <input
                        type="number"
                        placeholder="0.00"
                        name="toAmount"
                        min={currencies.minFromValue / currencies.conversion}
                        onChange={onChangeAmount}
                        value={currencies.toAmount}
                    />
                    {currenciesToElement || <div>hola</div>}
                </WrapperDirection>
            </InputWithLabel>
        </WrapperDirection>
    )
}

export default CurrencyConversor