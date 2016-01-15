let isDone: boolean = false;

let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

let surname: string = `Gene`;
let age: number = 37;
let sentence: string = `Hello, my name is ${ surname }.

I'll be ${ age + 1 } years old next month.`

let list: number[] = [1, 2, 3];

// Declare a tuple type
let x: [string, number];

x = ['hello', 10];

enum Color {Red, Green, Blue};
let c: Color = Color.Green;

let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean

let myList: any[] = [1, true, "free"];

myList[1] = 100;

function warnUser(): void {
    alert("This is my warning message");
}

let unusable: void = undefined;