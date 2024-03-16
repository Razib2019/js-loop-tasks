/***
Subtask-1:
Display sum of all the odd numbers from 81 to 131.
 */
let sum = 0;
let i = 81;
while (i <= 131) {
  if (i % 2 !== 0) {
    sum += i;
    i++;
  } else {
    i++;
    continue;
  }
}
console.log("Sum of all the even numbers from 81 to 131:", sum);

/***
Subtask-2:
Display sum of all the even numbers from 206 to 311.
 */
let addition = 0;
let n = 206;
while (n <= 311) {
  if (n % 2 === 0) {
    addition += n;
    n++;
  } else {
    n++;
    continue;
  }
}
console.log("Sum of all the even numbers from 206 to 311:", addition);
