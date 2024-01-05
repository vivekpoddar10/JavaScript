// Javascript converts the string to an object first, then calls the function to perform the task
// once the task is done, primitive value is return
console.log(typeof new String('vivek')); //output: object
console.log(typeof new String('Vivek').slice(1)); // output: string
// i.e at back stage slice method is called on an object 


const airline = 'Air India';
console.log(airline[0]);
console.log(airline.length);
console.log(airline.indexOf('i'));
console.log(airline.lastIndexOf('i'));
console.log(airline.slice(1,4)); //output: 'ir I'
console.log(airline.slice(1,-1)); //output: 'ir Indi'

// spread operator
const myName = "Vivek Poddar";
const letters = [...myName];
console.log(letters);
const checkMiddleSeat = function(seat) {
    const lastChar = seat[seat.length - 1];
    if (lastChar === 'B' || lastChar === 'E'){
        console.log('you got middle seat');
    }else {
        console.log('You don\' have middle seat');
    }
}
checkMiddleSeat('11B')