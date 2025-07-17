<img src="https://webassets.telerikacademy.com/images/default-source/logos/telerik-academy.svg" alt="logo" width="300px" style="margin-top: 20px;"/>

# JS Core Hackathon 1

## Teamwork expectations

Each member of the team must **implement**, **document** and **test** at least 4 functions from 4 different topics and be able to explain and fully understand how the entire project works and why it was implemented that way.

## Description

- Write the solutions to all functions (more on each function below)

- Document all the functions you write

  - You can see how the `reverse` array function is documented. This is a standard approach known as **JSDoc**. Using the following format above a function, describes each of the params and the return type of the function.

    ```js
    /**
     * Reverse an array (Description of the function)
     *
     * @param {array} array the array to be reversed (Parameter)
     * @return {array} a new reversed copy of the array (Return type)
     */
    ```


- Test all the functions you write

  - The tests are further below in the `index.js` file, each wrapped in a function that is named after the functionality under test

  - If you want to run a test, just uncomment the name of the function at the end of the file

  - You are given 2 test functions implemented - for `reverse` and `fill`. Learn from them and try test for all the cases you can think of (the `fill` function have multiple test cases)

  - You are given 5 big tests that test a whole topic's integrated functionality. When all of the functions of a given topic are ready, they should produce the correct result in the described steps

### Utility Functions

Each of the utility functions below is described using several sections:

- `Description`
  - A short summary of what the function is supposed to do.
  - Read carefully if the function is supposed to **change** the passed parameters!
- `Arguments`
  - The name and type of the function's arguments.
  - Those in [square brackets] are optional and have a default value.
- `Returns`
  - The type of the returned value, if applicable.
  - All of the data should be returned by the function, not logged on the console!
- `Example`
  - Example usage of the function.

The functions are divided in **easy**, **medium** and **hard** categories by the number of **stars** in the description.

### Ground Rules

- You must implement, document and test at least **4 functions** from **4 different topics**
- You are **forbidden** from implementing a function using the same built-in function or a built-in function that can do the same job. (implement **indexOf** using build-in **indexOf** or implement **slice** using **splice**)
- You are **forbidden** from using functions that accept other functions in this task. (map, reduce, find, etc.)
- Your tools for the hackathon are mostly **loops** and **arrays** (for holding the data, not for their build-in methods).
- The rules above do not apply for the **Expressions** tasks. (except the first rule ¯\\_(ツ)_/¯)

##

# Array Functions

## `.reverse(array)`

Reverses array so that the first element becomes the last, the second element becomes the second to last, and so on. This should not change the original array.

#### Arguments

`array (Array)`:` The array to modify.

#### Returns

`(Array)`: Returns array.

#### Example

```js
const array = [1, 2, 3];
const reversed = reverse(array);

console.log(reversed);
// => [3, 2, 1]

console.log(array);
// => [1, 2, 3]
// array is not changed!
```

##

## `.fill(array, value, [start=0], [end=array.length])`

Fills elements of array with value from start up to, but not including, end. This should not change the original array.

#### Arguments

`array (Array)`: The array to fill.

`value`: The value to fill array with.

`[start=0] (number)`: The start position.

`[end=array.length] (number)`: The end position.

#### Returns

`(array)`: Returns filled array.

#### Example

```js
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
```

##

## `.join(array, [separator=','])` \*

Converts all elements in array into a string separated by separator.

#### Arguments

`array (Array)`: The array to convert.

`[separator=','] (string)`: The element separator.

#### Returns

`(string)`: Returns the joined string.

#### Example

```js
const joined = join(['a', 'b', 'c'], '~');

