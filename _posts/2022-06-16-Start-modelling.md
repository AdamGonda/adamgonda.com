---
layout: post
author: Adam Gonda
minutes: 1000
series: true
tags:
  - JavaScript
  - Functional programming
  - Tutorial
  - Series
titles:
  - Refresher
  - Dev setup
  - State
---

I will start by modelling the game, then
we will setup our dev env.

This post is part of a [series](/2022/06/13/Snake-à-la-functional.html){:target='_blank'} on recreating `Snake`
in a functional style using `JavaScript` and a package I wrote.
Find what we achieved in the post code wise [here](https://github.com/AdamGonda/snake-game/tree/start-modelling){:target='_blank'}.
{: .info-box}

{% include post-content-list.html titles=page.titles %}

# Refresher

I assume you know this game, but let's go through it.
We have a snake in a constrained environment, where
the goal is to eat the most amount of food and grow without
colliding with the walls or with our own tail.

# Dev setup

```md
mkdir snake-game && cd snake-game && npm init -y
```

Install [loop](https://github.com/AdamGonda/loop){:target='_blank'}:

```md
npm install adamgonda/loop
```

Create `src` folder with `index.js` and `utils.js`.

```md
mkdir src && cd src && touch index.js utils.js
```

First we import run from loop.

```js
// src/index.js
const { run } = require('loop')

```

# State

Because I will use [loop](https://github.com/AdamGonda/loop){:target='_blank'}
it's given that I model the game in a 2D coordinate system, where
every `game object` will have an `x` and `y` position.

{% include post-image.html
  src='snake-in-2d-grid.jpg'
  date=page.date
%}

I start by defining the state of the game. I don't add the food just yet,
I concentrate on the snake, for now, it has a property `body`: it's an array
of body parts with an `x` and `y` position.

`view` and `isGameOver` are required by loop's [API](https://github.com/AdamGonda/loop/blob/main/README.md#api){:target='_blank'}.

```js
// src/index.js
const initialState = {
  snake: {
    body: [
      {
        x: 10,
        y: 5,
      },
    ],
  },
  view: { width: 20, height: 10 },
  isGameOver: false,
}
```

Next we will add a function called `toCommon`,
it's needed by loop again so it knows how to transform
our unique game state to a common list of `game objects`

Here I get the snake from our game state then
mapping through it's body parts,
I add the `x` and `y` position to them, and a `tag` property.

```js
// src/index.js
function toCommon(state) {
  const { snake } = state

  return [
    ...snake.body.map((part, i) => ({
      x: part.x,
      y: part.y,
      tag: i == 0 ? 'head' : 'body',
    })),
  ]
}
```

What is this tag prop? It's for loop so it knows how to render each `game object`.
But it's just half of the picture, the other half is the `renderMap` that maps tags to characters.

```js
// src/index.js
const renderMap = { head: 'X', body: 'x' }
```
