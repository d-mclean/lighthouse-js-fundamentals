/* 20170930 DM - LHL prepwork test file, Module 4 [activity 30 (?)].


console.log(1000 / 999);
console.log(894 / 100);
console.log(Math.round(894 / 100));
console.log(Math.floor(894 / 100));
console.log(Math.round(5.2));

// Do not modify these first two lines
var iceCreamFlavours = ["chocolate", "vanilla", "cookies and cream", "rocky road", "strawberry"];
console.log(iceCreamFlavours);

// Your code below here...
iceCreamFlavours.push("root beer");

console.log(iceCreamFlavours);

console.log(iceCreamFlavours[0]);

console.log(iceCreamFlavours[5]);

console.log(iceCreamFlavours.length);

var raining = true;

if (raining) {
  console.log("Don't forget your umbrella!");
}
var iStr;

function whichSchool(age){
  if (age < 13)
    iStr = "Elementary School";
  else if (age >= 13 && age <=18)
    iStr = "Secondary School";
  else
    iStr = "Lighthouse Labs";

  return iStr;
}

console.log("I am 35. Which school should I go to?");
console.log(whichSchool(35));
console.log("I am 8. Which school should I go to?");
console.log(whichSchool(8));
console.log("I am 14. Which school should I go to?");
console.log(whichSchool(14));


console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined

console.log(Math.PI);
console.log(100 ^ 2);
*/

console.log(5 * "2");