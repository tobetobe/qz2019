var readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});
let cur = 0,
  arr = [];
rl.on("line", function(line) {
  if (cur === 0) {
    const n = line.trim();
    for (let i = 0; i < n; i++) {
      arr.push([]);
    }
    cur++;
  } else {
    const src = line.trim();
    let srcArr = src.split(" ");
    srcArr.map((item, index) => {
      let itemArr = item.split("");
      for (let i = 0; i < itemArr.length; i++) {
        arr[index][i * 2] = itemArr[i];
      }
      for (let i = 1; i < arr[index].length; i += 2) {
        arr[index][i] = arr[index][arr[index].length - i];
      }
      arr[index].splice(itemArr.length);
      arr[index] = arr[index].join("");
    });
    console.log(`${arr.join(" ")}`);
  }
});
// 3
// Wloemce to btdnecaey
