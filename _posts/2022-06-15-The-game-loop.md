---
layout: post
author: Adam Gonda
minutes: 5
tags:
  - JavaScript
  - FP
  - Tutorial
  - Series
  - Snake
titles:
  - Game loop
  - The package
---

Let's look at how games are put together, first of all we
need a ...if you guessed it from the title there is hope 🤠
Let's read on and find out.

{% include post-content-list.html titles=page.titles %}

# Game loop

From the web:

> The game loop is the overall flow control for the entire game. It's a loop because the game keeps doing a series of actions over and over again until the user quits. Each iteration of the game loop is known as a frame.

For more complex games it can be pretty tricky to implement
but for our purpose, a simple while loop could do.

But in our case we will use a package that I wrote a while back called [loop](https://github.com/AdamGonda/loop){:target='_blank'}
it's exactly what we need:
> The missing game loop for your Pure function.

# The package

You just have to define your `initial state` and an `update` function,
then the loop takes care of the rest, it will call `update` in each iteration
with the `currentState` and `input`, or it will terminate if the `isGameOver`
property in your `state` is `true` or the user presses `q`.

<b>Usage:</b>

```md
npm install adamgonda/loop
```

```js
// in your index.js
const { run } = require('console-runner')

run({
  initialState: { player: { x: 10, y: 5, isHappy: true }},
  update: (state, input) => state,
  toCommon: (state) => [{ ...state.player, tag: 'player' }],
  renderMap: { player: 'X' },
  dimensions: { width: 20, height: 10 }
})
```

when you run node `./index.js` it will produce a running game that looks like this 👇

```md
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

For more info about the [API](https://github.com/AdamGonda/loop/blob/main/README.md#api){:target='_blank'}