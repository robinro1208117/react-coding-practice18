// Write your JS code here
import '../CryptocurrenciesList/index.css'

const ListItem = ({listVal}) => (
  <li className=" align">
    <div style={{display: 'flex'}}>
      <img
        src={listVal.currency_logo}
        alt={listVal.currency_name}
        className="logo"
      />
      <p className="start">{listVal.currency_name}</p>
    </div>
    <div className="currency">
      <p>{listVal.usd_value}</p>
      <p>{listVal.euro_value}</p>
    </div>
  </li>
)

export default ListItem
