/***
Subtask-1:
Find all the odd numbers from 61 to 100.
 */
let i = 61;
while (i <= 100) {
  if (i % 2 !== 0) {
    console.log("Odd numbers from 61 to 100:", i);
    i++;
  } else {
    i++;
    continue;
  }
}

/***
Subtask-2:
Find all the even numbers from 78 to 98.
 */
let n = 78;
while (n <= 98) {
  if (n % 2 === 0) {
    console.log("Even numbers from 78 to 98:", n);
    n++;
  } else {
    n++;
    continue;
  }
}
