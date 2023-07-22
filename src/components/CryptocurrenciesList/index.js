import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrencyItem from '../CryptocurrencyItem/index'

import './index.css'

class CryptocurrenciesList extends Component {
  state = {cryptoData: [], isLoading: true}

  componentDidMount() {
    this.getCryptoDetails()
  }

  getCryptoDetails = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updatedData = data.map(eachData => ({
      id: eachData.id,
      currencyLogo: eachData.currency_logo,
      currencyName: eachData.currency_name,
      euroValue: eachData.euro_value,
      usdValue: eachData.usd_value,
    }))

    this.setState({cryptoData: updatedData, isLoading: false})
  }

  render() {
    const {cryptoData, isLoading} = this.state

    const loderEl = (
      <div data-testid="loader">
        <Loader type="Rings" color="#ffffff" height={80} width={80} />
      </div>
    )

    const mainList = (
      <div className="list-set-cont">
        <h1 className="heading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="logo"
        />

        {isLoading ? (
          loderEl
        ) : (
          <ul className="list-ele-cont">
            <div className="title-cont">
              <h1 className="title">Coin Type</h1>
              <div className="end-cont">
                <h1 className="title">USD</h1>
                <h1 className="title">EURO</h1>
              </div>
            </div>
            {cryptoData.map(eachCrypto => (
              <CryptocurrencyItem key={eachCrypto.id} cryptoCoin={eachCrypto} />
            ))}
          </ul>
        )}
      </div>
    )

    return mainList
  }
}

export default CryptocurrenciesList
