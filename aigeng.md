# 笔试题
## I.读程序判断输出(JavaScript基础语法)
### 1.下列9条语句输出分别是什么
```js
1:  parseInt("07");    7
2:  parseInt("09");    9
3:  parseInt("010");   10
4:  "1" + 2 + 3;        "123"
5:  3 + 2 + "1";           "51"
6:  "1" == 1;                true
7:  "1" === 1;            false    
8:  "1" == true;                true
9:  "1" === false;        false
```

### 2.请给出控制台输出
```js
var arr1 = "john".split('');            ["j","o","i","n"]
var arr2 = arr1.reverse();                ["n","i","o","j"]
var arr3 = "jones".split('');        ["j","o","n","e","s"]
arr2.push(arr3);      ["n","i","o","j","j","o","n","e","s"]        
console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));
            "array 1: length=4 last=n"            
console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));
            "array 2: length=9 last=s"
```

### 3.请给出computeProduct()函数的执行结果
```js
function sortIntegers(a, b) {
  return a - b;
}

function computeProduct(unsorted) {
  var sorted_array = unsorted.sort(sortIntegers),
    product1 = 1,
    product2 = 1,
    array_n_element = sorted_array.length - 1;

  for (var x = array_n_element; x > array_n_element - 3; x--) {
      product1 = product1 * sorted_array[x]; -70 700 -7000
  }
  product2 = sorted_array[0] * sorted_array[1] * sorted_array[array_n_element];
            //30 29 -70 
  if (product1 > product2) return product1;

  return product2
};

//执行
var unsorted_array = [-10, 7, 29, 30, 5, -10, -70];
computeProduct(unsorted_array); //输出什么？ -7000

    30 29 7 5 -10 -10 -70
    
```

### 4.请给出控制台输出
```js
(function(){
  var a = b = 3;
})();

console.log("a defined? " + (typeof a !== 'undefined')); a defined? false
console.log("b defined? " + (typeof b !== 'undefined')); a defined? false
```

### 5.闭包
```js
var globalVar = "xyz";

(function outerFunc(outerArg) {
  var outerVar = 'a';
  
  (function innerFunc(innerArg) {
    var innerVar = 'b';
    
    console.log(
      "outerArg = " + outerArg + "\n" +
      "innerArg = " + innerArg + "\n" +
      "outerVar = " + outerVar + "\n" +
      "innerVar = " + innerVar + "\n" +
      "globalVar = " + globalVar);
    
  })(456);
})(123);
```
"outerArg = 123
 innerArg = 456
 outervar = "a"
 innerVar = "b"
 globalVar = undefined
 "

### 6.给出输出顺序

```js
console.log('1');

setTimeout(function() {
    console.log('2');
    process.nextTick(function() {
        console.log('3');
    })
    new Promise(function(resolve) {
        console.log('4');
        resolve();
    }).then(function() {
        console.log('5')
    })
})
process.nextTick(function() {
    console.log('6');
})
new Promise(function(resolve) {
    console.log('7');
    resolve();
}).then(function() {
    console.log('8')
})

setTimeout(function() {
    console.log('9');
    process.nextTick(function() {
        console.log('10');
    })
    new Promise(function(resolve) {
        console.log('11');
        resolve();
    }).then(function() {
        console.log('12')
    })
})
```
    1     7    8  6 2 4 5 3 9 11 12 10  


## II.填空题（数据结构）

### 7.使用栈判断大括号是否闭合
创建一个函数来判断给定的表达式中的大括号是否闭合：

```js
var expression = "{{}}{}{}"
var expressionFalse = "{}{{}";

isBalanced(expression); // true
isBalanced(expressionFalse); // false
isBalanced(""); // true
```

实现：
```js
function isBalanced(expression) {
  var checkString = expression;
  var stack = [];

  if (checkString.length <= 0) return _1_; true

  for (var i = 0; i < checkString.length; i++) {
    if(checkString[i] === '{') {
      stack.push(checkString[i]);
    } else if (checkString[i] === '}') {
      if (stack.length > 0) {
        _2_  stack.pop();
      } else {
        return false;
      }
    }
  }

  if (stack.pop()) return _3_; false
  return true;
}
```

### 8.二分查找的递归实现
```js
function recursiveBinarySearch(array, value, leftPosition, rightPosition) {
  if (leftPosition > rightPosition) return -1;

  var middlePivot = Math.floor((leftPosition + rightPosition) / 2);
  if (array[middlePivot] === value) {
    return _1_; true 
  } else if (array[middlePivot] > value) {
    return recursiveBinarySearch(array, value, leftPosition, _2_); middlePivot
  } else {
    return recursiveBinarySearch(array, value, _3_, rightPosition); middlePivot
  }
}
```

