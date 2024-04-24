//1

// function reverseArr(str) {
//     let newArr = [];
//     for (let s of str) {
//         newArr.push(s)
//     }
//     return newArr.reverse()
// }

// console.log(reverseArr("34567"));


//2

// function replacing(str) {
//     return str.replaceAll("!", "")
// }

// console.log(replacing("Man! Jaloliddin! Man!"));

//3

// function filterNUm(arr1,arr2) {
//     let mainArr = []
//     let arr3 = arr1.concat(arr2);
//     let sum = 0
//     for (let i = 0; i < arr3.length; i++) {
//         let element = arr3[i];
//         if (typeof element === "number") {
//             sum = sum + element
//             mainArr.push(sum)
//         }
//     }
//     return mainArr[mainArr.length - 1]
// }

// console.log(filterNUm([2,6,"34","wer",1,"2"],[3,4,1,"6","fg"]));


//4

// const reverse = (array) => array.reverse();

// console.log(reverse([4, 3, 6, 3, "23", "wer"]));


//5

// function arrayValuesTypes(arr) {
//     let newArr = [];
//     for (const i of arr) {
//         newArr.push(typeof i)
//     }
//     return newArr
// }
// console.log(  arrayValuesTypes([1, 2, "null", []]));

//6

// function toNumberArray(arr) {
//     let newArr = []
//     for (let i = 0; i < arr.length; i++) {
//         const element = +arr[i];
//         newArr.push(element)
//     }
//     return newArr
// }

// console.log(toNumberArray(["3.5","34","12.5"]));

//7

// function length(str) {
//     let ind = 0;
//     for (const key in str) {
//         ind =  key
//     }
//     return ++ind 
// }

// console.log(  length("wash your hands!"));

//8

// function   getMultipliedArr(arr) {
//     let newArr = []
//     for (const i of arr) {
//         newArr.push(i*2)
//     }
//     return newArr
// }

// console.log(  getMultipliedArr([1, 86, -5]));


//9

// function wordLengths(arr) {
//     let newStr = arr.join(" ");
//     newStr = newStr.split(" ");
//     let newLen = []
//     for (let i = 0; i < newStr.length; i++) {
//         const element = arr[i];
//         newLen.push(element.length)
//     }
//     return newLen
// }

// console.log(wordLengths(["Halloween", "Thanksgiving", "Christmas"]));


//10

// function arrayToString(arr) {
//     let newStr = arr.join("")

//     return newStr
// }

// console.log(arrayToString([1, 2, 3, "a", "s", "dAAAA"]));