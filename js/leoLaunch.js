// the URL that returns your JSON

const url = "https://api.weather.gov/gridpoints/JAX/73,106/forecast/hourly"

//31.260034, -81.360242, St. Simon's Island, GA

// call the function to set everything in motion
fetchRemoteData(url)


//0 is to indicate which element is selected (eg the weather this afternoon)

function buildPage (weatherData) {
	
	console.log(weatherData)

	results = weatherData

	let container = document.querySelector(".forecast")

	let weather = weatherData.properties.periods[0]

	console.log(weather)
	console.log(container)

	console.log(weather[0])
	let output = `The temp will be ${weather.temperature} and the forecast will be ${weather.shortForecast}.`
	
	container.innerHTML = output
}

// this function handles your business for you
// and passes the results to the function above
// you don't need to chane anything here
async function fetchRemoteData(location) {
	const response = await fetch(location)
	if (!response.ok) {
    throw new Error(`An error has occured: ${response.status}`)
	}
	const weatherResponse = await response.json()
	buildPage(weatherResponse)	
}
