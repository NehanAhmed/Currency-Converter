import { useId } from "react"; 


function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    CurrencyDisable = false,

    className = "h-[200px]",
}) {

const AmountInputId = useId();
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={AmountInputId} className="text-black/40 mb-2 inline-block text-2xl">
                    {label}
                </label>
                <input
                    id={AmountInputId}
                    className="outline-none w-full bg-transparent py-1.5 text-2xl"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-2 text-lg bg-zinc-200 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={CurrencyDisable}
                >

                    
                        {currencyOptions.map((currency) => (
                            <option key={currency} value={currency}>
                                {currency}
                            </option>
                        ))}
                    

                </select>
            </div>
        </div>
    );
}

export default InputBox;
