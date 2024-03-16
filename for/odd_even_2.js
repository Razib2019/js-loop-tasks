/***
Subtask-1:
Find all the odd numbers from 61 to 100.
 */
for (let i = 61; i <= 100; i++) {
  if (i % 2 !== 0) {
    console.log("Odd numbers from 61 to 100:", i);
  } else {
    continue;
  }
}

/***
Subtask-2:
Find all the even numbers from 78 to 98.
 */
for (let n = 78; n <= 98; n++) {
  if (n % 2 === 0) {
    console.log("Even numbers from 78 to 98:", n);
  } else {
    continue;
  }
}