console.log(joined);
// => 'a~b~c'
```

##

## `.indexOf(array, element)` \*

Finds and returns the index of the searched element in the array. If the element does not exist in the array, return -1.

#### Arguments

`array (Array)`: The array to search in.

`element`: The element to search for.

#### Returns

`(number)`: The found index or -1.

#### Example

```js
const indexOf = () => {
  const index = indexOf([7, 5, 9, 2], 2);

  console.log(index);
  // => 3
};
```

##

## `.filter(array, predicate)` \*\*

Iterates over elements of collection, returning an array of all elements the passed function returns truthy for. The predicate is invoked with three arguments: (value, index|key, collection).

#### Arguments

`collection (Array)`: The collection to iterate over.

`predicate (Function)`: The function invoked per iteration, which returns either truthy or falsy.

#### Returns

`(Array)`: Returns array of objects.

#### Example

```js
const users = [
  { user: 'barney', age: 36, active: true },
  { user: 'fred', age: 40, active: false },
];

const filtered = filter(users, (o) => !o.active);

console.log(filtered);
// => [{ 'user': 'fred', 'age': 40, 'active': false }]
```

##

## `.zip(arrays)` \*\*

Creates an array of grouped elements, the first of which contains the first elements of the given arrays, the second of which contains the second elements of the given arrays, and so on. The array of groups is as long as the smallest passed array.

#### Arguments

`arrays (...Array)`: The arrays to process.

#### Returns

`(Array)`: Returns the new array of grouped elements.

#### Example

```js
const zipped = zip(['a', 'b'], [1, 2], [true, false]);

console.log(zipped);
// => [['a', 1, true], ['b', 2, false]]
```

##

##

# Math Functions

## `.min(array)`

Returns the smallest number in the array.

#### Arguments

`array (array)`: The array of numbers.

#### Returns

`(number)`: Returns the smallest number.

#### Example

```js
const minElement = min([1, -2, 3]);

console.log(minElement);
// => -2
```

##

## `.sum(array)`

Returns the sum of all numbers in the array.

#### Arguments

`array (array)`: The array of numbers.

#### Returns

`(number)`: Returns the sum of the numbers.

#### Example

```js
const sum = sum([1, -2, 3]);

console.log(sum);
// => 2
```

##

## `.pow(number, power)` \*

Raises the number to the chosen power.

#### Arguments

`number (number)`: The base number.

`power (number)`: The power by which the number should be raised.

#### Returns

`(number)`: Returns the number raised by the power.

#### Example

```js
const result = pow(2, 3);

console.log(result);
// => 8
```

##

## `.average(array)` \*

Returns the average of all numbers in the array. The average is calculated by dividing the sum of all elements by the length of the array.

#### Arguments

`array (array)`: The array of numbers.

#### Returns

`(number)`: Returns the average.

#### Example

```js
const average = average([1, -2, 3]);

console.log(average);
// => 0.6666666666666666
```

##

## `.isPrime(number)` \*\*

Return `true` if the number is a prime number and `false` if the number is not prime. Prime numbers are all numbers from 2 to infinity that are divisible only by one and themselves. I.e. primes numbers are 2, 3, 5, 7, 11, 13, etc., non-primes are 4, 6, 8, 9, 10, 12, etc.

#### Arguments

`number (number)`: The number to be checked if it's prime.

#### Returns

`(boolean)`: Returns if the numbers is prime or not (`true` or `false`).

#### Example

```js
const prime = isPrime(41);

console.log(prime);
// => true
```

##

## `.swapWholeAndRemainder(number)` \*\*

Swaps the whole part and the reminder part of a given number.

#### Arguments

`number (number)`: The number to swap.

#### Returns

`(number)`: The number with the applied swapping.

#### Example

```js
const number = 2.1;
const swapped = swapWholeAndRemainder(number);

console.log(swapped);
// => 1.2
```

##

##

# Object Functions

## `.existInObject(object, prop)`

Checks if the given prop exist in a given object.

#### Arguments

`object (object)`: The object to search in.

`prop (string)`: The prop to search for.

#### Returns

`(boolean)`: Returns true if the prop exists and false if it doesn't.

#### Example

```js
const result1 = existInObject({ a: 5 }, 'a');
const result2 = existInObject({ a: 5 }, 'b');

