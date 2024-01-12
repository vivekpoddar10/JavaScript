"use strict";

const printCountryData = function(name, officialName, subregion, continent, capital,border) {
    console.log(`Country: ${name}
        Officially called: ${officialName}
        Region: ${subregion}, ${continent}
        Capital: ${capital}
        Neighbouring Countries: ${border}
    `);
}


//using XMLHttpRequests to fetch data from APIs
const getCountryAndItsNeighbour = function (name) {
  const request = new XMLHttpRequest();
  request.open("GET", `https://restcountries.com/v3.1/name/${name}`);
  request.send(); //sending the request for data to the servers

  //as it is asynchorous js, we will use callback function to display data once it is loaded
  request.addEventListener("load", function () {
    //parsing the data in json
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    printCountryData(name,data.name.official,data.subregion,data.continents,data.capital, data.borders.length);

    const neighbour = data.borders;
    if (!neighbour) return;
    
    //nested callback
    neighbour.forEach(function(ctry) {
        const request = new XMLHttpRequest();
        request.open('GET', `https://restcountries.com/v3.1/alpha/${ctry}`)
        request.send();
        request.addEventListener('load', function() {
            const [data] = JSON.parse(request.responseText);
            printCountryData(ctry,data.name.official,data.subregion,data.continents,data.capital,data.borders);
        })
    });
    
  });
};

getCountryAndItsNeighbour("Germany");

