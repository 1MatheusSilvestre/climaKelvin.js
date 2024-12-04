//defindo variavel kelvin e atribuindo valor 
const kelvin = 0;
//celsius é 273 menor que kelvin
const celsius = kelvin - 273;
//esqueção para calcular Farenheit
let Fahrenheit = celsius * (9/5) + 32;
//usando método .floor para arredondar
Fahrenheit = Math.floor(Fahrenheit);
console.log(`A temperatura é de ${Fahrenheit} graus Fahrenheit`);
//convertendo para Newton
let Newton = celsius * (33/100)
//usando método .floor para arredondar
Newton = Math.floor(Newton)
console.log(`A temperatura é de ${Newton} graus Newton`);
