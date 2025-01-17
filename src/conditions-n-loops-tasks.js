/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  let max = a;
  if (b > a && b > c) {
    max = b;
  } else if (c > b && c > a) {
    max = c;
  }
  return max;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  const x1 = queen.x;
  const y1 = queen.y;
  const x2 = king.x;
  const y2 = king.y;
  if (x1 === x2 || y1 === y2) {
    return true;
  }
  if (x1 === y1 && x2 === y2) {
    return true;
  }
  if (Math.abs(x1 - x2) === Math.abs(y1 - y2)) {
    return true;
  }
  return false;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (a < b + c && b < a + c && c < a + b) {
    if (a === b || a === c || b === c) {
      return true;
    }
  }
  return false;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  let number = num;
  let result = '';
  if (num >= 10) {
    while (number >= 10) {
      number -= 10;
      result += 'X';
    }
    number = num % 10;
  }
  if (number <= 5 && number !== 0) {
    if (number === 5) {
      result += 'V';
    }
    if (number === 4) {
      result += 'IV';
    }
    if (number <= 3) {
      let i = number;
      while (i !== 0) {
        i -= 1;
        result += 'I';
      }
    }
  } else if (number === 9 && number !== 0) {
    result += 'IX';
  } else if (number > 5 && number < 9 && number !== 0) {
    result += `V`;
    let i = number - 5;
    while (i !== 0) {
      i -= 1;
      result += 'I';
    }
  }
  return result;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let result = '';
  for (let i = 0; i < numberStr.length; i += 1) {
    let num = '';
    switch (numberStr[i]) {
      case '1':
        num = 'one';
        break;
      case '2':
        num = 'two';
        break;
      case '3':
        num = 'three';
        break;
      case '4':
        num = 'four';
        break;
      case '5':
        num = 'five';
        break;
      case '6':
        num = 'six';
        break;
      case '7':
        num = 'seven';
        break;
      case '8':
        num = 'eight';
        break;
      case '9':
        num = 'nine';
        break;
      case '0':
        num = 'zero';
        break;
      case '.':
      case ',':
        num = 'point';
        break;
      case '-':
        num = 'minus';
        break;
      default:
        num = '';
        break;
    }
    if (i === numberStr.length - 1) {
      result += `${num}`;
    } else {
      result += `${num} `;
    }
  }
  return result;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  let reverse = '';
  for (let i = str.length - 1; i >= 0; i -= 1) {
    reverse += str[i];
  }
  return reverse === str;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) {
      return i;
    }
  }
  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  const str = `${num}`;
  const letter = `${digit}`;
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) {
      return true;
    }
  }
  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  let balance = 1;
  if (!arr.length > 2) {
    return -1;
  }
  while (balance < arr.length - 1) {
    let first = 0;
    let second = 0;
    for (let i = 0; i < balance; i += 1) {
      first += arr[i];
    }
    for (let i = balance + 1; i < arr.length; i += 1) {
      second += arr[i];
    }
    if (first === second) {
      return balance;
    }
    balance += 1;
  }
  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  let index = 1;
  let first = 0;
  let second = 0;
  let plus = true;
  let elem = 2;
  let mas = [];
  for (let i = 0; i < size; i += 1) {
    let inside = [];
    for (let k = 0; k < size; k += 1) {
      inside = [...inside, 't'];
    }
    mas = [...mas, inside];
  }
  function changeIndex() {
    if (plus) {
      if (elem === 2) {
        if (second + 1 === size - 1) {
          elem = 1;
        }
        if (typeof mas[first][second + 1] === 'string') {
          second += 1;
        } else {
          elem = 1;
        }
      } else {
        if (first + 1 === size - 1) {
          elem = 2;
          plus = false;
        }
        if (typeof mas[first + 1][second] === 'string') {
          first += 1;
        } else {
          elem = 2;
          plus = false;
        }
      }
    } else {
      plus = false;
      if (elem === 2) {
        if (second - 1 === 0) {
          elem = 1;
        }
        if (typeof mas[first][second - 1] === 'string') {
          second -= 1;
        } else {
          elem = 1;
        }
      } else {
        if (first - 1 === 0) {
          elem = 2;
          plus = true;
        }
        if (typeof mas[first - 1][second] === 'string') {
          first -= 1;
        } else {
          elem = 2;
          plus = true;
        }
      }
    }
  }
  while (index <= size ** 2) {
    if (mas[first][second] && typeof mas[first][second] === 'string') {
      mas[first][second] = index;
      index += 1;
      changeIndex();
    } else {
      changeIndex();
    }
  }
  return mas;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const link = matrix;
  const mas = JSON.parse(JSON.stringify(matrix));
  for (let i = 0; i < mas.length; i += 1) {
    for (let t = 0; t < mas.length; t += 1) {
      link[i][t] = mas[mas.length - 1 - t][i];
    }
  }
  return matrix;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  const arr2 = arr;
  function doRightMas(arr1) {
    const rightmas = [];
    const leftmas = [];
    let mas = [];
    const sered = arr1[0];

    if (arr1.length <= 1) {
      return arr;
    }

    for (let i = 1; i < arr1.length; i += 1) {
      if (sered <= arr1[i]) {
        rightmas[rightmas.length] = arr1[i];
      } else {
        leftmas[leftmas.length] = arr1[i];
      }
    }
    mas = [...sortByAsc(leftmas), sered, ...sortByAsc(rightmas)];
    return mas;
  }
  const mas = doRightMas(arr2);
  for (let i = 0; i < mas.length; i += 1) {
    arr2[i] = mas[i];
  }
  return arr2;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  const times = iterations;
  let r = 0;
  let mas1 = str;
  for (let i = 1; i <= str.length; i += 1) {
    let mas = '';
    for (let f = 0; f < str.length; f += 2) {
      mas = `${mas}${mas1[f]}`;
    }
    for (let f = 1; f < str.length; f += 2) {
      mas = `${mas}${mas1[f]}`;
    }
    if (str === mas) {
      r = i;
      break;
    }
    mas1 = mas;
  }
  if (times > r) {
    r = times - r * Math.floor(times / r);
  } else {
    r = times;
  }
  mas1 = str;
  for (let i = 0; i < r; i += 1) {
    let mas = '';
    for (let f = 0; f < mas1.length; f += 2) {
      mas = `${mas}${mas1[f]}`;
    }
    for (let f = 1; f < mas1.length; f += 2) {
      mas = `${mas}${mas1[f]}`;
    }
    mas1 = mas;
  }
  return mas1;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  const numinto = `${number}`;
  let numArray = [];
  for (let i = 0; i < numinto.length; i += 1) {
    numArray = [...numArray, parseInt(numinto[i], 10)];
  }
  let i = numArray.length - 1;
  while (i > 0) {
    if (numArray[i] <= numArray[i - 1]) {
      i -= 1;
    } else {
      break;
    }
  }
  if (i === 0) {
    return number;
  }
  let mas = [];
  for (let index = i; index < numArray.length; index += 1) {
    mas = [...mas, numArray[index]];
  }
  const small = numArray[i - 1];
  mas.sort((a, b) => a - b);
  for (let index = 0; index < mas.length; index += 1) {
    if (small < mas[index]) {
      const max = mas[index];
      mas[index] = numArray[i - 1];
      numArray[i - 1] = max;
      mas.sort((a, b) => a - b);
      break;
    }
  }
  let first = [];
  for (let index = 0; index < i; index += 1) {
    first = [...first, numArray[index]];
  }
  const result = [...first, ...mas];
  return parseInt(result.join(''), 10);
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
