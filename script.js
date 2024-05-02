// Exercise 1

/*
Complete the function in your editor.
Your function must merge strings a and b, and then return a single merged string. A merge operation on two strings is described as follows:
• Append altomating charactors from a and b, respectivaly, to some now string, margodString
• Once all of the characters in one of the strings have been merged, append the remaining characters in the other string to mergedString.
mergeStrings("abc","det"), "adbect"
 */

// const mergeStrings = (stringA, stringB) => {
//   let value = "";
//   const biggestStr = Math.max(stringA.length, stringB.length);

//   for (let i = 0; i < biggestStr; i++) {
//     if (i < stringA.length) {
//       value += stringA[i];
//     }
//     if (i < stringB.length) {
//       value += stringB[i];
//     }
//   }
//   return value;
// };

// console.log(mergeStrings("ace", "bdf")); //return value = abcdef

// Ecercise 2

/*
Run-length encoding (RLE) is a vory simplo form of data compression in which runs of data (that is, sequences in which the same data value ocours in many consecutive data elements) are stored as a single data value and count, rather than as the original run.

console.log(runLengthEncoding("abbcccdddd")); //[ [ 1, 'a' ], [ 2, 'b' ], [ 3, 'c' ], [ 4, 'd' ] ]

*/

// const runLengthEncoding = (str) => {
//   let charCount = 1;
//   const values = [];

//   for (let i = 1; i <= str.length; i++) {
//     if (str[i] !== str[i - 1]) {
//       values.push([charCount, str[i - 1]]);
//       charCount = 1;
//     } else {
//       charCount++;
//     }
//   }
//   return values;
// };

// console.log(runLengthEncoding("abbcccdddd")); //[ [ 1, 'a' ], [ 2, 'b' ], [ 3, 'c' ], [ 4, 'd' ] ]

// Exercise 3

/**
 * Number is a palindrome if it is equal to the number with digits in reversed order. For example, 5, 44, 171, 4884 are palindromes and 43, 194, 4773 are not palindromes.
Write a method palindrome_chain_length which takes a positive number and returns the number of special steps needed to obtain a palindrome. The special step is: "reverse the digits, and add to the original number". If the resulting number is not a palindrome, repeat the procedure with the sum until the resulting number is a palindrome.
If the input number is already a palindrome, the number of steps is 0.
Input will always be a positive integer.
For example, start with 87:
87 + 78 = 165; 165 + 561 = 726; 726 + 627 = 1353; 1353 + 3531 = 4884
4884 is a palindrome and we needed 4 steps to obtain it, so palindrome_chain_length(87) == 4
 * 
 * Returns the number of steps necessary to transform n into a palindromic number.
 * For each step, the digits of n are reversed and added to the value of the previous n.
 *
 * @param {number} n - The number to begin adding from.
 * @returns {number} The count of steps needed to reach a palindromic number.
 */

// const palindromeChainLength = (n) => {
//   const reverseNumHandler = (num) => +String(num).split("").reverse().join("");

//   const countPalindromStepHelper = (num, stepCount) => {
//     console.log(stepCount);
//     return num === reverseNumHandler(num)
//       ? stepCount
//       : countPalindromStepHelper(num + reverseNumHandler(num), ++stepCount);
//   };

//   return countPalindromStepHelper(n, 0);
// };

// // console.log(palindromeChainLength(11));
// console.log(palindromeChainLength(87));
// // console.log(palindromeChainLength(24));

// Exercise 4

// "ab ba ab da ak ka po" count words in this string and return the count of the string together determine which word is repeating the most  lets say ab_3

// function findMostRepeatedWords(input) {
//   const words = input.split(" ");
//   const wordCount = words.reduce((acc, word) => {
//     acc[word] = (acc[word] || 0) + 1;
//     return acc;
//   }, {});
//   console.log(wordCount);

//   const maxCount = Math.max(...Object.values(wordCount));

//   const mostRepeatedWords = Object.keys(wordCount).filter(
//     (word) => wordCount[word] === maxCount
//   );
//   const formattedWords = mostRepeatedWords
//     .map((word) => `${word}_${maxCount}`)
//     .join(", ");

//   return formattedWords;
// }

// // Example usage:
// const inputString = "ab ba ba ba ab da ak ka po ab";
// console.log(findMostRepeatedWords(inputString)); // Output: "ab_3"

function insertArrayAtMiddle(original, toInsert) {
  const middleIndex = Math.floor(original.length / 2);
  const originalLength = original.length;
  const insertLength = toInsert.length;

  for (let i = originalLength - 1; i >= middleIndex; i--) {
    original[i + insertLength] = original[i];
  }

  for (let i = 0; i < insertLength; i++) {
    original[middleIndex + i] = toInsert[i];
  }

  return original;
}

const arr = [1, 2, 3, 7, 8, 9];
const insertingElements = [4, 5, 6];
console.log(insertArrayAtMiddle(arr, insertingElements));

function insertArrayInMiddle(original, toInsert) {
  const middleIndex = Math.floor(original.length / 2);
  const insertLength = toInsert.length;

  // Extend the original array to accommodate new elements
  original.length += insertLength;

  // Start from the end of the original array and work backwards
  for (let i = original.length - 1; i >= middleIndex; i--) {
    if (i < middleIndex + insertLength) {
      // Insert the elements of 'toInsert' array
      original[i] = toInsert[i - middleIndex];
    } else {
      // Shift the original elements to make space for new elements
      original[i] = original[i - insertLength];
    }
  }

  return original;
}

// Example usage:
// const arr = [1, 2, 6, 7, 8, 9, 10];
// const insertingElements = [3, 4, 5];
// console.log(insertArrayInMiddle(arr, insertingElements));
