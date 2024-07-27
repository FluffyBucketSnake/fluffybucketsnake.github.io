---
title: Hello Again
description: I've been away for a while, so lets talk about a bunch of small fixes and
  improvements, and also some new features
date: 2022-09-12T01:01:19.411Z
lastmod: 2022-09-12T01:01:48.329Z
draft: false
tags: []
categories: []
previous: 2022-04-06-hello-world
---

Hi, it's quite a while since my last post. I won't get much into details, but, basically, my previous work was very demanding and, ultimately, drained me of my motivation.

First of all, I wanted to fix the colors used on the project. Comparing the site how it was before to the Figma sketch, one could easily notice the colors were different. This wasn't really intentional, the palette used in the first release of this blog was merely a placeholder, so I decided to finally fix it.

Following that, I applied a small fix to make the navigation menu responsive. By default, it occupies the whole screen, but, for tablets/large phones, its width becomes fixed.

One rather dumb detail I missed were page titles. Seriously, how did I just miss that? I certainly don't know. Regardless, I fixed that.

Another thing I chose to tackle is *backgrounds*. I always intended to have backgrounds as, without them, the design looks a bit boring. I just didn't include them so I could focus on getting the site up. So now I did include them.

As of the moment this post, the background for the hero banner at the homepage is static, but, in the future, I want to make it animated through the use of *WebGL*, both to make the hero banner cooler and to showcase my *CG* skills.

After adding some backgrounds, another improvement I wanted to add some animations to the site. For staters, I added some subtle animations for hovering and pressing buttons.

Secondly, I wanted to animate the navigation menu. In more detail, I wanted to make the *navmenu* slide in from the left. While I could implement it myself just using a simple class toggle, I'll be using **Headless UI**, not only due to the **Transition** component, but also for the sake of accessibility (and simplify the development of implementing said accessibility).

Next, in preparation for the future, I wanted to implement post series. The idea here is that I can link posts together as a sequence, in which, each post has both a previous and a next link to the respective post. There's two main ways I came up with:

1) For each series, there's a file which list, in order, each post (like a *vector list*)
2) Each posts holds some sort of reference to the previous/next posts (like a *linked list*)

I ultimately decided to go with the second, not only due to its simplicity of implementation, but because it fits nicely with the goals of the feature. To show the links on each post using the former method, it would be required to either:

a) For each post to also keep track of the series it's part of. This introduces the possibility of inconsistency between the post info and the series info;
b) For each post rendering, to keep track of all existing series in the blog. Long story short, this simply wouldn't scale well in regards to file reading and memory.

The second method is, in comparison, simpler to use. To create a series, you just connect each post the series is made of. Here, I'll be using slugs to reference each post.

Finally, the last feature for this batch: the return-to-top button. It should only appear when the user scrolls past the top of the post's content. Clicking it will take the user back to the post's title. Implementing it came in two simple parts:

- Getting its style right;
- Making it appear only when viewer scrolls past the top of the post's content.

For the first part, I just added an `a`. The logic being: this is a navigational component. It navigates inside the current document, but it navigates nonetheless. As for the styling, I just reused the styling used at the menu button up top, since both are meant to be *FABs* (floating action button), as well as used `position: sticky` so it sticks at the bottom of the article's contents. Because the element is inside the article's body and I want the *FAB* to its right, I used `margin-left: 100%`, which adds the body's width as the *FAB*'s left margin.

As to the second part, I created a custom hook, `useScrollWatcher`, which combined `useEffect` and the `scroll` window event. The hook returns whether the user has scrolled past the top of an specific HTML element or not. Here's the implementation as of this article:

```
import { RefObject, useEffect, useState } from "react";

export enum ScrollDirection {
  Top,
}

export function useScrollWatcher<TElement extends HTMLElement>(
  target: RefObject<TElement>,
  direction: ScrollDirection
) {
  const [state, setState] = useState(false);
  useEffect(() => {
    const callback = () => {
      setState(target.current!.getBoundingClientRect().top < 0);
    };
    window.addEventListener("scroll", callback);
    return () => window.removeEventListener("scroll", callback);
  });
  return state;
}
```

This method is meant to be more versatile, hence it takes the direction of the scroll but, since I only need it for checking the top direction, I only implemented `ScrollDirection.Top`, leaving the system restricted by the *TypeScript* typing system.

Finally, to add a smooth transition for the *FAB*, I used *Headless UI*'s `Transition` again, making the button show from bellow.

That is it... for this post. This is going to be the last of the devlog posts about this blog, at least for a long while. If I feel I should document the development of a feature for this blog, I'll make a more focused post. For the next post, however, I'll be tackling something other than this site. Till then, have a good day... or night.
