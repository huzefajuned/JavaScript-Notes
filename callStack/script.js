// function fA() {
//     throw new Error("some error")
// }

// function fB() {
//     fA()
// }

// function fC() {
//     fB()
// }

// fC()


function callMyself() {
    callMyself();
}

callMyself();