
import axios from 'axios'

export const bitcoinService = {
  getRate,
  getMarketPriceHistory,
  getAvgBlockSize
}

let cachedRate = null
let cachedMarketPriceHistory = null
let cachedAvgBlockSize = null

async function getRate() {
  if (cachedRate) {
    return cachedRate
  }

  try {
    const response = await axios.get('https://blockchain.info/tobtc?currency=USD&value=1')
    cachedRate = (response.data/response.data/response.data).toFixed(2)

    return cachedRate
  } catch (error) {
    console.error('Error retrieving exchange rate:', error)
    throw error
  }
}

async function getMarketPriceHistory() {
  if (cachedMarketPriceHistory) {
    return cachedMarketPriceHistory
  }

  try {
    const response = await axios.get(
      'https://api.blockchain.info/charts/market-price?timespan=6months&format=json&cors=true'
    )
    cachedMarketPriceHistory = response.data
    let byMonth = cachedMarketPriceHistory.values
    const idxs = [1, 30, 60, 90, 120, 150]
    const dataPerMonth = []

    idxs.forEach(index => {
      if (index < byMonth.length) {
        dataPerMonth.push(byMonth[index].y)
      }
    })
console.log('dataPerMonth: ', dataPerMonth )
    return dataPerMonth
  } catch (error) {
    console.error('Error retrieving market price history:', error)
    throw error
  }
}

async function getAvgBlockSize() {
  if (cachedAvgBlockSize) {
    return cachedAvgBlockSize
  }

  try {
    const response = await axios.get(
      'https://api.blockchain.info/charts/avg-block-size?timespan=6months&format=json&cors=true'
    )
    cachedAvgBlockSize = response.data
    return cachedAvgBlockSize
  } catch (error) {
    console.error('Error retrieving average block size:', error)
    throw error
  }
}
