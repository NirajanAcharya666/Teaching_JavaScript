//Basic math in JavaScript — numbers and operators

/* 
let : to define variable 
const: to define const
*/

const myInt = 5;
const myFloat = 6.6655555877;
myFloat.toFixed(2) // to fixed the digit up to 2 after decimal
myInt;
myFloat;

// difference between a++ and ++a
/*
a=3
a++  3, 4, 5........ but ++a {4,5,6.......}  

let myNumber = "74";
myNumber += 3; myNumber = myNumber +3


Operator	Name	Purpose	Example
+	Addition	Adds two numbers together.	6 + 9
-	Subtraction	Subtracts the right number from the left.	20 - 15
*	Multiplication	Multiplies two numbers together.	3 * 7
/	Division	Divides the left number by the right.	10 / 5
%	Remainder (sometimes called modulo)	
Returns the remainder left over 
after you've divided the left number into a 
number of integer portions equal to the right number.

8 % 3 (returns 2, as three goes into 8 twice, leaving 2 left over).

**	Exponent	Raises a base number to the exponent power, that is, the base number multiplied by itself, exponent times.	
5 ** 2 (returns 25, which is the same as 5 * 5).
*/


//precendence  :  Parenthesi ,Exponential, division / multiply, 
//addition/substraction

//math- BoDMAS

num2 + num1 / 8 + 2; // priority div, addition

(num2 + num1) / (8 + 2); 




