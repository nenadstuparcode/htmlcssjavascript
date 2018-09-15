


let john = {
    name:"john",
    yearOfBirth: 1990,
    calculateAge: function(){
        console.log(this);
        console.log(2016- this.yearOfBirth);
        function innerFunction(){
            console.log(this);
        }
        innerFunction();
    }
    
}


john.calculateAge();

class Car {
    constructor(model, year){
        this.model = model; 
        this.year = year;
    }
}

let Alfa = new Car('romeo', 2010);
console.log(Alfa);