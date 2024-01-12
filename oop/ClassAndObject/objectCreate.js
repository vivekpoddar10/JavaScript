const Person = {
    calcAge(){
        return 2024 - this.birthYear;
    },
    init(name, birthYear){
        this.name = name;
        this.birthYear = birthYear;
    }
};

//in constructor function all the object created from the function automatically gets linked to the constructor function's prototype
// but if we wan to link any object with other object's prototype, we can do so with Object.create()


const vivek = Object.create(Person);
vivek.init('Vivek Poddar', 2002);
console.log(vivek);