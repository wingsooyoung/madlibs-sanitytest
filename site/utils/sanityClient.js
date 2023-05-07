const sanityClient = require('@sanity/client')
module.exports = sanityClient({
    projectId: 't2qgvbba',
    dataset: 'production',
    apiVersion: '2023-05-03',
    useCdn: true
})

