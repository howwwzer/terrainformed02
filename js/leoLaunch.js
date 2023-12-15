// the URL that returns your JSON

//using this database: https://celestrak.org/NORAD/elements/?FORMAT=json#:~:text=or%20so)%20Brightest-,Active%20Satellites,-Analyst%20Satellites

const url = "https://celestrak.org/NORAD/elements/gp.php?GROUP=last-30-days&FORMAT=json"


function buildPage(satelliteData) {
	console.log(satelliteData);
//I had to look to stack overflow for help since the JSON file had no properties/periods to follow.
	if (satelliteData && satelliteData.length > 0) {
	  const firstSatellite = satelliteData[0];
	  const object_name = firstSatellite.OBJECT_NAME;
	  const mean_motion = firstSatellite.MEAN_MOTION;
  
	  let container = document.querySelector(".satellite");
	  let output = `The object ${object_name}'s mean motion is ${mean_motion}.`;
  
	  container.innerHTML = output;
	} else {
	  console.error("No satellite data found in the array.");
	}
  }

async function fetchRemoteData(location) {
	const response = await fetch(location)
	if (!response.ok) {
    throw new Error(`An error has occured: ${response.status}`)
	}
	const weatherResponse = await response.json()
	buildPage(weatherResponse)	
}
