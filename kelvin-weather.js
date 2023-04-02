//create a contant variable named kelvin and gave it value 293
const kelvin = 0;
//convert kelvin to celsius by subtractring kelvin by 273
let celsius = kelvin - 273;
console.log(celsius);
//convert celsius to fahrenheit by the formula and save it variable named fahrenheit
let fahrenheit = celsius*(9/5)+32;
// round down the Fahrenhet temperature ounds a number DOWN to the nearest integer since it often get a decimal number.
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`)

//converted ceslsius into newtons using the formula
let newton = celsius * (33/100)
//round down netwons to the nearest integer
newton = Math.floor(newton);
console.log(`The temperature is ${newton} newtons`)