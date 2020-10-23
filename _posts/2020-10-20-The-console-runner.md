---
layout: post
author: Adam Gonda
minutes: 5
tags:
  - Tutorial
  - Game
  - JavaScript
  - FP Snake
titles:
  - Intro
  - Setup
  - Example
  - API
  - Next steps
---

The goal of this part is to introduce the `console-runner` package.
Show it's API through a toy example and tell a bit more about it's inner workings.

> **Note:**
this is part of a **"FP Snake"** series on creating a Snake game in FP style
using JavaScript, where we learning Functional Programming concepts
while we recreating this classing game.
<br>
<br>
[Index](#) | [<Prev](#) | [Next>](#)

{% include post-content-list.html titles=page.titles %}

# Intro

If you ever created a game before, you know that in every game, there is a
game loop at the core, and its job is to keep updating the game until we exit.
In case of snake, the `console-runner` will provide our game loop.
Here is a high level overview of our architecture.

{% include post-image.html
  src='snake-overview.jpg'
  date=page.date
%}

As you can see we have two main parts, one is the `console-runner`
where most ot the `I/O` happens, and an other is the game where we
will implement our game logic, with a clear `API` between the two.

It is a nice practice to separate the presentation
from the business logic. This approach simplifies
our application and sets clear boundaries.
So when we implement the game, our only job will be
to deal with the game specific issues.

We will lay down the basis of our setup now but
we won't get into the game part just jet, first I like you to
familiarize yourself with the `console-runner`.

# Setup

<p>Create a folder and open it with VS Code:</p>{: .pre-code}
```js
mkdir snake-game && cd snake-game && code .
```

<p>Create a package.json file:</p>{: .pre-code}
```js
npm init -y
```

<p>Create a runSnake.js file:</p>{: .pre-code}
```js
touch runSnake.js
```

<p>Install the console-runner package:</p>{: .pre-code}
```js
npm i adamgonda/console-runner
```

# Example

```js
// runSnake.js

const { run } = require('console-runner')

run({
  initialState: {
    player: {
      x: 10,
      y: 5,
    },
  },
  toCommon: state => [
    {
      ...state.player,
      tag: 'player',
    },
  ],
  update: (state, input) => state,
  renderMap: {
    player: 'X',
  },
  dimensions: {
    WIDTH: 20,
    HEIGHT: 10,
  },
})
```

Then run it with Node.

```js
node runSnake.js
```

If you did everything right, you have to see something like this.
Try to play around with it. For example see what happens
if you press AWSD or mess with the `update` function. Familiarize
yourself with this package and it's API, because we will use this during the course.

```js
{ player: { x: 10, y: 5 } }
input null
-----------------------
|                     |
|                     |
|                     |
|                     |
|                     |
|          X          |
|                     |
|                     |
|                     |
|                     |
|                     |
-----------------------
```

# API

**initialState**: will be the starting point of our game,
here we provide a state that we like to have at the
beginning

**toCommon**: is a function that is specific to a given game,
it's job is to transform the game state into a common format,
which is a list of objects, that has
an `x`, `y` and a `tag` property. So the `console-runner`
knows where and how to render them.

**update**: is a function that holds our game logic,
the `console-runner` calls it before every render.
it gets a state and an input from the
`console-runner` than returns a new state

**renderMap**: here you can specify a mapping between tags
to ASCII characters, so the `console-runner` will
render your game as you like

**dimensions**: tells how big view the `console-runner` has to create

# Next steps

You did great and reached the end of this section.
Next we will start to check out the
different features we have to implement regarding the game.

---
---

<p style="text-align: center">
<a href="#"><b><Prev</b></a> | <a href="#"><b>Next></b></a>
</p> 
