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

I assume you know this game, but let's go through it.
We have a snake in a constrained environment, where
the goal is to eat the most amount of food and grow without
colliding with the walls or with our own tail.

{% include post-content-list.html titles=page.titles %}

# Modelling the game

I said we are done with concepts but I have to introduce you to an other one
because our game will be a `pure function`.

> Pure function: Given the same input, always
  returns the same output. Produces no side effects.

To interact with the user and for rendering <b>(side effects)</b> we will use a package I created a while ago
called [console-runner](https://github.com/AdamGonda/console-runner){:target='_blank'} check out it's API.

This way we are able to implement the game logic as a simple state transformation like `(currentState, input) => newState`,
because the game loop will be handled by the runner.

So far with the runner we have:
- game loop 

We will model the game in a 2D coordinate system, where
every `game object` will have an `x` and `y` position.

When it comes to rendering there will be a simple list
with all the `game object` in it that we will render out
in the terminal. 

```ts
type BodyPart = {
  x: number
  y: number
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

We will have a `State` which will represent out whole game state.
There are 3 distinct things in it:
<br><b>View</b>: this will represent the 2D plane's `width` and `height`.
<br><b>Snake</b>: will represent our snake's body and direction.
<br><b>Food</b>: it will be just a single `game object`


At a high level the implementation will be just a mapping between `(currentState, input) => newState`.
Where our main function will consist of multiple state transitions on `State` piped together like this:

