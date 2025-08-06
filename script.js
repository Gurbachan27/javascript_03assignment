// Wait for the DOM content to be fully loaded before executing JavaScript
document.addEventListener('DOMContentLoaded', function() {
            // Selecting necessary DOM elements
            const weatherForm = document.querySelector('#weather-form'); // Form element
            const cityInput = document.querySelector('#city-input'); // Input field for city
            const weatherInfo = document.querySelector('.weather-info'); // Div to display weather information
            const apiKey = '3adfbf9d34b24500a7c193209230612'; // API key for Weather API

            // Adding event listener to the form for submitting city name
            weatherForm.addEventListener('submit', function(event) {
                        event.preventDefault(); // Prevent form submission from refreshing the page

                        // Get the value of the input field (city name) and trim any whitespace
                        const cityName = cityInput.value.trim();

                        // Check if city name is empty
                        if (cityName === '') {
                            alert('Please enter a city name.'); // Show alert if city name is empty
                            return;
                        }
                        // Construct the API URL with the city name and API key
                        const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${encodeURIComponent(cityName)}`;

                        // Fetch weather data from the API
                        fetch(apiUrl)
                            .then(response => {
                                if (!response.ok) {
                                    throw new Error('Network response was not ok'); // Throw error if response is not successful
                                }
                                return response.json(); // Convert response to JSON format
                            })