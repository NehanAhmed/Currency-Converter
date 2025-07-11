import React, { useState } from 'react'
import { InputBox  } from './index'
import useCurrencyInfo from '../Hooks/useCurrencyInfo'
const ConverterCard = () => {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('pkr')
  const [convertedAmount, setconvertedAmount] = useState(0)
  const CurrencyInfo = useCurrencyInfo(from)
  const options = Object.keys(CurrencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setconvertedAmount(amount)
    setAmount(convertedAmount)
  }
  const convert = () => {
    setconvertedAmount(amount * CurrencyInfo[to])
  }
  const BackgroundImage = 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80'
  return (
    
     <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('${BackgroundImage}')`,
        }}
      >
        <div className="w-full">
          <div className="w-full max-w-3xl h-[530px] mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                convert();
              }}
              className='w-full flex flex-col justify-center items-center'
            >
              <div className="w-full mb-1">
                <InputBox
                  label="From"
                  amount={amount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setFrom(currency)}
                  selectCurrency={from}
                  onAmountChange={(amount) => setAmount(amount)}
                />
              </div>
              <div className="relative w-full h-0.5">
                <button
                  type="button"
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-full bg-blue-600 text-white px-10 py-5 text-2xl"
                  onClick={swap}
                >
                  swap
                </button>
              </div>
              <div className="w-full mt-1 mb-4">
                <InputBox
                  label="To"
                  amount={convertedAmount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setTo(currency)}
                  selectCurrency={to}
                  amountDisable
                />
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                Convert
              </button>
            </form>
          </div>
        </div>
      </div>
  )
}

export default ConverterCard