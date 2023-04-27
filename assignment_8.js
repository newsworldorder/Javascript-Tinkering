const fetchEarthquakeData = async () => {
  // Define the URL to fetch significant earthquake data from the last 30 days
  const url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson";

  // Use the fetch function to make an HTTP request to the specified URL and store the response in a variable
  const response = await fetch(url);

  // If the response is okay, parse the JSON data from the response and store it in a variable
  const data = await response.json();

  // Log the JSON data to the console
  console.log(data);
};

fetchEarthquakeData();
