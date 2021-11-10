//printing
console.log("hello");

//variable
var my_name = "Austin";
console.log(my_name);

//integer
var some_num = 21;
console.log(some_num);

//float
var some_float = 3.14;
console.log(some_num);

//Arrays -- like a python list
var some_array = [1,2,3,4];
console.log(some_array);
console.log(some_array[2]);

// Object Variable == Like a python dictionary
var some_object = {'test': 'please test me'};
console.log(some_object);
console.log(some_object['test']);  // to get please test me
console.log(some_object.test);  // same for --please test me

my_key = "test"
console.log(some_object[my_key]);  //must know***
// console.log(some_object.my_key); does not work

// declare vars
var some_random_var;
consol.log(some_random_var);
some_random_var ="Christina"
console.log(some_random_var);

// JS hoisting
console.log(madeUpName)
var madeUpName = "Steve"
console.log(madeUpName)

test_hoist()

function test_hoist(){
    console.log("Hoisting function")
}

//WE USE camelCase!!!!!!!!
var myVarNamedJoe = "Joe"

let fullName = myVarNamedJoe + 'Quimby'
console.log(fullName)
fullName = "Mr. Burns"
console.log(fullName)

const superHero = "Ironman"
console.log(superHero)
// superHero = "spiderman"
//console.log(siperHero)




let sum= 5 + 5;
console.log(sum)//10
sum+=
console.log(sum)//15

//subtract
let diff = 5+5;
console.log(diff); //25
diff -= 5
console.log(diff);

//multiply
let product = 5*5;
console.log(product); //25
product*= 5
console.log(product) //125

//Divide
let divide = 5/5
console.log(divide) //1
console.log(typeof divide)
divide /= 5
console.log(divide) //20
console.log(typeof divide)

//exponential
let square = 5**2
console.log(square) //25
square **= 2
console.log(square) //625

//floor division
// in python we did 5//2 = 2
let floor = Math.floor(5/2)
console.log(floor)

// ceiling -- rounding up
let ceil =Math.ceil(5/2)
console.log(ceil) //3

//weird stuff
let stuff = 3.14 + '4'
console.log(stuff) //3.144

// int() float() str() in python
let stuff2=3.14 + parseInt('4')
console.log(stuff2) //7.14


let stuff3 = 3.14.toString() + "4"
console.log(stuff3) //3.144

// functions---

//let num=7 global
function addNums(){
   // console.losg(num) will get error
    let num = 4;
    let num2 = 5;
    console.log(num)
    return num + num2; //block scope
};

console.log(addNums())



function addNumns2(num1, num2){
    return num1 + num2

}
console.log(addNums2(4,5))