console.log(result1);
// true

console.log(result2);
// => false
```

##

## `.removeProp(object, prop)`

Removes a give prop from a given object;

#### Arguments

`object (object)`: The object to delete from.

`prop (string)`: The prop to delete.

#### Returns

`(object)`: An object with the specific prop deleted.

#### Example

```js
const result = removeProp({ a: 5, b: 6 }, 'a');

console.log(result);
// => { b: 6 }
```

##

## `.copy(object)` \*

Create a (shallow) copy of a given object.

#### Arguments

`object (object)`: The object to copy.

#### Returns

`(object)`: The copied object.

#### Example

```js
const initialObject = { a: 5, b: 6 };
const resultObject = copy(initialObject);

console.log(resultObject);
// => { a: 5, b: 6 }

console.log(initialObject === resultObject);
// => false (different references)
```

##

## `.typeOfProps(object)` \*

Gets the types of the properties of a given object.

#### Arguments

`object (object)`: The object to extract the prop types from.

#### Returns

`(array)`: Array of the prop types.

#### Example

```js
const result = typeOfProps({ a: 5, b: 'hello', c: true });

console.log(result);
// => ['number', 'string', 'boolean']
```

##

## `.flat(object)` \*\*

Flat all of the inner objects (just one level deep) inside of a given object, placing their own properties on root level. See the format from the example.

#### Arguments

`object (object)`: The object to be flatten.

#### Returns

`(object)`: The flatten object.

#### Example

```js
const result1 = flat({ a: 5, b: 6 });
const result2 = flat({ a: 5, b: { c: 6, d: 7 } });

console.log(result1);
// => { a: 5, b: 6 }

console.log(result2);
// => { a: 5, 'b.c': 6, 'b.d': 7 }
```

##

## `.entries(object)` \*\*

Extract all of the entries (key-value pairs) from a given object.

#### Arguments

`object (object)`: The object to extract the entries from.

#### Returns

`(array)`: An array of the entries in the format [key, value];

#### Example

```js
const result = entries({ a: 5, b: 6, c: 7 });

console.log(result);
// => [['a', 5], ['b', 6], ['c', 7]]
```

##

##

# String Functions

## `.slice(string, [start=0], [end=string.length])`

Cut a specific section of a given string and return it as a result.

#### Arguments

`string (string)`: The string to cut.

`[start=0] (number)`: The start position.

`[end=string.length] (number)`: The end position.

#### Returns

`(string)`: Returns the sliced array.

#### Example

```js
const result1 = slice('hello');
const result2 = slice('hello', 2);
const result3 = slice('hello', 2, 4);

console.log(result1);
// => hello

console.log(result2);
// => llo

console.log(result3);
// => ll
```

##

## `.repeat(string, [n=1])`

Repeats the given string n times.

#### Arguments

`string (string)`: The string to repeat.

`[n=1] (number)`: The number of times to repeat the string.

#### Returns

`(string)`: Returns the repeated string.

#### Example

```js
const stars = repeat('*', 3);
const abc = repeat('abc', 2);
const nothing = repeat('abc', 0);

console.log(stars);
// => '***'

console.log(abc);
// => 'abcabc'

console.log(nothing);
// => ''
```

##

## `.capitalize(string)` \*

Converts the first character of string to upper case and the remaining to lower case.

#### Arguments

`string (string)`: The string to capitalize.

#### Returns

`(string)`: Returns the capitalized string.

#### Example

```js
const capitalized = capitalize('FRED');

console.log(capitalized);
// => 'Fred'
```

##

## `.replace(string, char, replacement)` \*

Replaces all matches for a single character pattern in a string with replacement string.

#### Arguments

`string (string)`: The string to inspect.

`char (string)`: The char to replace.

`replacement (string)`: The match replacement.

#### Returns

`(string)`: Returns the modified string.

#### Example

```js
const replacement = replace('The cree', 'e', 'is');

