// Solution

// Arrays
// easy
/**
 * Reverse an array
 *
 * @param {array} array the array to be reversed
 * @returns {array} a new reversed copy of the array
 */
const reverse = (array) => {
  const reversed = [];

  for (let index = array.length - 1; index >= 0; index--) {
    reversed.push(array[index]);
  }

  return reversed;
};

const fill = (array, value, start = 0, end = array.length) => {
  // TODO
};

// medium
/**
 * Converts all elements in array into a string separated by separator.
 * @param {array} array  
 * @param {*} separator 
 * @returns 
 */
const join = (array, separator = ',') => {
  // TODO
  let resultString = "";

  for (let i = 0; i < array.length; i++) {
    resultString += `${array[i]}${separator}`
  }

  return resultString;

};

const indexOf = (array, element) => {
  // TODO
};

// hard
const filter = (array, predicate) => {
  // TODO
};

const zip = (...arrays) => {
  // TODO
};

// Expressions

// easy
const isMinLength = (str, minLength) => null; // TODO

const isMaxLength = (str, maxLength) => null; // TODO

// medium
const isIn = (value, possibleValues) => null; // TODO

const isArrayOfType = (arr, type) => null; // TODO

// hard
const areValidNumbers = (stringNumbers) => null; // TODO

const sumNumbersFromString = (string) => null; // TODO

// Math

// easy
const min = (array) => {
  // TODO
};

const sum = (array) => {
  // TODO
};

// medium
const average = (array) => {
  // TODO
};

const pow = (number, power) => {
  // TODO
};

// hard
const isPrime = (number) => {
  // TODO
};

const swapWholeAndRemainder = (number) => {
  // TODO
};

// Strings

// easy
const slice = (string, start = 0, end = string.length) => {
  // TODO
};

const repeat = (string, n) => {
  // TODO
};

// medium
const capitalize = (string) => {
  // TODO
};

const replace = (string, char, replacement) => {
  // TODO
};

// hard
const split = (string, separator) => {
  // TODO
};

const trim = (string) => {
  // TODO
};

// Objects - this is an advanced topic, so check the materials for next week

// easy
const existInObject = (obj, prop) => {
  // TODO
};

const removeProp = (obj, prop) => {
  // TODO
};


// medium
const copy = (obj) => {
  // TODO
};

const typeOfProps = (obj) => {
  // TODO
};

// hard
const flat = (obj) => {
  // TODO
};

const entries = (obj) => {
  // TODO
};


// Tests for the solution

// Arrays
const reverseTest = () => {
  const array = [1, 2, 3];
  const reversed = reverse(array);

  console.log(reversed);
  // => [3, 2, 1]

  console.log(array);
  // => [1, 2, 3]
};

const fillTest = () => {
  const array = [1, 2, 3];

  const filled = fill(array, 'a');
  const filledNewArr = fill(Array(3), 2);
  const filledInRange = fill([4, 6, 8, 10], '*', 1, 3);

  console.log(filled);
  // => ['a', 'a', 'a']

  console.log(filledNewArr);
  // => [2, 2, 2]

  console.log(filledInRange);
  // => [4, '*', '*', 10]

  console.log(array);
  // => [1, 2, 3]
  // array is not changed!
};

const joinTest = () => {
  // TODO

  const array = [1, 2, 3];
  const separator = "$";

  const joined = join(array, separator);

  console.log(joined);

};

const indexOfTest = () => {
  // TODO
};

const filterTest = () => {
  // TODO
};

const zipTest = () => {
  // TODO
};

const arraysTest = () => {
  const separators = ['-', '_', '~'];
  const array = [1, 2, 3, 4, 5, 6];

  const filled = fill(array, 0, 2, 4); // [1, 2, 0, 0, 5, 6]
  const reversed = reverse(filled); // [6, 5, 0, 0, 2, 1]
  const filtered = filter(reversed, (x) => x % 2 === 0); // [6, 0, 0, 2]
  const index = indexOf(filtered, 6); // 0
  const joined = join(filtered, separators[index]); // 6-0-0-2
  const zipped = zip(array, joined.split('')); // [[1, 6], [2, -], [3, 0], [4, -], [5, 0], [6, -]]

  console.log(zipped);
};

// Math
const minTest = () => {
  // TODO
};

const sumTest = () => {
  // TODO
};

const powTest = () => {
  // TODO
};

const averageTest = () => {
  // TODO
};

const isPrimeTest = () => {
  // TODO
};

