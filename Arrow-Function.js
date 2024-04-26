// 1.Print odd number in an array in arrow function

let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let oddNumber = (number) => {
  for (let num of number) {
    if (num % 2 !== 0) {
      console.log(num);
    }
  }
};

oddNumber(number);

// o/p:

// 1
// 3
// 5
// 7
// 9

//2.Convert all the string to the caps in a string Arrow function

let str = ["hi", "how", "are", "you"];

let caps = (str) => {
  for (let element of str) {
    console.log(element.charAt(0).toUpperCase() + element.slice(1));
  }
};
caps(str);

//o/p:

// Hi
// How
// Are
// You

//3.Sum of all numbers in an array arrow function

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let result = (number) => {
  let sum = 0;
  for (let num of number) {
    sum += num;
    ("");
  }
  console.log(sum);
};
result(numbers);

// O/P:

// [1+2+3+4+5+6+7+8+9+10]=55

//4.Return all the prime numbers in an arry arrow function

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let primeNumbers = (numbers) => {
  for (const element of numbers) {
    let count = 0;
    for (let j = 1; j <= element; j++) {
      if (element % j === 0) {
        count++;
      }
    }
    if (count === 2) {
      console.log(element);
    }
  }
};
primeNumbers(numbers);

// O/P:

//2
//3
//5
//7

// 5.Return all the palindrome in an array

let arr = ["level", "hello", "world", "radar", "civic"];

let palindrome = (arr) => {
  return arr.filter(function (word) {
    // Convert the word to lowercase for case-insensitive comparison
    let lowerCaseWord = word.toLowerCase();

    // Reverse the word and compare it with the original

    return lowerCaseWord === lowerCaseWord.split("").reverse().join("");
  });
};

console.log(palindrome(arr));
//o/p:
// ['level', 'radar', 'civic']
