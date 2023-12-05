import * as math from "./math";
import "./style.css";

const multiply = (a) => (a) * 8;

console.log("ES6 modules \n");
console.log("sum = " + math.sum (2, 3));
console.log("multiply = " + math.multiply(7));
console.log("multiply from index.js = " + multiply(8));