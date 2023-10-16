//1. ------------------

function oddSort (arr) {
  let j = 0;
  const odds = arr.reduce((acc, el) => el % 2 !== 0 ? [...acc, el] : acc, []). sort((a, b) => a - b);
  return arr.map(el => el % 2 === 0 ? el : odds[j++]);
}

//2. ------------------

function findUniqueNums (arr) {
  return arr.reduce((acc, el) => arr.filter(k => el===k).length > 1 ? acc : [...acc, el], []);
}

//3. ------------------

function strToObj(s) {
/*  const createObj = (ob, prop) => ({[prop] : ob}); */
  return s.split('.').reverse().reduce((acc, el) => ({[el] : acc}), {})
}

//4. ------------------

const nums = [1,9,4,2,3,6,7,1,5]; // [1,1,4,2,3,6,5,7,9]
const testArr = [1,2,3,4,1,2]; // [3,4]
const str = 'one.two.three.four.five';
/*{
    one: {
        two: {
            three: {
                ...
            }
        }
    }
}*/

const aaa = [1,2,3,4,5];
aaa[aaa.length]=0;


const object = {
    foo: 1
};

//5. ------------------

function addLevelsToObj(o, n) {
  if (typeof(o) === "object") {
    o['level'] = n;    
    Object.keys(o).map(el => {
      if (typeof(o[el]) === "object") {
        addLevelsToObj(o[el], n+1);
      }
    });
  }
  return o;
}

const object5 = {
    a: {
        d: {
            h: 4
        },
        e: 2
    },
    b: 1,
    c: {
        f: {
            g: 3,
            k: {}
        }
    }
}

// Должно получиться так:
/*
{
    a: {
        level: 1
        d: {
            level: 2,
            h: 4
        },
        e: 2
    },
    b: 1,
    c: {
        level: 1
        f: {
            level: 2
            g: 3,
            k: {
                level: 3
            }
        }
    }
}
*/

//7. ------------------

const object6 = {};
object6.constructor.prototype.property = 1;
object6.constructor.prototype = null;

//8. ------------------

let i = 10, arr = [];
while (i--) {
    arr.push(() => i + i);  
}

//9. ------------------

function isPalindrom (str) {
  let isPalindrom = true;
  for(let i=0; i<Math.floor(str.length/2); i++) {
    if(str[i]!==str[str.length-i-1]) {
      isPalindrom = false;
      break;
    }
  }
  return isPalindrom;
}

//10. ------------------

function fizzBuzz (num) {
    for(let i = 1; i <= num; i++) {
      if((i%3===0) && (i%5===0)) {
        console.log('fizzbuzz');
      } else if (i%3===0) {
        console.log('fizz');
      } else if (i%5===0) {
        console.log('buzz');
      } else {
        console.log(i);
      }
    }
}

//11. ------------------

function isAnagram (str1, str2) {
  console.log([...str1.toLowerCase()].sort().join('') === [...str2.toLowerCase()].sort().join(''));
}

//12. ------------------

function sum(num) {
  let currentVal = num;
  
  function f(x) {
    if(x!==null)  {
      currentVal += x;
      return f;
    }
    else {
      return currentVal;
    }
  }

  return f;
}


console.log(oddSort(nums))
console.log(findUniqueNums(testArr))
console.log(strToObj(str))
console.log(aaa);
console.log([
    'foo' in object,                  // ?
    'toString' in object,             // ?
    object.hasOwnProperty('foo'),     // ?
    object.hasOwnProperty('toString') // ?
]);

console.log('toString' in Object.create(null));
console.log(addLevelsToObj(object5, 1));
console.log(object6.property); // ?
console.log([arr[0](), arr[0]()]); // ?

console.log(isPalindrom('казак')); // true
console.log(isPalindrom('строка')); // false
console.log(isPalindrom('шалаш')); // true

fizzBuzz(15);

isAnagram('finder', 'Friend'); // true
isAnagram('hello', 'bye'); // false

console.log(sum(1)(2)(3)(4)); // 10