### 9.正则表达式回文判断
期望判断回文的效果：

```js
console.log(isPalindrome("level"));                   // logs 'true'
console.log(isPalindrome("levels"));                  // logs 'false'
console.log(isPalindrome("A car, a man, a maraca"));  // logs 'true'
```

实现：

```js
function isPalindrome(str) {
    str = str.replace(_1_, '').toLowerCase(); /\,/\
    return (str == str.split('').reverse().join(''));
}
```

## III.读程序判断输出(React基础)
### 10.JSX
```js
<script type="text/babel">
    var names = ['Alice', 'Emily', 'Kate'];

    ReactDOM.render(
    <div>
    {
      names.map(function (name) {
        return <div>Hello, {name}!</div>
      })
    }
    </div>,
    document.getElementById('example')
    );
</script>
```
'Alice', 'Emily', 'Kate'

<div>Hello,Alice !</div>
<div>Hello,Emily !</div>
<div>Hello,Kate !</div>

### 11.组件
```js
var HelloMessage = React.createClass({
  render: function() {
    return <h1>Hello {this.props.name}</h1>;
  }
});

ReactDOM.render(
  <HelloMessage name="John" />,
  document.getElementById('example')
);
```
<h1>Hello John</h1>
### 12.children 属性
```js
<script type="text/babel">
  var NotesList = React.createClass({
    render: function() {
      return (
        <ol>
          {
            React.Children.map(this.props.children, function (child) {
              return <li>{child}</li>;
            })
          }
        </ol>
      );
    }
  });

  ReactDOM.render(
    <NotesList>
      <span>hello</span>
      <span>world</span>
    </NotesList>,
    document.getElementById('example')
  );
</script>
```

<ol>
    <li>
        <span>hello</span>
        <span>world</span>
    <li>
<ol>

## IV.填空题(React基础)
### 13.组件生命周期
React 为每个状态都提供了两种处理函数，will 函数在进入状态之前调用，did 函数在进入状态之后调用，三种状态共计五种处理函数：

1. componentWillMount()
1. `_1_`componnetDidMount()
1. componentWillUpdate(object nextProps, object nextState)
1. componentDidUpdate(object prevProps, object prevState)
1. componentWillUnmount()

此外，React 还提供两种特殊状态的处理函数。

1. `_2_`：已加载组件收到新的参数时调用 componentReceivedPorps(object preProps,object nextProps)
1. shouldComponentUpdate(object nextProps, object nextState)：组件判断是否重新渲染时调用

### 14.使用arrow notation
```js
// Manually bind, wherever you need to
class Main extends React.Component {
  constructor(props) {
    super(props);
    // Manually bind this method to the component instance...
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    // ...to ensure that 'this' refers to the component instance here.
    this.setState({showOptionsModal: true});
  }
}

// 上述代码等价于：
//using arrow notation
class Main extends React.Component {
  handleClick = (e) => {
    _1_; this.setState({showOptionsModal: true});
  }
}
```

## V.填空题(Webpack/Babel/SASS/SCSS)
### 15.Webpack
如下所有文件均在同一目录下。

main.jsx:

```js
const React = require('react');
const ReactDOM = require('react-dom');

ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.querySelector('#wrapper')
);
```

index.html:

```html
<html>
  <body>
    <div id="wrapper"></div>
    <script src="bundle.js"></script>
  </body>
</html>
```

webpack.config.js

```js
module.exports = {
  entry: _1_,             main.jsx
  output: {
    filename: _2_        bundle.js
  },
  module: {
    loaders:[
      {
        test: _3_,
        exclude: /node_modules/,
        loader: 'babel-loader?presets[]=es2015&presets[]=react'
      },
    ]
  }
};
```

### 16.SCSS
style.scss:

```css
@mixin roundedBox($radius: 5px){
  border-radius: $radius;
  -moz-border-radius: $radius;
  -webkit-border-radius: $radius;
}

div{
  @include roundedBox(10px);
}

#box{
  @include roundedBox;
}
```

对应的css应该为：

```css
div{
  border-radius: _1_;    10px
  -moz-border-radius: _2_;    10px
  -webkit-border-radius: _3_;    10px
}    

#box{
  _4_: 5px;
  border-radius
  _5_: 5px;
  -moz-border-radius
  _6_: 5px;
  -webkit-border-radius
}
```

---
