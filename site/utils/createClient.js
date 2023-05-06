require('dotenv').config()
const {createClient} = require('@sanity/client')

module.exports = createClient({
  projectId: 't2qgvbba',
  dataset: 'production',
  useCdn: false, // set to `false` to bypass the edge cache
  token: process.env.SANITY_TOKEN,
  apiVersion: '2023-05-03' // use current date (YYYY-MM-DD) to target the latest API version
})




