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
  console.log("Lottery draw is happening");
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      fulfilled("You win 🏆");
    } else {
      rejected("You lost your money 🥺");
    }
  }, 2000);
});

//if promise is fulfilled, 'You Win 🏆' will be passed as an argument to the then method
//if promise is rejected, 'You lost your money 🥺' will be passed as an argument to the catch block
lotteryPromise.then((res) => console.log(res)).catch((err) => console.log(err));

//Promisifying setTimeout
const wait = function (arg, seconds) {
  return new Promise(function (resolved) {
    setTimeout(resolved(arg), seconds * 1000);
  });
};

wait("wait", 2).then((res) => console.log(res));

/**
 * To resolve any promise immediately use static methods: Promise.resolve(), Promise.reject()
 */

/******************************************************************************
 * consuming Promises
 * Async function -> similar to normal function, but it is not executed immediately by the execution contest, it runs asynchronously
 * @returns 'Promise'
 * We use @await keyword before @fetch , it means the code will wait untill the @fetch fulfills the promise
 * It doesn't affect our code as the whole function is running asynchronously
 *
 * Both the below does exactly same thing, it's only way of writing and storing the value
 *
 * const response = await fetch(url);
 * const jsonData = await response.json();
 * console.log(jsonData)
 *
 * fetch(url).then(response => response.json()).then(data => console.log(data))
 *******************************************************************************/
const whereAreWe = async function (country) {
  //Hnadling the exception, if any of the promise is not fulfilled
  try {
    const resolved = await fetch(
      `https://restcountries.com/v3.1/name/${country}`
    );
    if (!resolved.ok) {
      throw new Error(`${country} not found`);
    }
    const [data] = await resolved.json();
    //returning a value from async function
    //const result = whereAreWe();
    //console.log(result) will print promise, not this string value
    return `${country}, its capital is ${data.capital}. It lies in ${data.subregion}, ${data.region}`;
  } catch (error) {
    throw error;
  }
};

//to print the return value from the async function we can use then method
whereAreWe("abc")
  .then((info) => console.log(info))
  .catch((err) => console.error(err.message));

//however we can also use and iife async method
(async function () {
  try {
    const result = await whereAreWe("pakistan");
    console.log(result);
  } catch (err) {
    console.log(err.message);
  }
})();

/*******************************************************************************
 * Running parallel promise: Promise.all([promise1, ...])
 *******************************************************************************/
const getJSON = function (url, errMsg = "data not found") {
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(`${errMsg}`);
    }
    return response.json();
  });
};

const runParallelPromise = async function (c1, c2, c3) {
  try {
    const data = await Promise.all([
      await getJSON(`https://restcountries.com/v3.1/name/${c1}`),
      await getJSON(`https://restcountries.com/v3.1/name/${c2}`),
      await getJSON(`https://restcountries.com/v3.1/name/${c3}`),
    ]);

    console.log(data);
  } catch (err) {
    throw err;
  }
};

runParallelPromise("Pakistan", "Nepal", "Sri Lanka");

/*********************************************************************************
 * Promise.allSettled()
 *  -> similar to Promise.all()
 *  -> but it returns all the promises whether they are fulfilled or rejected
 *********************************************************************************/
Promise.allSettled([
  Promise.resolve('sucess'),
  Promise.reject('Failure'),
  Promise.reject('Failure')
]).then(data => console.log(data));

/***********************************************************************
 * Promise.race()
 *  -> It returns the promise which is fulfilled first, whether it is rejected or fulfilled
 ***********************************************************************/

Promise.race([
  Promise.resolve('Failure'),
  Promise.reject('Success'),
  Promise.reject('Failure')
]).then(data => console.log(data))

/***********************************************************************
 * Promise.any()
 *  -> similar to Promise.race()
 *  -> but only returns the first fulfilled promise
 ***********************************************************************/

Promise.any([
  Promise.reject('failure'),
  Promise.reject('Failure'),
  Promise.resolve('Success after 2 failures'),
  Promise.reject('Failure')
]).then(data => console.log(data))
