// 1.Print odd numbers in an array

// using anonymous function

let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let oddNumbers = function (number) {
  for (let i = 0; i < number.length; i++) {
    if (number[i] % 2 !== 0) {
      console.log(number[i]);
    }
  }
};
oddNumbers(number);

//o/p:
//  1
//  3
//  5
//  7
//  9

// using IIFE function

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
(function () {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
      console.log(numbers[i]);
    }
  }
})(numbers);

//o/p:
//  1
//  3
//  5
//  7
//  9

// 2.Convert all the string to title caps in a string array

//Anonymous function
let str = ["hi", "how", "are", "you"];
let caps = function (str) {
  for (let i = 0; i < str.length; i++) {
    console.log(str[i].charAt(0).toUpperCase() + str[i].slice(1));
  }
};

caps(str);

//output:

//  Hi
//  How
//  Are
//  You

// IIFE function
(function () {
  for (let i = 0; i < str.length; i++) {
    console.log(str[i].charAt(0).toUpperCase() + str[i].slice(1));
  }
})(str);

//output:

//  Hi
//  How
//  Are
//  You

//3.sum of all numbers in an array

// using Anonymous function

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sum = function (arr) {
  let total = 0;
  arr.forEach(function (num) {
    total += num;
  });
  return total;
};
console.log(sum(numbers));

// output will be (1+2+3+4+5+6+7+8+9+10);

// o/p
// 55

//using IIFE function
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

(function (arr) {
  let total = 0;
  arr.forEach(function (num) {
    total += num;
  });
  console.log(total);
})(numbers);

// Output will be 15 (1 + 2 + 3 + 4 + 5+6+7+8+9+10)

//4.Return all prime numbers in an array

// using Anonymous function

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let primeNumbers = function (numbers) {
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
//o/p: primeNumbers

// 2
// 3
// 5
// 7

// using IIFE function

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

(function (numbers) {
  for (let num of numbers) {
    let count = 0;
    for (let j = 1; j <= num; j++) {
      if (num % j === 0) {
        count++;
      }
    }
    if (count === 2) {
      console.log(num);
    }
  }
})(numbers);

//o/p: primeNumbers

// 2
// 3
// 5
// 7

// 5. Return all the palindrome in an array

// Using Anonymous function

let arr = ["level", "hello", "world", "radar", "civic"];

let palindrome = function (arr) {
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

// using IIFE function

let arr = ["level", "hello", "world", "radar", "civic"];
(function (arr) {
  let result = [];

  for (const element of arr) {
    let word = element.toLocaleLowerCase();
    if (word === word.split("").reverse().join("")) {
      result.push(element);
    }
  }
  console.log(result);
})(arr);

//o/p:
// ['level', 'radar', 'civic']

// 6.Return median of two sorted arrays of the same size

// using Anonymous function

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];

let median = function (arr1, arr2) {
  let arr3 = arr1.concat(arr2);
  arr3.sort(function (a, b) {
    return a - b;
  });
  if (arr3.length % 2 !== 0) {
    return arr3[Math.floor(arr3.length / 2)];
  } else {
    console.log((arr3[arr3.length / 2] + arr3[arr3.length / 2 - 1]) / 2);
  }
};

median(arr1, arr2);

// o/p:

//5.5

//using IIFE function

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];

(function (arr1, arr2) {
  let arr3 = arr1.concat(arr2);
  arr3.sort(function (a, b) {
    return a - b;
  });
  if (arr3.length % 2 !== 0) {
    return arr3[Math.floor(arr3.length / 2)];
  } else {
    console.log((arr3[arr3.length / 2] + arr3[arr3.length / 2 - 1]) / 2);
  }
})(arr1, arr2);

// o/p:
//5.5

//7.Remove duplicates from an array

//using Anonymous function

let arr = [1, 2, 3, 4, 1, 2, 3, 4, 6, 7, 7];

let dublicate = function (arr) {
  return arr.filter(function (element, index) {
    return arr.indexOf(element) === index;
  });
};

console.log(dublicate(arr));

// o/p:
// [1, 2, 3, 4, 6, 7]

// using IIFE function

let arr = [1, 2, 3, 4, 1, 2, 3, 4, 6, 7, 7];

(function (arr) {
  return arr.filter(function (element, index) {
    return arr.indexOf(element) === index;
  });
})(arr);

// o/p:
// [1, 2, 3, 4, 6, 7]

// 8.Rotate an array by k times

// using Anonymous function

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let k = 3;

var rotate = function (arr, k) {
  for (var i = 0; i < k; i++) {
    // Removing the last element and insert it at the beginning

    arr.unshift(arr.pop());
  }
  return arr;
};

console.log(rotate(arr, k));

// o/p:
// (10) [8, 9, 10, 1, 2, 3, 4, 5, 6, 7]

// using IIFE function

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let k = 6;

(function (arr, k) {
  for (var i = 0; i < k; i++) {
    arr.unshift(arr.pop());
  }
  return arr;
})(arr, k);

// o/p:
//(10) [5, 6, 7, 8, 9, 10, 1, 2, 3, 4]
