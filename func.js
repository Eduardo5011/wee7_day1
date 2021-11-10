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

 const addNum3 = function(num1, num2){ //is better to use
     return num1 +num2
 }
 

 // as of ES6 we have arrow functions.. thre this refers to the global this
//const or let
 let multipleNums = () => {
     let num = 4;
     let num2 = 5;
     return num*num2
 }
 console.log(multipleNums())

 let multipleNums2 = (num, num2) => {
    let num = 4;
    let num2 = 5;
    return num*num2
}
console.log(multipleNums())

//undefined
function lame_functions(){
    5*2
    return
}
console.log(lame_functions())

// if only one line it will return that line
let multipleNums2 = (num, num2) => num*num2;
console.log(multipleNums(2,5))

// if you only have one parameter you dont need the param
let doubleNum = num => num*2

console.log(doubleNum(4))



let multipleNums = () => {
    let num = 4;
    let num2 = 5;
    return num*num2
}
console.log(multipleNums())


// self invoking functions
console.log(function(name){
    return name
}('Chris'))

//FLOW CONTROL
//if statements
// and is &&
//or is ||
function determineAge(age){
    if (age < 18){
        return 'Minor'
    }else if(age >= 18 && age<=65){
        return "Adult"
    }else{
        return 'Elderly'
    }
}
console.log(determineAge(65))

// Ternary Operator
//condition ? exprIfTrue : exprIfFalse
// "?"" if true ":" if false

var age = 12
var age_group = age > 20 ? "Over 20" : "Under 20"
console.log(age_group)

function dAge(age){
    return age < 18 ? "Minor" : ahe >=18 && age <65 ? "Adult":"elderly"
}
console.log(dAge(65))
console.log(age)

let z = 1
z++
console.log(z)


// LOOPS
function countByOne(){
    for(let i = 0; i < 20; i++){ // created a local variable
        console.log(i)

    }
}
countByOne()

//kinda like this
//let i = 0
//while i <20:
//  do stuff
//  i++

function countDownByOne(){
    for (let i = 20; i > 0; i-=2){
        console.log(i)
    }
}
countDownByOne()

//           0    1    2    3    4
let my_list = ["a", "b", "c", "d", "e"]
console.log(my_list.length)

for (let i = 0; i<list.length; i++){
    console.log(my_list[i])
}


// Python for name in names
//Get access to the object
//Use OF NOT IN, BIG DIFFERENCE
for (let char of my_list){
    console.log(char)
}
console.log("down here")

//Loop through an array inline!!!!!!
my_list.forEach( (char)=> console.log(char))

// .map .filter .reduce
// .map() will map function on an array
names = ["pari", "tate", "toan", "eduardo", "mike"]

let t_names = names.map(
    (name_) =>{
        if (name_[0] == 'T' || name_[0] == 't'){
            return name_
        }else{
            return False //lower case for false and true in JS
        }
    }
)
console.log(t_names)
console.log("eigniefneif".toUpperCase())

//declare a variable in () -----(let i = 0) --start at 0 and run this loop until
//some condition----so when i is <20 will give you 1-19
//for every iteration you add 1 to the i and keep doing until i=20 (step by 1)




