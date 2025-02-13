const userOne = "Bhanu"

const userTwo = "Prashant"

//console.log(`My name is ${userOne} and my second name is ${userTwo}` );


const gamechanger = new String("Bhanu-bc-345")

// console.log(gamechanger[0])
// console.log(gamechanger.__proto__);

// console.log(gamechanger.length)
// console.log(gamechanger.charAt(2))

console.log(gamechanger.toUpperCase())

const newString  = gamechanger.substring(0,4)
//console.log(newString)

const anotherString = gamechanger.slice(-8,4)
//console.log(anotherString)

const name = "   bhanu    "
console.log(name.trim())

const url = "https//:bhanuchauhan270@gamil.com//"
//console.log(url.replace('//','pv'))

console.log(url.includes('pv'))

console.log(gamechanger.split('-'))