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
  - Recap and setup
  - Modeling the state
---

...

> **Note:**
this is part of a **"FP Snake"** series on creating a Snake game in FP style
using JavaScript, where we learning Functional Programming concepts
while we recreating this classing game.
<br>
<br>
[Index](#) | [<Prev](#) | [Next>](#)

{% include post-content-list.html titles=page.titles %}

# Recap and setup

I assume that you finished the previous tutorial about the `console-runner`
so you have a setup like ⬇️ and you opened it with **VS Code**.

```js
├── snake-game/
│   ├── node_modules/
│   ├── package.json
│   ├── runSnake.js
```
Here, the `runSnake.js` file will be our starting point.

<p><b>First:</b> we will add a new folder to our setup where all the
files will be, regarding the game.</p>{: .pre-code}
```js
mkdir snake
```

<p><b>Then:</b> we create a new file in it, called index.js</p>{: .pre-code}
```js
cd snake && touch index.js
```

# Modeling the state

Now that we are done lets talk about the game and it's features.
So there is a **snake**, a **food** and an area guarded with **walls** where we play.
The goal is to eat the most food without colliding with the walls or with our own tail.

As you know we have to create an `initialState` object that will act as our starting point
and also as our main model, it will contain & describe every aspect of the game.

So let's see what we have, and go through them one by one, from simplest to the "most" complex.

---

**isGameOver:** we need some kind of a way to tell if the game is over is not, actually we are lucky
because the <code>console-runner</code> automatically checks such a variable in every iteration of the game loop, so if it is <code>true</code> its stops running.

**view:** will represent the game area where the snake has to stay, we can use it to check if the snake collided with the walls or not.

**food:** will be just a simple object with and <code>x</code> nad a <code>y</code> coordinate, it doesn't have to do anything just sit calmly waiting to be eaten.

**snake:** we model the snake mostly as a list of objects, there is a more
common way to do it where the snake is a implemented as a linked list, but because of the nature
of the cloning vs deep cloning in JavaScript, I decided to do it this way, so it is simpler.

---


<p>
Now I like to create factory functions for every model in the `index.js` file, so we can build our `initialState` object from them.
</p>{: .pre-code}
```js
// index.js

function Snake({ x, y, dir }) {
  return {
    body: [
      {
        x,
        y,
        pX: x - 1,
        pY: y,
      },
    ],
    dir,
  }
}

function Food(x, y) {
  return { x, y }
}

function View(width, height) {
  return { width, height }
}

const initialState = {
  snake: Snake({ x: 10, y: 10, dir: DIRS.RIGHT }),
  food: Food(9, 10),
  view: View(35, 15),
  isGameOver: false,
}
```