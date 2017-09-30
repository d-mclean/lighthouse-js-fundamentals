/* 20170930 DM - LHL prepwork, Module 4 [activity 30 (?)].

  This function returns how many hundreds fit into that number
  when given a number.
*/

function howManyHundreds(iNum){
  return Math.floor(iNum / 100);
}

console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);