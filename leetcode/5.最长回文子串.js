/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  const str = s.split(""),
    len = str.length;

  let p = [],
    x,
    y;

  for (let i = 0; i < len; i++) {
    p[i] = [];

    for (let j = i; j < len; j++) {
      if (i == j) {
        p[i][j] = true;
      } else {
        p[i][j] = str[i] == str[j] ? true : false;
      }
      if (
        j >= 1 &&
        p[i + 1][j - 1] == true &&
        i + 1 <= j - 1 &&
        y - x < j - i
      ) {
        x = i;
        y = j;
      }
    }
  }

  console.log(x, y);

  console.log(p);
};

// p[i][j] = ( str[i] == str[j] )

/**  [ [ true, false, true, false, false ],
 *     [ false, true, false, true, false ],
 *     [ true, false, true, false, false ],
 *     [ false, true, false, true, false ],
 *     [ false, false, false, false, true ] ]'
 */
