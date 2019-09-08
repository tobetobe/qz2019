class SuperArray extends Array {
  constructor(...args) {
    super(...args);
  }

  diff(a) {
    let hash = {},
      value = [];

    for (let i of a) {
      hash[i] = true;
    }

    for (let i of this) {
      console.log(this);
      hash[i] ? null : value.push(i);
    }
    console.log(hash);

    console.log(value);
    return value;
  }
}


const arr1 = new SuperArray(4, 5, 6, 7, 8, 9);
arr1.diff([1, 2, 3, 4, 5, 6]);