const swapWholeAndRemainderTest = () => {
  // TODO
};

const mathTest = () => {
  const array = [2, 3, 4, 5, 6, 7];

  const min = min(array); // 2
  const sum = sum(array); // 27
  const pow = pow(min, sum); // 134217728

  const powArray = pow.toString().split('').map(Number);
  const average = average(powArray).toFixed(2); // 3.89
  const swapped = swapWholeAndRemainder(average); // 89.3
  const isPrime = isPrime(Math.floor(swapped)); // true

  console.log(isPrime);
};


// Strings
const sliceTest = () => {
  // TODO
};

const repeatTest = () => {
  // TODO
};

const capitalizeTest = () => {
  // TODO
};

const replaceTest = () => {
  // TODO
};

const splitTest = () => {
  // TODO
};

const trimTest = () => {
  // TODO
};

const stringsTest = () => {
  const string = repeat('  home', 2); //   home  home
  const trimmed = trim(string); // home  home
  const sliced = slice(trimmed, 1, 8); // ome  ho
  const replaced = replace(sliced, 'o', 'ri'); // rime  hri
  const capitalized = capitalize(replaced); // Rime  hri
  const splitted = split(capitalized, ' '); // ['Rime', '', 'hri']

  console.log(splitted);
};

// Expressions
const isMinLengthTest = () => {
  // TODO
};

const isMaxLengthTest = () => {
  // TODO
};

const isInTest = () => {
  // TODO
};

const isArrayOfTypeTest = () => {
  // TODO
};

const areValidNumbersTest = () => {
  // TODO
};

const sumNumbersFromStringTest = () => {
  // TODO
};

const expressionsTest = () => {
  const string = '1 0 1 1 0 2';

  const isMinLen = isMinLength(string, 3); // true
  const isMaxLen = isMaxLength(string, 11); // true
  const sum = sumNumbersFromString(string); // 5

  const splitted = string.split(' ');
  const areValidNumbers = areValidNumbers(splitted); // true
  const isArrayOfType = isArrayOfType(splitted, 'string'); // true
  const isIn = isIn('2', splitted); // true

  const validations = [
    isMinLen,
    isMaxLen,
    areValidNumbers,
    isArrayOfType,
    isIn,
  ];

  const areAllCorrect =
    validations.every((validation) => validation === true) &&
    validations.length === sum;

  console.log(areAllCorrect);
};

// Objects
const existInObjectTest = () => {
  // TODO
};

const removePropTest = () => {
  // TODO
};

const copyTest = () => {
  // TODO
};

const typeOfPropsTest = () => {
  // TODO
};

const flatTest = () => {
  // TODO
};

const entriesTest = () => {
  // TODO
};

const objectsTest = () => {
  const object = {
    name: 'Pesho',
    age: 20,
    isAlive: true,
    address: { street: 'Al Malinov', number: 34 },
  };

  const flatten = flat(object); // { name: 'Pesho', age: 20, isAlive: true, address.street: 'Al Malinov', address.number: 34 }
  const removedPropCopy = removeProp(flatten, 'address.number'); // { name: 'Pesho', age: 20, isAlive: true, address.street: 'Al Malinov' }
  const exactCopy = copy(removedPropCopy); // { name: 'Pesho', age: 20, isAlive: true, address.street: 'Al Malinov' }
  const propTypes = typeOfProps(exactCopy); // ['string', 'number', 'boolean', 'string']
  const entries = entries(propTypes); // [[0, 'string'], [1, 'number], [2, 'boolean'], [3, 'string']]
  const existInObject = existInObject(entries, '3'); // true

  console.log(existInObject);
};

// Call the tests here

// Arrays

// reverseTest();
// fillTest();
joinTest();
// indexOfTest();
// filterTest();
// zipTest();
// arraysTest();

// Math

// minTest();
// sumTest();
// averageTest();
// powTest();
// isPrimeTest();
// swapWholeAndRemainderTest();
// mathTest();

// Objects

// existInObjectTest();
// removePropTest();
// copyTest();
// typeOfPropsTest();
// flatTest();
// entriesTest();
// objectsTest();

// Strings

// sliceTest();
// repeatTest();
// capitalizeTest();
// replaceTest();
// splitTest();
// trimTest();
// stringsTest();

// Expressions

// isMinLengthTest();
// isMaxLengthTest();
// isInTest();
// isArrayOfTypeTest();
// areValidNumbersTest();
// sumNumbersFromStringTest();
// expressionsTest();
