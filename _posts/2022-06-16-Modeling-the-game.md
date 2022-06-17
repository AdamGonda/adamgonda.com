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
  - State
---

I will start by modelling the game, then
we will setup our dev env.

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

Because I will use [loop](https://github.com/AdamGonda/loop){:target='_blank'}
it's given that I model the game in a 2D coordinate system, where
every `game object` will have an `x` and `y` position.

The package will also provide us a game loop.
So I can concatenate on the state and logic.

{% include post-image.html
  src='snake-in-2d-grid.jpg'
  date=page.date
%}

Let's start creating the dev setup.

```md
mkdir snake-game && cd snake-game && npm init -y
```

Install [loop](https://github.com/AdamGonda/loop){:target='_blank'}:

```md
npm install adamgonda/loop
```
