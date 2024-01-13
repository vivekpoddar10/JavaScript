"use strict";

const printCountryData = function (
  name,
  officialName,
  subregion,
  continent,
  capital,
  border
) {
  console.log(`Country: ${name}
        Officially called: ${officialName}
        Region: ${subregion}, ${continent}
        Capital: ${capital}
        Neighbouring Countries: ${border}
    `);
};

/*****************************************************************************
 * using XMLHttpRequests to fetch data from APIs
 *****************************************************************************/
const getCountryAndItsNeighbour = function (name) {
  const request = new XMLHttpRequest();
  //opening the url
  request.open("GET", `https://restcountries.com/v3.1/name/${name}`);
  //sending the request for data to the servers
  request.send();

  //as it is asynchorous js, we will not get the data immediately
  //so defining a callback function which will be called once the data gets loaded
  request.addEventListener("load", function () {
    //parsing the fetch data to json format
    const [data] = JSON.parse(this.responseText);

    //calling print function to print the desired data from the fetched result
    printCountryData(
      name,
      data.name.official,
      data.subregion,
      data.continents,
      data.capital,
      data.borders.length
    );

    //storing the neighbouring countries
    const neighbour = data.borders;
    if (!neighbour) return;

    /**
     * for each neighbouring, we will fetch its information by sending a new request
     */
    neighbour.forEach(function (ctry) {
      const request = new XMLHttpRequest();
      request.open("GET", `https://restcountries.com/v3.1/alpha/${ctry}`);
      request.send();

      //nested callback
      //we are defining a callback function inside a callback functio
      //which will result in callback hell
      request.addEventListener("load", function () {
        const [data] = JSON.parse(request.responseText);
        printCountryData(
          ctry,
          data.name.official,
          data.subregion,
          data.continents,
          data.capital,
          data.borders
        );
      });
    });
  });
};

//getCountryAndItsNeighbour("Germany");

/*****************************************************************************
 * using Promise to fetch data from APIs
 * error handling
 *****************************************************************************/
const getCountryData = function (country) {
  //it will create a promise for giving the data
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    // if the promise is fulfilled, i.e data is received
    // we will convert the returned data in JSON format
    .then((response) => {
      //throwing an error manually if Promise is not fulfilled due to bad data
      if (!response.ok) {
        throw new Error(`Country not found`);
      }
      return response.json();
    })
    // .json() method itself create a new 'Promise'
    // if JSON data is received, we can use it according to our needs
    .then((ctryData) => {
      const [data] = ctryData;
      console.log(data);
      printCountryData(
        country,
        data.name.official,
        data.subregion,
        data.continents,
        data.capital,
        data.borders.length
      );
      const neighbour = data.borders;
      if (!neighbour) return;
      console.log(neighbour);
    })
    // handling the exception, if any of the promise is rejected, or an error is thrown by the user
    .catch((err) => console.log(err.message));
  // .finally((catchMsg) => console.log(catchMsg));
};

//getCountryData("abcdefg");

/*****************************************************************************
 * Excercise
 *  -> Write a function to render details based on the GPS coordinates provided by the user
 *  -> @param (latitude, longitude)
 *  -> @return (city, country)
 *****************************************************************************/
const whereAmI = function (lat, lng) {
  fetch(`https://geocode.xyz/${lat},${lng}?json=1`)
    .then((response) => {
      if (!response) {
        throw new Error(`Wrong ${lat} and ${lng} values. No City found`);
      }
      return response.json();
    })
    .then((data) => {
      console.log(
        `You are in ${data.city}, ${data.state}, ${data.country}. Your TimeZone is : ${data.timezone}`
      );
    })
    .catch((err) => console.log(err.message));
};

whereAmI(51.50354, -0.12768);

/*****************************************************************************
 * Event Loop
 *  -> All the async JS code loads in the web API section of the browser
 *  -> once it is loaded, the callback function associated with it goes to callback queue, if it was Promise then callback goes to microtask queue
 *  -> microtask queue has higher priority over callback queue
 *  -> now the event loop checks the call stack, wheter it is empty or not
 *  -> if it is empty, callback from microtask is loaded to the call stack
 *  -> if any microtask callback takes longer execution time, then execution of callback from callback queue will be delayed
 *  -> if both call stack and microtask are empty, then callback from callback queue is loaded
 *  -> This phenomenon is called 'callback tick'
 *****************************************************************************/
console.log("Test event loop start");
setTimeout(() => console.log("0 sec timer"), 0);
Promise.resolve("Resolved Promise").then((res) => console.log(res));
//both setTimeout and Promise callback will be loaded at the same time
//but Promise will be executed first due to microtask priority
console.log("Test event loop End");

/******************************************************************************
 * Creating a Promise
 *  -> A promise is created using new Promise() constructor
 *  -> it has a callback function called 'Execution Function' which will be executed immediately
 *  -> Execution function has 2 callback function as arguments, one for success and other for failure
 *  -> based on the conditions, argument function is triggered
 *  -> whatever is passed inside those argument function will be the result that then, catch will fetch
 *  -> i.e. fulfilled(farg), farg will be passed to then method
 *  ->      rejected(rarg), rarg will be passed to catch block
 ******************************************************************************/
const lotteryPromise = new Promise(function (fulfilled, rejected) {
  console.log('Lottery draw is happening');
  setTimeout(function() {
    if (Math.random() >= 0.5) {
      fulfilled("You win 🏆");
    } else {
      rejected("You lost your money 🥺");
    }
  },2000)
});

//if promise is fulfilled, 'You Win 🏆' will be passed as an argument to the then method
//if promise is rejected, 'You lost your money 🥺' will be passed as an argument to the catch block
lotteryPromise.then((res) => console.log(res)).catch((err) => console.log(err));

//Promisifying setTimeout
const wait = function(arg, seconds) {
  return new Promise( function(resolved) {
    setTimeout(resolved(arg), seconds * 1000);
  });
};

wait('wait', 2).then(res => console.log(res))

/**
 * To resolve any promise immediately use static methods: Promise.resolve(), Promise.reject()
 */
