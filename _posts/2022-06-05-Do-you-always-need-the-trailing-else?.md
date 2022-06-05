---
layout: post
author: Adam Gonda
minutes: 5
tags:
  - JavaScript
  - Best practice
  - Battle tested
  - Clean code
titles:
  - If/else
  - Problem
  - Solution
---

I was in the coding bootcamp, I did learned all the basics concepts before that
so I tough an `if/else` can't teach me anything new, but I was wrong. I had this one left.

{% include post-content-list.html titles=page.titles %}

# If/else

It is a fairly simple control flow statement in (I assume) every programming language.

```js
if (condition) {
  console.log('true')

} else {
  console.log('false')
}
```

So based on some condition we like to do something.
I assume you can follow me so far, good.

# Problem

When it comes to clean and easily comprehendible code,
unintentional `else` statements are a waist of precious brainpower.

In the previous☝️ example the `else` branch was needed, because if the condition is falsy
we like to do something totally different.

But in my day to day I mostly encounter a different scenario.
Where you have to return different values based on different conditions

```js
if (condition) {
  return 1

} else {
  return 0
} 
```

# Solution

I think in this situation the last `else` is useless, and you are good to go with early returns.

```js
if (condition) {
  return 1
}

return 0
```