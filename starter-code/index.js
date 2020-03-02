class SortedList {
  constructor() {
    this.items = []; // item array
    this.length = this.items.length; // length of items
  }
  add(item) { //pushes and sorts items within array
    this.items.push(item)
    this.items.sort(function (a, b) {
      return a - b;
    })
    this.length = this.items.length;
  }
  get(pos) { // get the value at index 'pos' in the list.
    if (this.items[pos] === undefined) {
      throw new Error("OutOfBounds");
    }
    return this.items[pos]
  }
  max() { // return the highest value of the array
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
    return Math.max.apply(null, this.items)
  }
  min() { // return the lowest value of the array
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
    return Math.min.apply(null, this.items)
  }
  sum() { // sums value of the array
    if (this.items.length === 0) {
      return 0;
    }
    return this.items.reduce((accumulator, currentValue) => accumulator + currentValue)
  }
  avg() { // average value of the array
    return this.items.reduce((accumulator, currentValue) => accumulator + currentValue) / this.items.length
  }
}

module.exports = SortedList;
