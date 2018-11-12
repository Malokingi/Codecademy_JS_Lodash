//Here we go! This is Matthew Garvey's lodash Capstone!
  //Now with Argument Error Checking!
const _ = {
  //number methods!
  clamp(num, min, max){ //clamp takes a num, min and max and rets min if num < min, max if num > max or num if min < num < max
    //Error Checking
    if((typeof num !== 'number') || (typeof min !== 'number') || (typeof max !== 'number')){
      console.log(`_.clamp ERROR! Please make sure all three args passed to me are Numbers. What I got was num => ${typeof num}, min => ${typeof min} and max => ${typeof max}.`);
      return undefined;
    }

    if(num < min) return min;
    else if (num > max) return max;
    else return num;
  },
  inRange(num, start, end){//inRange takes num, start, and end and rets true if start < num < end, else false
    //Special Cases
    if(end === undefined){//If only two args are passed, end = start and start = 0
      end = start;
      start = 0;
    }
    if(end < start){//If end < start, they'll swap
      let temp = end;
      end = start;
      start = temp;
    }

    //Error Checking
    if((typeof num !== 'number') || (typeof start !== 'number') || (typeof end !== 'number')){
      console.log(`_.inRange ERROR! Please make sure all three args passed to me are Numbers. What I got was num => ${typeof num}, start => ${typeof start} and end => ${typeof end}.`);
      return undefined;
    }

    return ((num > start) && (num < end));
  },
  //string methods!
  words(str = ''){//words takes str and rets an array whose elements are each word in str
    let arr = [];
    //Error Checking
    if(typeof str !== 'string'){
      console.log(`_.words ERROR! Please make sure you pass me one String. What I got was str => ${typeof str}.`);
      return undefined;
    }

    while(str.includes(' ')){//chopping off the leading word until there're no more spaces
      let wordLength = str.indexOf(' ');
      //console.log(wordLength);
      arr.push(str.substring(0, wordLength));
      str = str.substring(wordLength + 1, str.length);
    }
    arr.push(str);
    return arr;
  },
  pad(str = '', len = 0){//pad takes str and len and rets a string of length len with str in the middle and an even number of spaces on either side (if there's an odd number of spaces, the odd space is added to the end)
    //Error Checking
    if(typeof str !== 'string' || typeof len !== 'number'){
      console.log(`_.pad ERROR! Please make sure you pass me one String, then one Number. What I got was str => ${typeof str} and len => ${typeof len}.`);
      return undefined;
    }

    let padding = len - str.length; //how many extra spaces we need
    if(padding < 1){//if str.length is already meeting or exceeding padding request, just ret str
      return str;
    }
    return ' '.repeat(Math.floor(padding / 2)) + str + ' '.repeat(padding - Math.floor(padding / 2));
  },
  //object methods!
  has(obj, key){//has takes an obj and key and, if the obj object contains a key called key, rets true, else false
    //Error Checking
    if(typeof obj !== 'object' || typeof key !== 'string'){
      console.log(`_.has ERROR! Please make sure you pass me one Object, then one String. What I got was obj => ${typeof obj} and key => ${typeof key}.`);
      return undefined;
    }

    if(obj[key] === undefined) return false;
    else return true;
  },
  invert(obj){//invert take one obj and rets an object that has obj's keys swapped with its values
    //Error Checking
    if(typeof obj !== 'object'){
      console.log(`_.invert ERROR! Please make sure you pass me one Object. What I got was obj => ${typeof obj}.`);
      return undefined;
    }
    
    let jbo = {};
    for(let k in obj) jbo[obj[k]] = k;
    return jbo;
  },
  findKey(obj, func){//findKey takes and obj and func and rets the first key for which the func function returns truthy when passed its value, if no such key exists, rets undefined
    //Error Checking
    if(typeof obj !== 'object' || typeof func !== 'function'){
      console.log(`_.findKey ERROR! Please make sure you pass me one Object, then one Function. What I got was obj => ${typeof obj} and func => ${typeof func}.`);
      return undefined;
    }

    for(let k in obj) if(func(obj[k])) return k;
  },
  //array methods!
  drop(arr, num = 1){//drop takes and arr and a num (which is 1 if no num is passed) and rets an array with the first num elements excluded from arr
    //Error Checking
    if(!(Array.isArray(arr)) || typeof num !== 'number'){
      console.log(`_.drop ERROR! Please make sure you pass me one Array, then one Number. What I got was Array.isArray(arr) => ${Array.isArray(arr)} and num => ${typeof num}.`);
      return undefined;
    }

    return arr.slice(num);
  },
  dropWhile(arr, func){//dropWhile takes an arr and a func and rets an array which only contains elements from arr from the first element in arr which when passed to func returns falsey to the end of arr
    //Error Checking
    if(!(Array.isArray(arr)) || typeof func !== 'function'){
      console.log(`_.dropWhile ERROR! Please make sure you pass me one Array, then one Function. What I got was Array.isArray(arr) => ${Array.isArray(arr)} and func => ${typeof func}.`);
      return undefined;
    }

    let e = 0;
    while(func(arr[e], e)) e++;
    return _.drop(arr, e);
  },
  chunk(arr, num = 1){//chunk takes an arr and a num (which defaults to 1 if no num is passed) and rets an array containing arrays of size num, but the origional order of the elements in arr is preserved and if arr.length mod num isn't 0, the last array in the array returned will be smaller
    //Error Checking
    if(!(Array.isArray(arr)) || typeof num !== 'number'){
      console.log(`_.chunk ERROR! Please make sure you pass me one Array, then one Number. What I got was Array.isArray(arr) => ${Array.isArray(arr)} and num => ${typeof num}.`);
      return undefined;
    }

    let chunkedArr = [];
    for(let i = 0; i < arr.length; i += num) chunkedArr.push(arr.slice(i, i + num));
    return chunkedArr;
  },
};
// Do not write or modify code below this line.
module.exports = _;
