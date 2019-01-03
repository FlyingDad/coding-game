/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

// const poly = readline();
let poly = '(x-2)(x+2)'
// Write an action using print()
// To debug: printErr('Debug messages...');

// (?<=\()[^)]+(?=\))
let regex = /(?<=\()[^)]+(?=\))/ig
var result = poly.match(regex);
console.log(result);


// print('expandedpolynomial');