"use strict";
function sum(x, y) {
    return x + y;
}
const sumExample = sum(2, 5);
// Primitive types
let age = 35;
let userName = 'BM';
let isValid = true;
let productName = ['audi', 'tesla'];
var States;
(function (States) {
    States["valid"] = "valid";
    States["inValid"] = "inValid";
    States["pristine"] = "pristine";
})(States || (States = {}));
var StatesDefault;
(function (StatesDefault) {
    StatesDefault[StatesDefault["valid"] = 0] = "valid";
    StatesDefault[StatesDefault["inValid"] = 1] = "inValid";
    StatesDefault[StatesDefault["pristine"] = 2] = "pristine";
})(StatesDefault || (StatesDefault = {}));
console.log(StatesDefault.valid);
console.log(StatesDefault[0]);
let formState = States.valid;
const user = {
    userName: 'BM',
    userAge: 22
};
function wrapperSum(a, b, fn) {
    return fn.apply(null, [a, b]);
}
wrapperSum(3, 5, sum);
// Any
let anyEx;
anyEx = 5;
anyEx = '5';
function customPush(arr, value) {
    return [...arr, value];
}
let arr1 = [1, 2, 3];
customPush(arr1, 45);
class Cart {
    constructor(products) {
        this.products = products;
    }
    getTotalPrice() {
        return this.products.reduce((acc, item) => acc + item.price, 0);
    }
}
//# sourceMappingURL=index.js.map