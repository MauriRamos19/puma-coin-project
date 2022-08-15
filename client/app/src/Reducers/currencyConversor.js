const isGreaterThenMinAmount = function (amount, minAmount) {
    return amount >= minAmount;
}

const currencyConversorReducer = function (prev, action) {

    const value = action.data.value
    
    switch (action.type) {
        case "fromAmount":

            if (!isGreaterThenMinAmount(value, prev.minFromValue)) return prev;

            return {
                ...prev,
                fromAmount: value,
                toAmount: value * prev.conversion
            }

        case "toAmount":

            if (!isGreaterThenMinAmount(value / prev.conversion, prev.minFromValue)) return prev;

            return {
                ...prev,
                toAmount: value,
                fromAmount: value / prev.conversion
            }

        case "conversion":

            return {
                ...prev,
                conversion: value
            };

        default:
            return { ...prev };
    }
}

export default currencyConversorReducer;