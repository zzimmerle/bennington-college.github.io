---
layout: page
title: Markdown Guide
permalink: /markdown/
---

## This is a heading (h2)

### This is a subheading (h3)

For an explicit line break (a `<br>` tag), end a line with two  
spaces!

You can add *emphasis* to text by _surrounding_ the text with either asterisks or underscores.  
You can add **strong emphasis** by __doubling__ the asterisks or underscores.

A blockquote:

> Should you think it breathed --- and had you the leisure to tell me, I should feel quick gratitude ---  
> If I make the mistake --- that you dared to tell me --- would give me sincerer honor --- toward you ---  

Make a link by putting the text in square brackets, followed by the url in parentheses:

> For a complete markdown reference, see [here](http://kramdown.gettalong.org/syntax.html#link-definitions).

To render an image, put an exclamation mark in front of a link to the image file (the link text becomes metadata for search engines and screen readers).

![Apples and Oranges (Cezanne)](/assets/image.jpg)

A code block:

```js
if ( honor.pawn() === honor ) {
	console.log(Object.getOwnPropertyNames(honor.prototype));
}
```

A list:

- Forgotten ideas
- Commentaries
- Dialogues


{% comment %}
Include an include:
{% include my-themes-great-include.html %}
{% endcomment %}