console.log(replacement);
// => 'This crisis'
```

##

## `.split(string, separator)` \*\*

Splits string by separator.

#### Arguments

`string (string)`: The string to split.

`separator (string)`: The separator character to split by.

#### Returns

`(Array)`: Returns the string segments.

#### Example

```js
const segments = split('a-b-c', '-');

console.log(segments);
// => ['a', 'b', 'c']
```

##

## `.trim(string)` \*\*

Trims the trailing spaces from the start and the end of a given string.

#### Arguments

`string (string)`: The string to trim.

#### Returns

`(string)`: The trimmed string.

#### Example

```js
const result = trim('   hello   ');

console.log(result);
// => hello (no whitespace)
```

##

##

# Expressions

This part of the hackathon is a bit more special. It is not focused on a specific structure of the language (like the **objects** for example) but the **expressions** as a whole. For this reason in order for them to count as implemented correctly, you need to implement the following tasks **IN JUST ONE LINE OF CODE EXPRESSION** using everything you know (and possibly a bit more from research). The **return** keyword is forbidden - the returns must be implicit!

## `.isMinLength(string, length)`

Checks if the string have the minimal given length.

#### Arguments

`string (string)`: The string to check.

`length (number)`: The min length.

#### Returns

`(boolean)`: Returns true if the validation passes and false if it doesn't.

#### Example

```js
const result1 = isMinLength('asd', 2);
const result2 = isMinLength('asd', 4);

console.log(result1);
// => true

console.log(result2);
// => false
```

##

## `.isMaxLength(string, length)`

Checks if the string have the maximal given length.

#### Arguments

`string (string)`: The string to check.

`length (number)`: The max length.

#### Returns

`(boolean)`: Returns true if the validation passes and false if it doesn't.

#### Example

```js
const result1 = isMaxLength('asd', 2);
const result2 = isMaxLength('asd', 4);

console.log(result1);
// => false

console.log(result2);
// => true
```

##

## `.isIn(value, possibleValues)` \*

Search for a given value inside an array.

#### Arguments

`value`: The value to search for.

`possibleValues (array)`: The array to search into.

#### Returns

`(boolean)`: Returns true if the validation passes and false if it doesn't.

#### Example

```js
const result1 = isIn(2, [1, 3, 5, 7]);
const result2 = isIn(2, [1, 2, 3, 4]);

console.log(result1);
// => false

console.log(result2);
// => true
```

##

## `.isArrayOfType(array, type)` \*

Checks if all of the elements in the array are of given type.

#### Arguments

`array (array)`: The array to check.

`type (string)`: The type the elements against.

#### Returns

`(boolean)`: Returns true if the validation passes and false if it doesn't.

#### Example

```js
const result1 = isArrayOfType([1, 2, 3, 4], 'number');
const result2 = isArrayOfType([1, 2, 'hello', 4], 'number');

console.log(result1);
// => true

console.log(result2);
// => false
```

##

## `.areValidNumbers(array)` \*\*

Checks if an array of strings holds only valid numbers inside.

#### Arguments

`array (array)`: The array of strings.

#### Returns

`(boolean)`: Returns true if the validation passes and false if it doesn't.

#### Example

```js
const result1 = areValidNumbers(['1', '2', '3', '4']);
const result2 = areValidNumbers(['1', '2', 'apple', '4']);

console.log(result1);
// => true

console.log(result2);
// => false
```

##

## `.sumNumbersFromString(string)` \*\*

From a given string of separated numbers by a single space, sum the numbers and return the accumulated sum.

#### Arguments

`string (string)`: The string of numbers separated by a single space.

#### Returns

`(number)`: The accumulated sum from the numbers.

#### Example

```js
const result = sumNumbersFromString('2 4 5 4 10');

console.log(result);
// 25
```

##
