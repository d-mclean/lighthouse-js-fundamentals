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


var arrRange; //Return array which is empty if there is a problem.
var i;        //Counter.

function range(start, end, step) {
  arrRange = []; //Initialize array.

  if ((start === undefined || end === undefined || step === undefined) || (start > end) || (step < 0))
    i = 0;  //i.e. no op.
  else
    for (i = start; i <= end; i = i + step){
      arrRange.push(i);
    }

  //console.log(arrRange);
  return arrRange;
}

//range(1,undefined,1);
range(0, 8, 2);
//range(10, 30, 5);
//range(-5, 2, 3);


Define a function lastIndexOf, which, given an array and a value,
returns the index of the last time the value occurs in the array.
If the value never occurs, the function should return -1.


function lastIndexOf(arrArr, iValue) {
  var iCheck = -1; //Initialize value with 'not found' value.

  for (var i = 0; i < arrArr.length; i++){
    if (arrArr[i] == iValue)
      iCheck = i;
  }

  return iCheck;
  //console.log(iCheck);
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);

*/

//This function concatenates the arrays together.
function concat(arrArr1, arrArr2){
  var arrConCat = []; //Used to hold the concatenated array.

  for (var i = 0; i < arrArr1.length; i++){
    arrConCat.push(arrArr1[i]);
  }

  for (i = 0; i < arrArr2.length; i++){
    arrConCat.push(arrArr2[i]);
  }

  //console.log(arrConCat);
  return arrConCat;
}

console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]);
console.log(concat([], [ 9, 7, 2 ]), "=?", [ 9, 7, 2 ]);
console.log(concat([ 5, 10 ], []), "=?", [ 5, 10 ]);