/* 20170930 DM - LHL prepwork, Module 4 [activity 30 (?)].

This function should take 3 parameters:
name – a string representing someone's name
yearOfBirth – a number representing their year of birth
currentYear – a number representing the current year

*/

function ageCalculator(name, yearOfBirth, currentYear){
  return String(name) + " is " + String(currentYear - yearOfBirth) + " years old."
}

console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));