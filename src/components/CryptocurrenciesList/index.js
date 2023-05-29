// Write your JS code here
import './index.css'
import ListItem from '../CryptocurrencyItem/index'

const CryptoList = ({value}) => (
  <ul className="list-container">
    <li className="heading align">
      <p className="start">Coin Type</p>
      <div className="currency">
        <p>USD</p>
        <p>EUROS</p>
      </div>
    </li>

    {value.map(each => (
      <ListItem key={each.id} listVal={each} />
    ))}
  </ul>
)

export default CryptoList
