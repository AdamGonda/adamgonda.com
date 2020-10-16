---
layout: post
author: Adam Gonda
minutes: 4
tags:
  - Blog
  - Coding
  - Dev life
  - FunMonth 3
titles:
  - Bug fixes
  - Images
  - Text and readability
---

Fixed a few issues, and redesigned some things. I think this blog is going in the right direction,
but I always like to listen for valuable feedback.

{% include post-content-list.html titles=page.titles %}

# Bug fixes

I noted a few issues, both were on the index page, where you can scroll through the blog posts. Both related to the list items that represent a post.

{% include post-image.html
  src='tag-fix.jpg'
  date=page.date
%}

As you can see, if it was too many tags related to a blog post, it messed up the whole layout of the page on small screen sizes.

{% include post-image.html
  src='post-list-item-fix.jpg'
  date=page.date
%}

The other issue was that tags snapped to the top by default, and when it wasn't enough text in one post, it looked inconsistent, compared to other posts where there was more text.

# Images

The issue was that the image styles wasn't felt unified, and also they didn't support certain kind of content colors, for example, pictures with white background didn't differ from the site's background color. This looks wired because you don't know where the picture ends, so they can break
the layout.

{% include post-image.html
  src='on-index-old.png'
  date=page.date
%}

The first image looks odd, compared to the others, where are clear boundaries.

{% include post-image.html
  src='on-index-new.png'
  date=page.date
%}

You can see that I decided to use drop shadows, first I was worried about that it
won't go with my design, but I think it turned out the be nice, and it solves the issue.

# Text and readability

Then the last one, I changed the font type because people said the old one was not readable enough,
and at the same time, if I was considering readability I decided to go with a bit less blinding background color.

{% include post-image.html
  src='comparison-text-and-color.jpg'
  date=page.date
%}
