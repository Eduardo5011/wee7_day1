// .reduce this will take an array and return one value
const nums = [2, 4, 6, 8, 10]
let nums_sum = nums.reduce(
    (accumilated_num, current_num) =>{
        return accumilated_num + current_num
    }
)
console.log(nums_sum)

// .filter will add/remove elements based on a condition
let long_names = names.filter(
    element => element.length > 4
)
console.log(long_names)

// array methods .join .slice .search .splice
// ",".join(my_list)
console.log(names.join(", "))

//add to list
// python -- my_list.append()

names.push('Steve')
console.log(names)

//pop() -- takes out the end
console.log(names.pop())
console.log(names)

// . shift() -- takes out the front
console.log(names.shift())
console.log(names)

// . unshift() -- this ass to the front of the list 
// returning the length of the list
console.log(names.unshift("Steve"))
console.log(names)

// python => f"hello {name} thanks for coming"
//format string in JS

myName="Kevin"
console.log(`my name is ${myName}`)

// splice() -- cut your list
console/log(names)
let captured_names = names.splice(0, 2)
console.log(captured_names)
console.log(names)

// [ 'Steve', 'tate', 'toan', 'mccall']
let captured_names2 = names.splice(0,2, 'Fred')
console.log(captured_names2)
console.log(names)

let foods = ["pizza", "tacos", "dim sum", "ice cream", "fried rice"]
// change every other foods in the list with "Marshmellows"
function replace_names(){
    for(let i = 0; i<foods.length; i++){
        if( i % 2 == 0){
            foods.splice(i,1, "Marshmellow")
        }
    }
}
replace_names()
console.log(foods)


// without the if statement i+=2--------------------------
function replace_names(){
    for(let i = 0; i<foods.length; i+=2){
        
            foods.splice(i,1, "Marshmellow")
       
    }
}
replace_names()
console.log(foods)


// Stings
// .search

console.log("joshua".search('s')) // index of the s (2)
console.log("joshs".search('s')) // index of the fisrt s (2)
console.log("joshs".search('z')) //returns -1 because there is no z

// splice works for strings like splice does for arrays
console.log("Joshua",slice(0,4))


