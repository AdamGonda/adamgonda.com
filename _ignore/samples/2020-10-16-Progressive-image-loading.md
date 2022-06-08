---
layout: post
author: Adam Gonda
minutes: 4
tags:
  - Blog
  - Coding
  - FunMonth 4
titles:
  - What
  - Why
  - How
---

I decided to add this feature to the blog,
a lot of other sites use it and besides that,
I think it is a neat feature, one which is actually useful.

{% include post-content-list.html titles=page.titles %}

# What

This is a technic to create a better user experience by using
minified base64 placeholders directly inlined into HTML.
So when the page loads first, these images will there
but blurred out, and when they load you swap them the original,
usually using a fade-in animation for the transition between the two.

# Why

It is about perceived load time, and how long it takes to render the DOM.
Most sites have images, and when you open up a site and everything
is ready, except where the images should be there nothing
just white boxes, your impression won't be 😍

# How

Okay so is one thing to transform an image to a Low-res base64 version and then
inline it into HTML by hand. But the real fun comes when you like to:

**1.** Automate the image processing
**1.** 
**2.** lazy load it.

So I decided to use a library called [lazysizes](https://github.com/aFarkas/lazysizes){:target='_blank'} for the lazy loading part, and then I had
to build a whole new post-processing pipeline to transform and inline the
images.
