import CryptocurrenciesList from '../CryptocurrenciesList/index'
import './index.css'

const CryptocurrencyTracker = () => {
  const cryptoApp = (
    <div className="bg-cont">
      <CryptocurrenciesList />
    </div>
  )

  return cryptoApp
}

export default CryptocurrencyTracker
