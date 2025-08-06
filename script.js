// Wait for the DOM content to be fully loaded before executing JavaScript
document.addEventListener('DOMContentLoaded', function() {
            // Selecting necessary DOM elements
            const weatherForm = document.querySelector('#weather-form'); // Form element
            const cityInput = document.querySelector('#city-input'); // Input field for city
            const weatherInfo = document.querySelector('.weather-info'); // Div to display weather information
            const apiKey = 'b33e84342093468d95a180930250608'; // API key for Weather API

            // Adding event listener to the form for submitting city name
            weatherForm.addEventListener('submit', function(event) {
                        event.preventDefault(); // Prevent form submission from refreshing the page