const axios = require('axios');
require('dotenv').config();

const {
  VTEX_ACCOUNT,
  VTEX_ENVIRONMENT = 'vtexcommercestable',
  VTEX_APPKEY,
  VTEX_APPTOKEN
} = process.env;

if (!VTEX_ACCOUNT || !VTEX_APPKEY || !VTEX_APPTOKEN) {
  console.error('Missing VTEX credentials. Please set VTEX_ACCOUNT, VTEX_APPKEY and VTEX_APPTOKEN in .env');
  return;
}

const instance = axios.create({
  baseURL: `https://${VTEX_ACCOUNT}.${VTEX_ENVIRONMENT}.com.br`,
  headers: {
    'X-VTEX-API-AppKey': VTEX_APPKEY,
    'X-VTEX-API-AppToken': VTEX_APPTOKEN,
    'Content-Type': 'application/json'
  }
});

async function fetchOrders() {
  try {
    const response = await instance.get('/api/oms/pvt/orders');
    console.log('Orders:', JSON.stringify(response.data, null, 2));
  } catch (error) {
    if (error.response) {
      console.error('Error:', error.response.status, error.response.data);
    } else {
      console.error('Error:', error.message);
    }
    return;
  }
}

fetchOrders();
