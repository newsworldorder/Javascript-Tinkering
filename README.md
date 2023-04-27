# Javascript-Tinkering

**Learning to use Fetch and Display Earthquake Data Using Javascript**

As suggested by Prof. Tumgoren in our private conversation via Slack, my primary objective	was to learn to use JS to fetch earthquake data from an external API and display such data on a webpage. 

Phase 1: 

- Find the website that contains the data: https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson 

Phase 2: 
- I utilized the JavaScript fetch function to make an HTTP request to the USGS API, retrieve the earthquake data, and parse it as JSON. 

Phase 3: Elevation
- I realized that just by embedding the JS script in a standard HTML file, it would just show a blank page. I therefore asked GPT-4 to create a table for me in HTML, and the result is beautifully displayed in the assignment_8.html file. The one thing that I did not understand about what GPT-4 returned is that it implemented a try-catch block to prevent the program from crashing or behaving unexpectedly when an error is encountered. This was not super intuitive. 

Degree of mastery: 
How well have you learned the technique: reasonably well. I learned that fetch is a built-in function to make HTTP requests to interact with API and pull JSON data back. Will need more practice on this but satisfied with what I have for now. Made sure to comment on every line of the code. 