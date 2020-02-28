const geolocation = require('./utils/geolocation')
const weather_forecast = require('./utils/weather_forecast')

const location = process.argv[2]

if (!location) {
    return console.log('Use: node app.sj \'City\'s name\'')
}
geolocation(location, (error, {latitude, longitude, location}) => {
    if (error) {
        return console.error(error)
    }
 
    console.log('Location:', location)

    weather_forecast(latitude, longitude, (error, data) => {
        if (error) {
            return console.error('Error:', error)
        }

        console.log('Weather:', data)  
    })
})


// geolocation('Cuiaba', (error, data) => {
//     console.log('Error:', error)
//     console.log('Data:', data)
// })

// weather_forecast({
//     latitude: 2,
//     longitude: 2,
//     location: 'somewhere'
// }, (error, data) => {
//     console.log('Error:', error)
//     console.log('Data:', data)  
// })

// const geolocationUrl = "http://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?language=en&limit=1&access_token=pk.eyJ1IjoiZGVqYWxtYSIsImEiOiJjazZqYWJsNXQwNTZsM2txbmJ4eHN2YzdiIn0.fbgjyhjJkJ7zqFGyKVTRcQ"

// request.get({uri: geolocationUrl, json: true}, (error, response) => {
//     if (error) {
//         console.error('Unable to connect to geolocation service!')
//     } else if(response.body.message && response.body.message === 'Not Found' || 
//         response.body.features.length === 0) {
//         console.error('Unable to find location! Try another search.')
//     } else {
//         const latitude = response.body.features[0].center[1]
//         const longitude = response.body.features[0].center[0]
//         console.log(response.body.features[0].text, '-', 'Latitude:', latitude, 'Longitude:', longitude)
//     }
// })


// const url = "https://api.darksky.net/forecast/f1d6089796845c6d3f07739c0bd65f37/37.8267,-122.4233?units=si&lang=pt"

// request.get({uri: url, json: true}, (error, response) => {
//     if (error) {
//         console.error('Unable to connect to weather service!')
//     } else if(response.body.error) {
//         console.error('Unable to finde location!')
//     } else {
//         console.log("%s It´s currentily %d degrees out. There is a %d% chance of rain.",
//             response.body.daily.data[0].summary,
//             response.body.currently.temperature, 
//             response.body.currently.precipProbability)
//     }
// })
