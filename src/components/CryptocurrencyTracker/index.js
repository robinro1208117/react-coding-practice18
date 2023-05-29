// Write your code here
import {useEffect, useState} from 'react'
import Loader from 'react-loader-spinner'
import CryptoList from '../CryptocurrenciesList/index'
import './index.css'

const CryptoTracker = () => {
  const [isLoading, setLoading] = useState(true)
  const [values, setValues] = useState([])

  useEffect(() => {
    const controller = new AbortController()
    const {signal} = controller
    async function fetchData() {
      const s = await fetch('https://apis.ccbp.in/crypto-currency-converter', {
        signal,
      })
        .then(res => res.json())
        .then(jsonData => {
          setValues([...jsonData])
          setLoading(false)
        })
        .catch(err => setLoading(false))
    }
    fetchData(signal)

    return () => controller.abort()
  }, [])
  return (
    <div className="main">
      {!isLoading && (
        <>
          <h1>Cryptocurrency Tracker</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
            alt="cryptocurrency"
            className="img"
          />
          {values.length > 0 && <CryptoList value={values} />}
        </>
      )}{' '}
      {isLoading && (
        <div data-testid="loader">
          <Loader type="Rings" color="#ffffff" height={80} width={80} />
        </div>
      )}
    </div>
  )
}
export default CryptoTracker
