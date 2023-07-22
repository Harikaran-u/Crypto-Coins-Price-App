import './index.css'

const CryptocurrencyItem = props => {
  const {cryptoCoin} = props
  const {currencyLogo, currencyName, euroValue, usdValue} = cryptoCoin

  const cryptoList = (
    <li className="list-cont">
      <div className="logo-name-cont">
        <img src={currencyLogo} alt={currencyName} className="coin-logo" />
        <p className="coin-name">{currencyName}</p>
      </div>
      <div className="currency-rate-cont">
        <p className="rate">{euroValue}</p>
        <p className="rate">{usdValue}</p>
      </div>
    </li>
  )

  return cryptoList
}

export default CryptocurrencyItem
