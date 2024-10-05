// Practice Assignment

var fruits = new Foodmart("Fruites", "Max 200 per kg", "National types", "Best", "different verieties", "As you required");
var vagetables = new Foodmart("Vagetables", "Max 100 perk kg", "All international types", "Medium", "different verieties", "Maximum");
var meets = new Foodmart("Meets", "Min 2000 per kg", "Only Halal", "Freash", "different verieties", "Maximum");
var fishes = new Foodmart("Fishes", "Min 1500 per kg", "All sea foods", "Freash", "All verieties", "As you required");
var chicken = new Foodmart("Chicken", "Max 100 per kg", "All parts of chicken", "Freash", "Best verieties", "As you required");


function Foodmart(name, price, types, quality, variety, quantity){
   this.name = name;
   this.price = price;
   this.types = types;
   this.quality = quality;
   this.variety = variety;
   this.quantity = quantity;
}
// console.log(fruits);
// console.log(vagetables);
// console.log(meets);
// console.log(fishes);
// console.log(chicken);
console.log(fruits, vagetables, meets, fishes, chicken);




// Practice example 1
var car1 = new Car("Silver", "Honda", 2024);
var car2 = new Car("black", "Toyta", 2020);

function Car(color, model, year){
   this.color = color;
   this.model = model;
   this.year = year;

   this.strat = function(){
    console.log(this.model + " has started")
   }
}
car1.strat(); 
console.log(car2);



// Practice example 2
var person1 = new Person('Ali', 'Ahmad', '20', 'Matric');
var person2 = new Person('Hashim', 'Ashraf', '29', 'Intermediate');
var person3 = new Person('Bilal', 'Abdullah', '45', 'Non Matric');

function Person(firstName, lastName, age, qualification){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.qualification = qualification;

    this.fullName = function (){
      return this.firstName + " " + lastName;
    };
}


console.log(person1.fullName());
console.log(person2.fullName());
console.log(person3.fullName());
