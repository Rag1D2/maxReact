# Next Gen JavaScript

#### Variables

- let is a changeable variable
- const a variable whose value cannot be changed

#### Arrow Functions

Normal function

```
function myFnc() {
    ....
}
```

Arrow Function - Always goes in a const

```
const myFnc = () => {
    ....
}
```

Some examples are: Single argument function

```
const myName = (name) => {
    console.log(name);
}
myName("Matt");
// "Matt"
```

Multi-argument function

```
const myName = (name, age) => {
    console.log(name, age);
}
myName("Matt", 35);
// "Matt"
// 35
```

If the function is only returning something, we can write it like this

```
const multiply = (number) => number * 2;
console.log(6);
// 12
```

#### Exports and Imports

Code is split up over multiple files. So we can import and export them (these are called modules).

[imports](imports.png)

#### Classes

Classes essentially blueprints for objects.
They can properties and methods.

```
class Person {
Property --> name = "Max"
Method -- >  call = () => {...}
            }
```

- Properties are variables attached to classes
- Methods are functions attached to classes

Classes are instantiated with the "new" keyword.

```
const myPerson = new Person()
        myPerson.call()
        console.log(myPerson.name)
```

[classes](classes.png)

Classes also feature inheritance:
The class that is inheriting properties uses the "extends" keyword.
It must also feature the "super()" constructor. This allows you to call the inherited properties or methods.

[inheritance](inheritance.png)
