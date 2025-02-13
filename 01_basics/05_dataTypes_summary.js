// primitive datatypes
// types : string , number ,null, boolean, undefined, symbol and BigInt

// (Reference) as Non primitive dataTypes:

// Array , object , function 


const score = 100
const valueScore = 100.4
const isLoggedIn = true
const temp = null

let state;

const id = Symbol('123')
const idValue = Symbol('123')


//console.log(id===idValue)


const heros = ["ironman" , "thor" , "loki"]; // array

let myObj = {
    name: "Bhanu", // object
    age: 25,

}

const myFunction = function(){
    console.log("hello world");    // function

} 
//console.log(typeof heros)


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// two types of memory 

// stack(primitive) and heap(non-primitve)


let one = "bhanuchauhan270@gmail.com"
let two = one
 two = "p.vashisht.com"
//console.log(one)
//console.log(two)


let userOne ={
    email: "bhnauchuahan@.com",
    age :445

}
let userTwo = userOne

//console.log(userTwo)

userTwo.email = "P.vahsuhst.com"

console.log(userOne.email)
console.log(userTwo.email)