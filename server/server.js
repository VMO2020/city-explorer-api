// This library lets us access our .env file
require('dotenv').config();

// Express is a server library
const express = require('express');

// Initializes the express library
const app = express();

// MIDDLEWARE: library that determines who is allowed to speak to our server
const cors = require('cors');

// This settting says that everyone is allowed to speak to our server
app.use(cors());

// We are getting the port variable from the .env file.
const PORT = process.env.PORT || 8080;
const API_KEY = process.env.API_KEY;

// This is a route. if you turn the server on and go to http://localhost:8080
app.get('/', (request, response) => {
	response.json('Hello from the City Weather Explorer API home route...');
});

app.get('/weather', async (req, res) => {
	try {
		const city = req.query.city || 'London'; // Default to 'London' if city is not provided

		// Make the fetch request to the API
		const response = await fetch(
			`http://api.weatherapi.com/v1/current.json?key=52d59dfd83f840c9bb0160623231005&q=${city}&aqi=no`
		);
		const data = await response.json();

		// Return the data as the response
		res.json(data);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'An error occurred' });
	}
});

// Run the server
app.listen(PORT, () => console.log(`Running on ${PORT}`));
