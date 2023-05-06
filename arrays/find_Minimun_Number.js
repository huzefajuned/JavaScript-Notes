//From the  given array  find the minimum one.

const numArray = [99999, 1, 4, 3, 0, 9]

// for (let i = 0; i < numArray.length; i++) {
//     console.log("first")
//     for (let j = 0; j < numArray.length; j++) {
//         if (numArray[i] < numArray[j]) {
//             const result = numArray[i]
//             console.log(result)

//         }
//     }

// }

function min(numArray) {
    let m = numArray[0];
    for (let i = 1; i < numArray.length; i++) {
        if (numArray[i] < m) {
            m = numArray[i];
        }
    }
    return m;
}

console.log(min(numArray))