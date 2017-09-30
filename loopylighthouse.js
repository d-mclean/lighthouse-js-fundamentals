/* 20170930 DM - LHL prepwork, Module 4 [activity 37 (?)].
  Print numbers 100 to 200 except
  -multiple of 3, print Loopy
  -mulitple of 4, print Lighthouse
  -multiple of 3 and 4, print LoopyLighthouse

*/

for (var i = 100; i <= 200; i++){
  if ((i % 3 == 0) && (i % 4 == 0))
    console.log("LoopyLighthouse");
  else if (i % 3 == 0)
    console.log("Loopy");
  else if (i % 4 == 0)
    console.log("Lighthouse");
  else
    console.log(i);
}