const sekil = {
  yaricap: 5,
  cap() {
    return this.yaricap * 2;
  },
  cevre: () => 2 * Math.PI * this.yaricap,
};

console.log(sekil.cap());
console.log(sekil.cevre());