# FareForcast-App

## Description
This the first project we've completed as a group. We the creators (sidm97, bootcampist, terr0y and shazna8181) wanted to build a website that would take a user's input on location of origin and destination and dates of travel to provide information about the places they wanted to travel to and how to get there. We've used a number of APIs. The most important is probably the luftansa flight scheduling API. 


![screenshot-03](./assets/image/sections.png)

Bootcampist worked with this API to fetch pertinent information for flights leaving to the destination (marked in red).
The weather API call was put together by terr0y using the Open Weather API and gives us information about the current weather conditions in the target city (marked in blue).
Sidm97 used the Exchangerate API coupled with Open Weather's geocoding API to use the user input to generate a conversion rate from origin to destination country (marked in green).
All of this information is parsed and assimilated into the HTML that shazna8181 put together, while bootcampist made final adjustments to the styling. We've used a combination of HTML CSS and Javascript to render to the page. We've also used Bootstrap and Jquery in this project for ease of design and coding.


## Usage
The user need simply input 4 details (marked) to obtain information. A city they're in currently, a city they'd like to visit, and dates they'd like to depart for and return from the city.
![screenshot-03](./assets/image/search-bar.png)


Link to repository: https://github.com/sidm97/Fare-Forecast-App

Link to live website: https://sidm97.github.io/Fare-Forecast-App/

## Credits
The Creators

Luftansa's developer network : https://developer.lufthansa.com/

The currency exchange API: https://app.exchangerate-api.com/dashboard

Open Weather : https://openweathermap.org/api

The Skills Bootcamp for teaching us how to use the above to create our finished product.

## License

MIT license