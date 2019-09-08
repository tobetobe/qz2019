var readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

const LIST = [];
const arr =[];

rl.on("line", function(line) {
  let str = line.trim();
  let _str = str.split(" ");
  arr.push(_str[0])
  LIST.push(_str);
  // console.log(_str);
  // console.log(LIST);
});
/**
ZHANG SAN
LI SI
WANG WU
WANG LIU
WANG QI
ZHANG WU
LI WU
 */
/**
 * 姓名排序
时间限制：C/C++语言 3000MS；其他语言 5000MS
内存限制：C/C++语言 131072KB；其他语言 655360KB
题目描述：
马上就要开学了，教务处的老师拿到了新生的名单，现在他需要根据考生的姓名录入一个拼音版的新名单。

老师录入时，需要输入姓和名(例如：ZHANG SAN，字母均为大写，姓名以空格隔开)，并且要将这些人按一定规则排序。

排序的方式如下：

首先，按照该姓的出现次数排序，即：姓出现次数多的人先排序

其次，若两个人的姓出现的次数一样多（或者是同一个姓），按照原名单的顺序。

 */