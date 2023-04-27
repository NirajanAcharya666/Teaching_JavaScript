/*

Go to your test site and create a new folder named scripts.
 Within the scripts folder, create a new text document called main.js, 
 and save it.
In your index.html file, enter this code on a new line,
 just before the closing </body> tag:
<script src="scripts/main.js"></script>
Copy to Clipboard
This is doing the same job as the <link> element for CSS.
 It applies the JavaScript to the page, 
 so it can have an effect on the HTML 
 (along with the CSS, and anything else on the page).
Add this code to the main.js file:
const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";
Copy to Clipboard
Make sure the HTML and JavaScript files are saved. 
Then load index.html in your browser. You should see something like this:

*/

//data types 
let a = 5 //number 

let b='cooper' //string

//Boolean: true or false 

let cars=['toyota', 'machine'] //array 
console.log(cars[0]) // we can extract out data from the postiion 

let fruits = { name:'mango', price:175, type:'kolkata breed'}
console.log(fruits.name) // we can get name through object

//lets say 
 let x = '5'
 typeof x
 let y = 5
typeof y 
