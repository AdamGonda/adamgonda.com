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

One day when I was in the coding Bootcamp and my mentor come over and asked about my code,
I had to realize that although I thought I knew everything about `if/else` best practices
I was wrong, and I had this one left to learn.

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
unintentional `else` statements are a waste of precious brainpower.

In the previous☝️ example the `else` branch was needed, because if the condition is falsy
we like to do something totally different.

But in my day, to day I mostly encounter a different scenario.
Where you have to return different values based on different conditions.

```js
if (condition) {
  return 'early return'

} else {
  return 'base case'
} 
```

# Solution

I think in this situation the last `else` is useless,
and you are good to go with early returns.

```js
if (condition) {
  return 'early return'
}

return 'base case'
```
