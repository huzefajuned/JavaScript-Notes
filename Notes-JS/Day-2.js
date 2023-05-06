// JavaScript Array Methods and Properties..

// Name                                	Description
// ***********************************
// concat()	      done              Joins arrays and returns an array with the joined arrays
// constructor              	Returns the function that created the Array object's prototype
// copyWithin()               	Copies array elements within the array, to and from specified positions
// entries()    done             	Returns a key/value pair Array Iteration Object
// every()                  	Checks if every element in an array pass a test
// fill()                     	Fill the elements in an array with a static value
// filter()                 	Creates a new array with every element in an array that pass a test
// find()                     	Returns the value of the first element in an array that pass a test
// findIndex()              	Returns the index of the first element in an array that pass a test
// forEach()     done            	Calls a function for each array element
// from()                   	Creates an array from an object
// includes()                	Check if an array contains the specified element
// indexOf()	                Search the array for an element and returns its position
// isArray()	                Checks whether an object is an array
// join()	                    Joins all elements of an array into a string
// keys()                   	Returns a Array Iteration Object, containing the keys of the original array
// lastIndexOf()            	Search the array for an element, starting at the end, and returns its position
// length	                    Sets or returns the number of elements in an array
// map()	  done                    Creates a new array with the result of calling a function for each array element
// pop()        done             	Removes the last element of an array, and returns that element
// prototype	                Allows you to add properties and methods to an Array object
// push()	    done                 Adds new elements to the end of an array, and returns the new length
// reduce()         done         	Reduce the values of an array to a single value (going left-to-right)
// reduceRight()	            Reduce the values of an array to a single value (going right-to-left)
// reverse() done	                Reverses the order of the elements in an array
// shift()	  done                   Removes the first element of an array, and returns that element
// slice()   done                 	Selects a part of an array, and returns the new array
// some()                   	Checks if any of the elements in an array pass a test
// sort()                   	Sorts the elements of an array
// splice()  done                	Adds/Removes elements from an array
// toString()                	Converts an array to a string, and returns the result
// unshift()	done                Adds new elements to the beginning of an array, and returns the new length
// valueOf()	                Returns the primitive value of an array

// *concat method in array
// const a= [1,2,3];
// const b=[5,6,7]
// const c=[10,12,155]
// console.log(a.concat(b,c))

// The entries() method
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const f = fruits.entries();

// for (let x of f) {
//   document.getElementById("show").innerHTML += x + "<br>";
// }

// JavaScript Array every()
// Definition and Usage*******
// The every() method executes a function for each array element.
// The every() method returns true if the function returns true for all elements.
// The every() method returns false if the function returns false for one element.
// The every() method does not execute the function for empty elements.
// The every() method does not change the original array
// const ages = [32, 33, 16, 40];
// ages.every(checkAge)
// function checkAge(age) {
//   return age > 18;
// } // returns false

// JavaScript Array slice() mathod.
// The slice() method returns selected elements in an array, as a new array.
// The slice() method selects from a given start, up to a (not inclusive) given end.
// The slice() method does not change the original array
// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(1, 3);
// document.getElementById("show").innerHTML = citrus; //returns Orange,Lemon

// JavaScript Array splice()
// The splice() method adds and/or removes array elements.
// The splice() method overwrites the original array.
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// At position 2, add 2 elements:
// fruits.splice(2, 0, "Lemon", "Kiwi");
// document.getElementById("show").innerHTML = fruits; //returns ->> Banana,Orange,Lemon,Kiwi,Apple,Mango

// JavaScript Array reverse()
// The reverse() method reverses the order of the elements in an array.
// The reverse() method overwrites the original array.
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// document.getElementById("show").innerHTML = fruits.reverse(); // returns Mango,Apple,Orange,Banana

// JavaScript Array toString()
// The toString() method returns a string with array values separated by commas.
// The toString() method does not change the original array.
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let text = fruits.toString();
// document.getElementById("show").innerHTML = text;
// console.log(text);
