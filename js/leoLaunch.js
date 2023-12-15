// the URL that returns your JSON

//using this database: https://celestrak.org/NORAD/elements/?FORMAT=json#:~:text=or%20so)%20Brightest-,Active%20Satellites,-Analyst%20Satellites

const url = "https://celestrak.org/NORAD/elements/gp.php?GROUP=last-30-days&FORMAT=json"


function buildPage(satelliteData) {
	
	console.log(satelliteData);

	results = satelliteData

	let container = document.querySelector(".satellite")

	let weather = satelliteDataData.properties.periods[0]

	console.log(satellite)
	console.log(container)

	console.log(satellite[0])
	let output = `The object ${object_name}'s mean motion is ${mean_motion}.`;
	
	container.innerHTML = output
}

async function fetchRemoteData(location) {
	const response = await fetch(location)
	if (!response.ok) {
    throw new Error(`An error has occured: ${response.status}`)
	}
	const weatherResponse = await response.json()
	buildPage(weatherResponse)	
}