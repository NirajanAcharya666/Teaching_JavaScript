//string method or string function 
//length of string 

// const browserType = 'mozilla is a good boy';
// console.log(browserType.length);


/*
finding the index of substring

let str = 'I am college getafe topper'
var a= str.indexOf('ge') // finding first index of string 
var b= str.lastIndexOf('ge') // finding last index of string 
console.log(a)
console.log(b) */

//slice the string
// it takes (start, end position)

// let x = 'This is the best'
// console.log(x.slice(1,5)) -- space counted // this has sliced from 1,5

//substr - it starts with one index and take required nummber as it needed
var y = 'Tea or Cofee you want to drink'
console.log(y.substr(2,7))

//if you want to replace the sub-string then 
//suppose if we want to replace tea with milk 

// let replace = y.replace('Tea','milk')
// console.log(replace)

//concatenate the string in javascript

const str1 = 'Hello';
const str2 = str1.concat(' ', 'this is my room')

// 'Hello'. Strings are immutable, so `concat()` does not modify `str1`
console.log(str1);
// 'Hello World'
console.log(str2);


