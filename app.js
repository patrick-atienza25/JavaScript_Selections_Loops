console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

for (let i = 1; i <= 99; i += 2) {
  console.log(i);
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

for (let i = 1; i <= 99; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log(i, "FIZZBUZZ");
  } else {
    if (i % 3 == 0) {
      console.log(i, "FIZZ");
    } else if (i % 5 == 0) {
      console.log(i, "BUZZ");
    } else {
      console.log(i);
    }
  }
}

// Exercise 3 Section

let i = 1;

while (i <= 99) {
  let output = "";

  if (i % 3 == 0) {
    output += "FIZZ";
  }
  if (i % 5 == 0) {
    output += "BUZZ";
  }
  console.log(`${i}${output}`);
}

// Exercise 4 Section

let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

for (let i = 1; i <= n && !value; i++) {
    value = (i == numberToFind);
}

if (value) {
    console.log(`Found${numberToFind}!`);
} else {
    console.log(`Did not find${numberToFind} within 1-${n}..`);
}

// Exercise 5 Section

let fizz = Math.round(Math.random() * (10 - 1) + 1);
let buzz = Math.round(Math.random() * (10 - 1) + 1);
let end = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);

console.log(start, end);

for (let i = start; i <= end; i++) {
    let output = "";

    if (i % fizz == 0) {
        output += "FIZZ";
    }
    
    if (i % buzz == 0) {
        output += "BUZZ";
    }
    console.log(`${i} ${output}`);
}