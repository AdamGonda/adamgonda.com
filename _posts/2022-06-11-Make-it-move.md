---
layout: post
author: Adam Gonda
minutes: 2
tags:
  - JavaScript
  - Functional programming
  - Tutorial
  - Series
titles:
  - What is a function?
  - Type of functions
  - Immutability
  - Piping
  - Make it move
---

First, we will go through a few concepts regarding `FP` and `JavaScript`,
then we start implementing the movement of the `snake` 🤠

{% include post-content-list.html titles=page.titles %}

# What is a function?

It is the smallest reusable code block, it can accept arguments and has a return value.
In `JavaScript` you can define one like this.

```js
function greet(name) {
  return 'Hello ' + name
}
```

It's a fairly simple concept and the basic building block that we will be using throughout this series.

> In JavaScript functions are first-class citizens.
You can pass functions to other functions as arguments, return them from other functions as values, and store them in variables

For example:

```js
// store them in variables
const greet = function(name) {
  return 'Hello ' + name
}

// pass functions to other functions as arguments
function accept(greet) {
  return greet('Bob')
}

// return them from other functions as values
function _return(greet) {
  return greet
}
```

# Type of functions

In the example ☝️, we have `greet` which is a `first order function`
> First order functions don't take a function as an argument or return a function as output.

and `accept` and `_return` as `higher order functions`

> A higher order function is a function that takes a function as an argument or returns a function.

If you are like I was and started on the `OOP` path,  your head is spinning by now.
Because the usual mental model or the level of abstraction for "something" is a `class`, not a `function`.

# Immutability

How would you code if you were unable to change anything?

> In the Functional Programming world, we create values or objects by initializing them.
Then we use them, but we do not change their values or their state. If we need, we create
a new one, but we do not modify the existing object's state.

Modifying existing state:

```js
const person = { name: 'Bob', age: 22 }

function updateName(person, newName) {
  // update the name directly on person
  person.name = newName
}

updateName(person)

console.log(person) // { name: 'Bob', age: 22 }
```

Creating new state:

```js
const person = { name: 'Bob', age: 22 }

function updateName(person, newName) {
  // create a copy of a person, with a new name
  return {
    ...person,
    name: newName
  }
}

const updatedPerson = updateName(person, 'Harry')

console.log(person) // { name: 'Bob', age: 22 }
console.log(updatedPerson) // { name: 'Harry', age: 22 }
```

Sometimes it is not feasible to always create a new copy of an object,
but in this case it's totally fine.

# Piping

You can think of if as a pipeline 👇

{% include post-image.html
  src='pipeline.jpeg'
  date=page.date
%}

But in this scenario, it will consist of multiple functions,
and not gas but data will flow through it,
playing an integral part in helping us to compose/glue our functions together
to build complex data processing pipelines.

Example:

```js
function pipe(seed) {
  return (...fns) => fns.reduce((state, fn) => fn(state), seed)
}

function addA(state) {
  return {
    ...state,
    a: ''
  }
}

function addB(state) {
  return {
    ...state,
    b: ''
  }
}

const state = { foo: 'bar' }

const result = pipe(state)(
  addA,
  addB,
)

console.log(result) // { foo: 'bar', a: '', b: '' }
```

# Make it move

Our game will live in a 2D coordinate system, where
every game object has a `x` and `y` position.

{% include post-image.html
  src='coordinate-system.jpg'
  date=page.date
%}