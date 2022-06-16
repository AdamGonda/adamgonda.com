---
layout: post
author: Adam Gonda
minutes: 1000
tags:
  - JavaScript
  - Functional programming
  - Tutorial
  - Series
titles:
  - Refresher
  - State
---

I will go through how we can model the `Snake` game.
We will setup our dev env and start ironing out our types.

This post is part of a [series](/2022/06/13/Snake-à-la-functional.html){:target='_blank'} on recreating `Snake`
in a functional style using `JavaScript` and a package I wrote.
{: .info-box}

{% include post-content-list.html titles=page.titles %}

# Refresher

I assume you know this game, but let's go through it.
We have a snake in a constrained environment, where
the goal is to eat the most amount of food and grow without
colliding with the walls or with our own tail.

# State

I model the game in a 2D coordinate system, where
every `game object` will have an `x` and `y` position.

{% include post-image.html
  src='snake-in-2d-grid.jpg'
  date=page.date
%}

As I said we will use [loop](https://github.com/AdamGonda/loop){:target='_blank'}
for our game loop. So let's start with creating the dev setup.

First create a folder and run npm init:

```md
mkdir snake-game && cd snake-game && npm init -y
```

Than install [loop](https://github.com/AdamGonda/loop){:target='_blank'}:

```md
npm install adamgonda/loop
```

Now you can open the folder with your favorite text editor/IDE.

I use `TypeScript` because it helps a lot in describing our types.
As you can see 👇 we are good with just a few.

```ts
type BodyPart = {
  x: number
  y: number
  pX: number
  pY: number
}

type Snake = {
  body: BodyPart[]
  direction: 'UP' | 'DOWN' | 'RIGHT' | 'LEFT'
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

At a high level, the implementation will be just a mapping between `(currentState, input) => newState`.
Where we will have a `Pure function` that will consist of multiple state transitions on the `State`,
piped together like this:


