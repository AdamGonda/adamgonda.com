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
  - First and higher order functions
  
  # - Immutability
  # - Referential transparency
  # - Closers
  # - Functors
  # - Piping
  # - Partial application vs currying
---

Is `FP` better than `OOP`? I think yes so in this tutorial series I like to
show you how to implement one of the simplest games ever:
`Snake`, in a functional style using `JavaScript` and show you the basics.

{% include post-content-list.html titles=page.titles %}

# First and higher order functions

Let's start from the beginning, what is a `function`?
It is the smallest reusable code block, it can accept arguments and has a return value.
In `JavaScript` you can define one like this.

```js
function greet(name) {
  return 'Hello ' + name
}
```

First it seems fairly simple right? But wait a bit.
I had a hard time with the next concept because my first language was `Java`

> in JavaScript functions are first-class citizens.
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

In this example, we have greet which is a `first order function`
> first order functions don't take a function as an argument or return a function as output.

and `accept` and `_return` as `higher order functions`

> a higher order function is a function that takes a function as an argument or returns a function.

If you were me and started on the `OOP` path, your head is spinning by now.
Because the usual mental model or the level of abstraction for something is a `class` in `OOP` land.

But now lets see how we can use our new knowledge to implement our Snake game.