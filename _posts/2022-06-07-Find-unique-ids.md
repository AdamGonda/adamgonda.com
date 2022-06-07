---
layout: post
author: Adam Gonda
minutes: 5
tags:
  - JavaScript
  - Interview question
  - Recursive
titles:
  - Task
  - Solution
---

I
had the chance to interview a few hundred times 🤠
and practice the process which usually involves some kind of a coding task
a home assignment or a live challenge, this is the latter.

{% include post-content-list.html titles=page.titles %}

# Task

We have to find the unique ids in a [Tree (data structure)](https://en.wikipedia.org/wiki/Tree_(data_structure)){:target='_blank'}

```js
const tree = {
  id: '7',
  children: [
    {
      id: '5',
      children: [],
    },
    {
      id: '3',
      children: [
        {
          id: '7',
          children: [
            {
              id: '5',
              children: [],
            },
            {
              id: '7',
              children: [],
            },
          ],
        },
      ],
    },
    {
      id: '7',
      children: [
        {
          id: '9',
          children: [],
        },
      ],
    },
  ],
}
```

# Solution

We have to discover all the leafs of the tree to get all the ids than return the unique ones.

First I create a function called `discover`, as the name implies it's job is to recursively go through the data structure.

```js
function discover(node) {
  if (node.children.length == 0) {
    return
  }

  node.children.forEach(child => discover(child))
}
```

Than we need to collect all the ids, for that I will use a list.

```js
const ids = []

function discover(node) {
  ids.push(node.id)

  if (node.children.length == 0) {
    return
  }

  node.children.forEach(child => discover(child))
}
```

At last but not least we have to get the unique ids and for that I use a simple set.

```js
discover(tree)

const uniqueIds = new Set(ids)

console.log(uniqueIds) // Set { '7', '5', '3', '9' }
```
