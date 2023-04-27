const url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson";

fetch(url)
  .then(response => response.json())
  .then(data => {
    // Log the fetched data to the console
    console.log(data);
  });
