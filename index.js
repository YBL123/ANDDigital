/**
 * The following is the function where the solution shall be written
 */

// Please do not change the name of the method or the way the functions is called

// extract ONLY integers from string -> filter any other characters
// only positive integers
// all the combinations that can be made with these integers -> permutation
// return in decending order
// if input does not contain any integers then return error message -> (invalid input, please provide an input that contains integers)

function solution(input) {
  // logic here

  if (hasInt(input)) {
      // regex to extract numbers from a string
  const int = input.replace(/\D/g, '')
  const intArr = int.split('')
  console.log(intArr)

  const permArr = getArrayMutations(intArr)
  // first sort
  permArr.sort(function(a, b) {
    return b[0] - a[0];
  });

  const sortedArr = permArr.map(subArr => parseInt(subArr.join('')))
  // second sort after turning into int
  return sortedArr.sort((a,b) => b - a).join()
  } else {
    console.log('Invalid input, please provide an input that contains an integer')
  }
}

// does it include an int? function
function hasInt(str) {
  return /\d/.test(str);
}

//permutation function
function getArrayMutations(arr, perms = [], len = arr.length) {
  if (len === 1) perms.push(arr.slice(0))

  for (let i = 0; i < len; i++) {
    getArrayMutations(arr, perms, len - 1)

    len % 2 // parity dependent adjacent elements swap
      ? [arr[0], arr[len - 1]] = [arr[len - 1], arr[0]]
      : [arr[i], arr[len - 1]] = [arr[len - 1], arr[i]]
  }

  return perms
}

// some example inputs
console.log(solution('326')); // expected ouput 632,623,362,326,263,236
console.log(solution('A 3B2 C6D')); // expected ouput 632,623,362,326,263,236



