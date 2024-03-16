/* 
Write a loop to print even numbers from 1 to 40. Use continue to skip odd numbers.
*/

let n = 1;
while (n <= 40) {
  if (n % 2 === 0) {
    console.log("Even numbers from 1 to 40:", n);
    n++;
  } else {
    n++;
    continue;
  }
}
