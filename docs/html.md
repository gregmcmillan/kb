# Html

## html5

See tutorial http://vimeo.com/6691519

Try this:

```
<! DOCTYPE html>
<html>
<body>
<svg width="200" height="200">
<rect
    x="0" y="0"
    width="100" height="100"
    fill="blue" stroke="red"
    stroke-width="5px"
    rx="8" ry="8"
    id="myRect" class="chart" />
</svg>   
</body>
</html>
```

## Click to call

HTML5 has a new attribute that supports clicking on phone numbers and auto-launching calls.

html5 compatibility issues with ancient browsers
Rounded corners. They won't show in IE. They will be boxed corners.
Using html5 is fine as long as I'm not losing any Functionality or Content from using html5. The users might get a slightly degraded visual experience but that's all.
Re video and audio. There are ways to make the code degrade into something that IE can read. HTML5 goes inside a video tag, whereas a flash object tag is underneath it in an embed tag. If the browser can't play html5's video tag, it will ignore that html5 tag move onto the html4 object tag.
CSS3 includes all of CSS2. There are some changes but nothing drastic.

## doctype

Use strict (not transitional / loose):

```
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
"http://www.w3.org/TR/html4/strict.dtd">
```

Strict is clean.... it forces you to THINK about how best to utilize CSS and what you can actually accomplish using CSS, instead of just doing things the sloppy-coder, old-style-easy way.

With strict, anything deprecated (condemned) or made obsolete is not allowed.
Strict mark-up is more solidly "future-proof" but it can require some un-learning and re-learning, especially because rendering instructions are now all moved to the stylesheet, no fudging allowed.
See http://www.w3.org/TR/html401/struct/global.html

## div

Defines a container for other tags. Much like the body tag, Div elements are block elements and work behind the scenes grouping other tags together. Use only the following attributes with your div element:

id
width
height
title
style
anything else should be reserved for CSS.

When HTML first began, web creators only had two choices. A table layout, or frames. The div element provides a 3rd alternative, since a div can contain any/every other type of html element within its beginning and ending tag. With the div tag, you can group large sections of HTML elements together and format them with CSS. For example, you could have your navigation section wrapped in one div and your main content section in another div.

http://www.tizag.com/htmlT/htmldiv.php

## img align

The align attribute is deprecated, but still supported in all major browsers.

The align attribute of `<img>` is deprecated, and is not supported in HTML 4.01 Strict / XHTML 1.0 Strict DTD. Use CSS instead. There is no such property as `align` in CSS. You are looking for the `float` property. If a browser does anything with an align property, then it's proprietary behavior that will not work across multiple browsers.

Given some img src= in html:

```
<img src="..." alt="..." />
```

Use CSS's "float" property to right align it:

```
img {
float: right;
}
```

More at http://www.w3schools.com/tags/att_img_align.asp

## Window pop up - a quick fix

```
<FORM><INPUT TYPE="button" VALUE="Get Started" onclick="window.open('http://www.linkedinfitness.com/')"></FORM>
```

## Comments

Multi line comment:

```
<!--
html here..
-->
```
