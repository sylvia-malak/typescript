import { add } from './math';

/////////////////////////// 1. Basic Types ///////////////////////////
let username: string = "John";
let age: number = 30;
let isActive: boolean = true;
let scores: number[] = [90, 85, 95];


/////////////////////////// 2. Union Types ///////////////////////////
let id: string | number = "12345";
id = 67890; // or a num


/////////////////////////// 3. Functions ///////////////////////////
console.log(add(5, 3)); // Using imported add function
// Output: 8

/////////////////////////// 4. Enums ///////////////////////////
// Numeric enum
enum Direction {
    Up = 1,
    Down,
    Left,
    Right
}
console.log(Direction.Up);    // Output: 1
console.log(Direction.Down);  // Output: 2
console.log(Direction.Left);  // Output: 3
console.log(Direction.Right); // Output: 4

// String enum
enum Color {
    Red = "RED",
    Green = "GREEN",
    Blue = "BLUE"
}   
console.log(Color.Red); // Output: "RED"

/////////////////////////// 5. Interface & Class ///////////////////////////
interface Person {
    name: string;
    age: number;
    greet(): void;
}

class Employee implements Person {
    constructor(
        public name: string,
        public age: number,
        private salary: number
    ) {}

    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }

    getSalary(): number {
        return this.salary;
    }
}

const emp = new Employee("Alice", 28, 50000);
emp.greet(); // Output: Hello, my name is Alice
console.log(emp.getSalary()); // Output: 50000

/////////////////////////// 6. Inheritance ///////////////////////////
class Manager extends Employee {
    constructor(
        name: string,
        age: number,
        salary: number,
        private department: string
    ) {
        super(name, age, salary);
    }

    getDepartment(): string {
        return this.department;
    }
}

const mgr = new Manager("Bob", 35, 70000, "Sales");
mgr.greet(); // Output: Hello, my name is Bob
console.log(mgr.getDepartment()); // Output: Sales
console.log(mgr.getSalary()); // Output: 70000

/////////////////////////// 7. Generics ///////////////////////////
// Generic function
function identity<T>(arg: T): T {
    return arg;
}
let output1 = identity<string>("hello");
let output2 = identity<number>(42);
console.log(output1); // Output: hello
console.log(output2); // Output: 42

// Generic class
class Box<T> {
    constructor(private value: T) {}

    getValue(): T {
        return this.value;
    }
}
const stringBox = new Box<string>("TypeScript");
const numberBox = new Box<number>(10);
console.log(stringBox.getValue()); // Output: TypeScript
console.log(numberBox.getValue()); // Output: 10

/////////////////////////// 8. Point Classes ///////////////////////////
class Point2D {
    constructor(public x: number, public y: number) {}

    distanceTo(other: Point2D): number {
        const dx = this.x - other.x;
        const dy = this.y - other.y;
        return Math.sqrt(dx * dx + dy * dy);
    }
}

class Point3D extends Point2D {
    constructor(x: number, y: number, public z: number) {
        super(x, y);
    }
}

const point1 = new Point2D(0, 0);
const point2 = new Point2D(3, 4);
console.log(`Distance between points: ${point1.distanceTo(point2)}`); // Output: 5

const point3d1 = new Point3D(0, 0, 0);
const point3d2 = new Point3D(1, 2, 2);
console.log(`Distance between 3D points: ${point3d1.distanceTo(point3d2)}`); // Output: 3

/////////////////////////// 9. Container Implementation ///////////////////////////
interface Container<T> {
    put(item: T): void; //بتاخد قيم ومش بترجع حاجه
    get(): T; //بترجع قيم بس مش بتاخد حاجه
}

class SimpleBox<T> implements Container<T> {
    constructor(private content: T) {}

    put(item: T): void { 
        this.content = item;
    }

    get(): T { 
        return this.content;
    }
}

const box = new SimpleBox<string>("Hello");
box.put("World");
console.log(box.get()); // Output: World


//npm start 
// npm run watch
