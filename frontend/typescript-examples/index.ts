function sum(x: number, y: number): number {
    return x + y;
}

const sumExample = sum(2, 5);

// Primitive types
let age: number = 35;
let userName: string = 'BM';
let isValid: boolean = true;

let productName: string[] = ['audi', 'tesla'];


enum States {
    valid = 'valid',
    inValid = 'inValid',
    pristine = 'pristine',
}
// type FormStates = number | string;
type FormStates = States.valid | 'inValid' | 'pristine';

enum StatesDefault {
    valid = 0,
    inValid = 1,
    pristine = 2,
}

console.log(StatesDefault.valid);
console.log(StatesDefault[0]);

let formState: FormStates = States.valid;

type User = {
    userName: string;
    userAge: number;
}

const user: User = {
    userName: 'BM',
    userAge: 22
}

function wrapperSum(a: number, b: number, fn: (x: number, y: number) => number) {
    return fn.apply(null, [a,b])
}

wrapperSum(3, 5, sum);

// Any
let anyEx: any;
anyEx = 5;
anyEx = '5';


function customPush<T>(arr: T[], value: T): T[] {
    return [...arr, value];
}

let arr1 = [1, 2, 3];
customPush(arr1, 45);

type Product = {
    title: string;
    price: number
}

interface ICart {
    products: Product[];
    getTotalPrice: () => number;
}

class Cart implements ICart {
    constructor(public products: Product[]) {
    }

    getTotalPrice() {
        return this.products.reduce((acc: number, item: Product ) => acc + item.price, 0);
    }
}