var readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});


rl.on("line", function(line) {
  let str = line.trim();
  let _str = str.split("");
  console.log(_str);

  let stack = []
  for (let i = 0; i < _str.length; i++) {
    if(_str[i] == '['){
      stack.push('[')
      continue;
    }else{
      
    }
  }
});
