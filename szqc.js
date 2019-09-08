/**
 * 数组去重
 */

let arr = [1, 1, 1, 1, 2, 2, 3, 4, 5, 6];

console.log(arr);

let set = new Set(arr);

console.log(set);

let _arr = Array.from(set);

console.log(_arr);
