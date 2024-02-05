// Sid's currency exchange code
const currencyAPI = 'https://v6.exchangerate-api.com/v6/cce8439a497e07a97ad9f20f/pair/gbp/';
const locationAPI = "http://api.openweathermap.org/geo/1.0/direct?q=";
const locationAPIkey = "&appid=7029ec148d2666f47569499650a8ea2e";
const databaseLink = "https://pkgstore.datahub.io/core/country-codes/country-codes_json/data/616b1fb83cbfd4eb6d9e7d52924bb00a/country-codes_json.json";
let searchString;
let querylocationURL;
let querycurrencyURL;

// user submits city --> geocoding API takes the city and returns a country code --> another database, link below, takes country code and returns a currency code --> currency exchange API takes this currency code to return conversion ratez
$("#submit").on("click", function () {
    $(".exchange_rate").empty();
    searchString = $("#city").val().toUpperCase();
    console.log("searching for: " + searchString);
    querylocationURL = locationAPI + searchString + locationAPIkey;
    console.log("URL for weather API is : " + querylocationURL);
