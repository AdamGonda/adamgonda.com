---
layout: post
author: Adam Gonda
minutes: 3
tags:
  - JavaScript
  - RPC
  - Game
titles:
  - First steps
  - Spice it up
  - Solution
  - PS
  - Node
---

I am a Functional Programming fan, so I thought I will create a small game in the terminal.
Then it turned out to be an RPC API at the end.

{% include post-content-list.html titles=page.titles %}

# First steps 

I like to create games, and I
liked to learn more about [FP](https://en.wikipedia.org/wiki/Functional_programming){:target="_blank"}
so I took my favorite game to implement [Snake](https://en.wikipedia.org/wiki/Snake_(video_game_genre)){:target="_blank"} and implemented it using
[JavaScript](https://en.wikipedia.org/wiki/JavaScript){:target="_blank"} in a functional manner.

When it was done I started to think about the [stateless](https://subscription.packtpub.com/book/application_development/9781788831437/1/ch01lvl1sec16/stateless-versus-stateful){:target="_blank"}
nature of FP and the beauty of this implementation. The business logic is nicely separated from everything
else, and the whole thing is a pure function. This implementation used [Node](https://nodejs.org/en/){:target="_blank"} and I rendered the game to the [console](https://en.wikipedia.org/wiki/System_console){:target="_blank"}.
So at this point I had a simple Snake game in the terminal.

# Spice it up

The presentation and the game logic already was two different things.
The API between the two was very clear, so I started to think... 

One option is to ship the logic to the frontend, but it's too obvious
and this is my fun little project. So I though that it would be
interesting if this code stays at the backend.
The API is already very clear and my implementation is totally stateless
and separate from the presentation 🤠.

So I took the game logic and I created a Node app and I decided to host it on
[Heroku](https://www.heroku.com/){:target="_blank"}.

# Solution

**Backend**:
Node server running on Heroku, totally stateless and it knows nothing about the rendering.
It is just a mapping between:
``` js
(currentState, input) => newState
```

<br>

**Frontend**:
I called my old friend [p5.js](https://p5js.org){:target="_blank"}
to the rescue for the rendering. With the clean separation, this
module's job is very straightforward. It's initializes the state, then
it calls the Node server on every iteration of the game to get the new state to render.

# PS

Of course this is not an optimal solution, But I thought it maybe can
useful for learning proposes for other if they like to implement the rendering part,
<br>for concepts like:

- [Network latency](https://en.wikipedia.org/wiki/Latency_(engineering)){:target="_blank"}
- [Concurrency](https://en.wikipedia.org/wiki/Concurrency_(computer_science)){:target="_blank"}
- [Separation of concerns](https://en.wikipedia.org/wiki/Separation_of_concerns){:target="_blank"}

<br>
<br>
So you can learn about them first hand without the need to implement
any business logic, and with games involved 😀, which always makes
things more fun I think.
