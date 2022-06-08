---
layout: post
author: Adam Gonda
minutes: 4
tags:
  - Tutorial
  - Technique
  - JavaScript
titles:
  - Problem
---

Perfection is a nice ideal that you can strive for but never achieve
but paying attention to the little things is different. I think they
really can elevate your web design and make a difference.
One of which is progressive image loading. Let's see how I did it.

{% include post-content-list.html titles=page.titles %}

# Problem

Images. Every site has them, but not everyone pays attention to this thing.
This is that when the page loads and images are missing because it takes
more time to load them, is a poor user experience. Especially when the page
starts to pop left and right when they do.

[Medium](https://medium.com/){:target='_blank'} and other sites do this
called progressive image loading. Where they show you a low res blurred
version of the image until the high res one arrives then switch them smoothly.

It is all about perceived load time and the avoidance of the popping that makes
all the differences that I thought would be worth the squeeze.