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

[imports](img/imports.png)

#### Classes

Classes essentially blueprints for objects.
They can have properties and methods.

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

[classes](img/classes.png)

Classes also feature inheritance:
The class that is inheriting properties uses the "extends" keyword.
It must also feature the "super()" constructor. This allows you to call the inherited properties or methods.

[inheritance](img/inheritance.png)

The proper best practice when applying a property to a class:

```
class Human {
    gender = 'male';

    printGender = () => {
        console.log(this.gender)
    }
}
```

We simply assign a property using the "key:value" assignment and we create methods using arrow functions.

NOW, we can also simplify the way we inherit those properties and methods within our extending class:

```
class Human {
    gender = 'male';

    printGender = () => {
        console.log(this.gender)
    }
}

class Person extends Human {
    name = 'Max';
    gender = 'female';

    printmyName = () => {
        console.log(this.name)
    }
}

const person = new Person();
person.printGender();
person.printMyName();
```

Will return:

```
'female'
'Max'
```

# Spread and Rest Operators

Using "..." we call a spread or rest operator.

- Spread operators allow us to split up array elements or object properties.
- Rest operators are used to merge a list of function arguments into an array.

Here is a diagram to help you visualize this:

- [Spread Example 1](img/spread1.png)

Objects Example:

- [Spread Example 2](img/spread2.png)

A Rest operator is used to combine function arguments into a single array.

It also then allows us to manipulate that array using array methods.

In the below example, we take in a few numbers as arguments to our function, but using the rest operator as our parameter, we turn those number arguments into an array and can then apply the sort "method" to that array.

- [Rest Example](img/rest1.png)

# Destructuring

Destructuring allows us to easily extract single array elements or object properties and store them in variables.

Example:

- [Example 1](img/destr1.png)

- [Array Destructuring](img/arrDestr.png)

- [Object Destructuring](img/objDestr.png)

# Array Functions

map() applies a function to every element in an array:

- [Example](img/map.png)
