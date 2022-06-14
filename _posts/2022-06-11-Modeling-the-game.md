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
  - Modelling the game
---

First, we will go through a few concepts regarding `FP` and `JavaScript`,
then we start implementing the movement of the `snake` 🤠

{% include post-content-list.html titles=page.titles %}

# Modelling the game

I assume you know this game, but let's go through it.
We have a snake in a constrained environment, where
the goal is to eat the most amount of food and grow without
colliding with the walls or with our own tail.

We will model the game in a 2D coordinate system, where
every object will have an `x` and `y` position.


```ts
type BodyPart = {
  x: number
  y: number

  // previous x, y position
  pX: number
  pY: number
}

type Snake = {
  body: BodyPart[]
  dir: 'UP' | 'DOWN' | 'RIGHT' | 'LEFT'
}

type Food = {
  x: number
  y: number
}

type View = {
  width: number
  height: number
}

type State = {
  view: View
  snake: Snake
  food: Food
  isGameOver: boolean
}
```

At a high level the implementation will be just a mapping between `(currentState, input) => newState`.
Where our main function will consist of multiple state transitions on `State` piped together like this:

