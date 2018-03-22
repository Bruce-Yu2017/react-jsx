const multiply = {
  num: [4,5,6],
  mulby: 4,
  mulpy() {
    return this.num.map((x) => x * this.mulby);
  }
}
console.log(multiply.mulpy())