---
layout: post
author: Adam Gonda
minutes: 4
tags:
  - JavaScript
  - Tutorial
  - Technique
titles:
  - Problem
  - Solution
  - Implementation
---

Perfection is a nice ideal that you can strive for but never achieve
yet paying attention to the little things is different. I think they
really can elevate your web design and make a difference.
One of which is progressive image loading. Let's see how it works.

{% include post-content-list.html titles=page.titles %}

# Problem

Images. Every site has them, but not everyone treats them well.
Like when the page loads and images are missing, or when they load late
causing this annoying popping effect.

[Medium](https://medium.com/){:target='_blank'} and other sites do this
called progressive image loading. Where they fix the issue by showing you a low res blurred
version of the image until the high res one arrives then switch them smoothly.

It is all about perceived load time and the avoidance
of popping, that makes all the difference in UX.

# Solution

This blog was created with [Jekyll](https://jekyllrb.com/){:target='_blank'} and hosted on [Netlify](https://jekyllrb.com/){:target='_blank'}.
I had the problems mentioned ☝️ so I took my own advice.

So the technique is using minified `base64` placeholders
inlined into `HTML`. So when the page loads first, these images will be there
but blurred out, and when they load you swap them out to the original,
usually using a fade-in animation for the transition between the two.

# Implementation

I created a script that runs in the pipeline after the site has been generated.
It finds all the images then creates a low res `base64` version from each and inlines them to the `HTML`.

```js
const apply = async () => {

  // get all html paths
  const paths = []
  getAllFromDir(__dirname + '/../_site', '.html', paths)

  // go through the paths
  const tasks = paths.map(async path => {
    
    // parse the html to a jsdom object
    const dom = await jsdom.JSDOM.fromFile(path, {})

    // find all the relevant images in the dom
    const images = Array.from(
      dom.window.document.querySelectorAll('img'),
    ).filter(image => !image.classList.contains('ignore-PIL'))

    // get the base64 representation of the images
    const b64s = await get64s(images)

    // inline the base64 versions to the dom
    images.forEach((img, idx) => updateDom(img, idx, b64s))

    // write the updated dom to the file
    fs.writeFile(path, dom.serialize(), err => err ? console.log(err) : null) // prettier-ignore
  })

  return await Promise.all(tasks)
}
```

To work with the `HTML` I used [jsdom](https://github.com/jsdom/jsdom){:target='_blank'}, it has a nice dom like API
and I used [jimp](https://github.com/oliver-moran/jimp){:target='_blank'} to transform the images to `base64`.

For the lazy loading part and switching I decided to use this library called [lazysizes](https://github.com/aFarkas/lazysizes){:target='_blank'}.

Then I added the blur and transitions, and with that, I finished my implementation.

```js
.lazyload,
.lazyloading
  filter: blur(5px)

.lazyloaded
  animation-name: fadein
  animation-duration: 0.4s
  animation-fill-mode: forwards

@keyframes fadein
  from
    filter: blur(5px)
  to
    filter: blur(0)
```
