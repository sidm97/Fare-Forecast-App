// Sid's currency exchange code
const currencyAPI = 'https://v6.exchangerate-api.com/v6/cce8439a497e07a97ad9f20f/pair/gbp/';
const locationAPI = "http://api.openweathermap.org/geo/1.0/direct?q=";
const locationAPIkey = "&appid=7029ec148d2666f47569499650a8ea2e";
const databaseLink = "https://pkgstore.datahub.io/core/country-codes/country-codes_json/data/616b1fb83cbfd4eb6d9e7d52924bb00a/country-codes_json.json";
let searchString;
let querylocationURL;
let querycurrencyURL;

// user submits city --> geocoding API takes the city and returns a country code --> another database, link below, takes country code and returns a currency code --> currency exchange API takes this currency code to return conversion ratez
$("#button-addon2").on("click", function () {
    $("#currency_text").empty();
    searchString = $("#destination-input").val().toUpperCase();
    console.log("searching for: " + searchString);
    querylocationURL = locationAPI + searchString + locationAPIkey;
    console.log("URL for weather API is : " + querylocationURL);
    // below is geocoding API code
    fetch(querylocationURL)
    .then(function (response) {return response.json();})
    .then(function (data) {
        console.log(data[0]);
        let locationCountry = data[0].country
        console.log("Country code for city is : " + locationCountry);
        // below is database to convert country code to currency code
        fetch(databaseLink)
        .then(function (response) {return response.json();}).then(function(data){
            console.log(data.find(item => item['ISO3166-1-Alpha-2'] === locationCountry));
            return(data.find(item => item['ISO3166-1-Alpha-2'] === locationCountry)); ;})
            .then(function (final) {
                let currencyName = final["ISO4217-currency_name"];
                console.log("Currency name is : " + currencyName);
                console.log(typeof(currencyName));
                // Here are 2 if statements for the undesirable possibilities present in the country database
                if (currencyName === null) {
                    let consolationString = "We're sorry, we don't seem to have data on the currency exchange rate for your destination";
                    $("#currency_text").append(consolationString);
                    return;
                }
                if (currencyName.indexOf(",") > -1) {
                    let consolationString = "We're sorry, we don't seem to have data on the currency exchange rate for your destination";
                    $("#currency_text").append(consolationString);
                    return;
                }
                let currencyCode = final["ISO4217-currency_alphabetic_code"];
                console.log("Currency code is : " + currencyCode);
                let querycurrencyURL = currencyAPI + currencyCode;
                console.log("Final URL for exchange rate search is : " + querycurrencyURL);
                // below is exchange API to convert currency code to exchange rate
                fetch(querycurrencyURL)
                .then(function (response) {return response.json();})
                .then(function (data) {
                    let conversionRate = data.conversion_rate;
                    let createdString = ("The current exchange rate from Pound Sterling (GBP) to " + currencyName + " (" + currencyCode + ") is " + conversionRate);
                    $("#currency_text").append(createdString);
                    console.log(createdString);
                })
            })
        });
        $(".form-control").val("");
    })