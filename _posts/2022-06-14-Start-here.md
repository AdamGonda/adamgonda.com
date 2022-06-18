---
layout: post
author: Adam Gonda
minutes: 6
tags:
  - JavaScript
  - FP
  - Tutorial
  - Series
  - Snake
titles:
  - What is a function?
  - Type of functions
  - Immutability
  - Piping
---

First, we will go through a few concepts regarding `FP` and `JavaScript`
before we can start implementing the game.

This post is part of a [series](/2022/06/13/Snake-à-la-functional.html){:target='_blank'} on recreating `Snake`
in a functional style using `JavaScript` and a package I wrote.
{: .series-box}

{% include post-content-list.html titles=page.titles %}

# What is a function?

It is the smallest reusable code block, it can accept arguments and has a return value.
In `JavaScript` you can define one like this.

```js
function greet(name) {
  return 'Hello ' + name
}
```

> In JavaScript functions are first-class citizens.
You can pass functions to other functions as arguments, return them from other functions as values, and store them in variables.

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

and also a `pure function`

> Pure functions given the same input, always return the same output and produce no side effects.

`accept` and `_return` are `higher order functions`

> A higher order function is a function that takes a function as an argument or returns a function.

If you are like I was and started on the `OOP` path,  your head is spinning by now.
Because the usual mental model or the level of abstraction there for "something" is a `class`, not a `function`.

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

updateName(person, 'Harry')

console.log(person) // { name: 'Harry', age: 22 }
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
but in this case, it's totally fine.

# Piping

You can think of it as a pipeline 👇

{% include post-image.html
  src='pipeline.jpeg'
  date=page.date
%}

But in this case, it will consist of multiple functions,
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

Congrats!!! 🥳🥳🥳<br>
You went through all of them, nice 👍
Next let's look at how games are put together, continue [in the loop 👉](/2022/06/15/In-the-loop.html){:target='_blank'}
