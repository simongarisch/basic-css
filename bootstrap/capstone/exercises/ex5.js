/*
2520 is the smallest number that can be divided by each of the numbers
from 1 to 10 without any remainder.
What is the smallest positive number that is evenly divisible by all of
the numbers from 1 to 20?
*/

function is_divisible_to_20(x){
  // returns true if a number is evenly divisible by all of the
  // numbers from 1 to 20, false otherwise.
  var divisible = true;
  for(var i=1; i<=20; i++){
    if(x % i != 0){
      return false;
    }
  }
  return true;
}

var counter = 1;
while(true){
  if(is_divisible_to_20(counter)){
    break;
  }
  counter += 1;
}

console.log(counter); // 232,792,560
