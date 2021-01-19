let arrP = ["name", "salary"];
let source = {
  num: 3,
  name: "IvaNov3",
  cex: 0,
  salary: 12000,
};
let ob = {};
arrP.forEach((prop) => (ob[prop] = source[prop]));
console.log(ob);
// console.log(res);
// console.log(workers);
// let ob = {
//   a: 12,
//   b: 34
// }
// let ob2 = {
//   b: 34,
//   a: 90
// }