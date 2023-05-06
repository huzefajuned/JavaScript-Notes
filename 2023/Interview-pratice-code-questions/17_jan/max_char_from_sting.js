//fing maximum string from the given sentence..

// const quote= "Keep smiling, because life is a beautiful thing and there's so much to smile about"

// const quote_arr= quote.split("").sort();
// console.log(quote_arr);

{/* <script> */}
// Javascript program to output the maximum occurring character
// in a string
	let ASCII_SIZE = 256;
	function getMaxOccurringChar(str)
	{
	
		// Create array to keep the count of individual
		// characters and initialize the array as 0
		let count = new Array(ASCII_SIZE);
		for (let i = 0; i < ASCII_SIZE; i++)
		{
			count[i] = 0;
		}
		
		// Construct character count array from the input
		// string.
		let len = str.length;
		for (let i = 0; i < len; i++)
		{
			count[str[i].charCodeAt(0)] += 1;
		}
		let max = -1; // Initialize max count
		let result = ' '; // Initialize result
		
		// Traversing through the string and maintaining
		// the count of each character
		for (let i = 0; i < len; i++)
		{
			if (max < count[str[i].charCodeAt(0)])
			{
				max = count[str[i].charCodeAt(0)];
				result = str[i];
			}
		}
		return result;
	}
	
	// Driver Method
	let str = "sample string";
    console.log(getMaxOccurringChar(str))
	// document.write("Max occurring character is " , getMaxOccurringChar(str));
	
	// This code is contributed by avanitrachhadiya2155
// </script>
