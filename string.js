const airline = "Air India";
console.log(airline[0]);
console.log(airline.length);
console.log(airline.indexOf("i"));
console.log(airline.lastIndexOf("i"));

const checkMiddleSeat = function (seat) {
  const lastChar = seat[seat.length - 1];
  if (lastChar === "B" || lastChar === "E") {
    console.log("you got middle seat");
  } else {
    console.log("You don' have middle seat");
  }
};
checkMiddleSeat("11B");

console.log(airline.slice(1, 4)); //output: 'ir I'
console.log(airline.slice(1, -1)); //output: 'ir Indi'
// Javascript converts the string to an object first, then calls the function to perform the task
// once the task is done, primitive value is return
console.log(typeof new String("vivek")); //output: object
console.log(typeof new String("Vivek").slice(1)); // output: string
// i.e at back stage slice method is called on an object


// spread operator
const myName = "Vivek";
const letters = [...myName];
console.log(letters);// ['v', 'i', 'v', 'e', 'k']

// capitalize all the letters
const capitalize = function (name) {
  const passenger = name.toLowerCase().split(" "); //split() breaks the string at the occurence of specified character/sub-string and return an array of strings
  const formatName = [];
  for (const name of passenger) {
    formatName.push(name[0].toUpperCase() + name.slice(1));
  }
  return formatName.join(" "); //join() concatanate all the array elements with the string specified
};

console.log(capitalize("vIveK poddar"));

console.log("        vivek poddar     ".trim());

console.log("vivek poddar vivek".replaceAll("vivek", "ankit"));

//return booleans
// includes(), startswith(), endswith()

const checkBaggage = function (items) {};

checkBaggage("I have a laptop, some food, and a pocket knife");
checkBaggage("socks and camera");
checkBaggage("got some snacks and a gun for protection");

// padStart(len,str) makes a string of specified length by adding the sub-string at start
// padEnd(len,str) makes a string of specified length by adding the sub-string at end

console.log("vivek poddar".slice(-4).padStart(12, "*")); 
console.log("vivek poddar".slice(0, 4).padEnd(12, "*"));
console.log("✈️ ".repeat(5)); //repeats the string

//excercise
const convertToCamelCase = function (name) {
  const underScoreName = name.toLowerCase().trim().split("_");
  const newName = [underScoreName[0]];
  for (let i = 1; i < underScoreName.length; i++) {
    newName.push(
      underScoreName[i][0].toUpperCase() + underScoreName[i].slice(1)
    );
  }
  return newName.join("");
};
console.log(convertToCamelCase("my_name_is_vivek_poddar"));

const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis232369855;12:30";

const formatFlights = function (flights) {
  const information = flights.split("+");
  for (const rows of information) {
    const [type, from, to, time] = rows.split(";");
    const output = `${
      type.split("_").join(" ").trimStart().startsWith("Delayed")
        ? `😡 ${type.split("_").join(" ").trimStart()}`
        : `${type.split("_").join(" ").trimStart()}`
    } from ${from.slice(0, 3).toUpperCase()} to ${to
      .slice(0, 3)
      .toUpperCase()} (${time.replace(":", "h")})`;
    console.log(output.padStart(44));
  }
};

formatFlights(flights);
