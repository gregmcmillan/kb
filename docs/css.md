# css

CSS3 includes all of CSS2. There are some changes but nothing drastic.

tutorial at http://www.w3schools.com/css/default.asp

## layout

Do ALL page layout and styling with CSS: link coloring, font choices, background colors for active tabs, etc

Use div and float

http://www.yourhtmlsource.com/stylesheets/csslayout.html

align left and right on same line, http://css-tricks.com/left-align-and-right-align-text-on-the-same-line/

## Comments

```
/* This is a single-line comment */
 
/* This is a comment that
   spans multiple lines */
```

## Dreaded page shifting

Centered, fixed-width layout comes at a cost - PAGE SHIFING!


To fix it, force a vertical scrollbar on the site.

Add this to the .css:

```
html {overflow:scroll; min-height:100%; margin-bottom:1px;}
```

http://www.communitymx.com/content/article.cfm?cid=528a0

Padding vs Margin
top right bottom left

```
padding:25px 50px 75px 100px;
```

Margin is on the outside of block elements while padding is on the inside.
Use margin to separate the block from things outside it, padding to move the contents away from the edges of the block.
Remember that when you use padding, padding adds to the containers width/height.

## Nav bar list

The html:

```
<div class="nav">
<ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">Logout</a></li>
</ul>
</div>
```

The css:

```
.nav li {
    display:inline;
    padding:0;
    margin:0;
    }
```


http://www.456bereastreet.com/archive/200501/turning_a_list_into_a_navigation_bar/

## Floats

http://css.maxdesign.com.au/floatutorial/tutorial0407.htm

## Images

Placement
Putting an img in a div, then moving it around with css is okay. Just don't put things in tables. One exception. If something is considered tabular data (eg, a Calendar), then creating an HTML table is acceptable.

## Image swapping

Via CSS
Start with a containing block. Try putting bg images inside classes (not IDs), then reference those in the html.

Use hover.

Put all the images on the page. Put the navigation bar. Each one of the nav elements will correspond to an image. Can use a lil bit of JavaScript so every time I click on something. There can be a surrounding div with an ID that will change. In the CSS, if it's this ID then show this. If it's that ID, show that. So all that's needed it to change the ID. Very simple. Just keep all the IDs and classes the same

http://brassblogs.com/blog/css-image-swap

http://monkeyflash.com/tutorials/css-image-rollover-navbar/

http://www.quirksmode.org/css/background.html

```
.image {float:right; width:290px; height:375px; position:relative; top:20px; background-position:center top; background-repeat:no-repeat;}
```

```
#map.image {background-image:url('2027floor1.png')}
#cad.image {background-image:url('cadFinite.png')}
#layout.image {background-image:url('mvCampus.png')}
and here's the html:
<div class="image">
   <div id="map.image"></div>
   <p class="alignleft"> <a class="cad.image">CAD Diagram</a> </p>
   <p class="alignright"><a class="layout.image">Campus Layout</a> </p>
   </div>
6:21Stephanie Trimble came back
Stephanie Trimble
6:22
So… you don't need to do map.image for the id.
That should probably just be map
You want the map div to contain the images.
It's confusing that you're writing #map.image in the CSS (.) is to represent a class, while (#) represents an id.
So… you really don't want to do something like id="map.image" because it makes no sense in the CSS.  What the browser will think is that you mean to set that CSS for an element with the id of "map" and the class of "image".  Which isn't what you want in this case.
 
Greg McMillan
6:26
Ok thanks, will rework it some more. Yeah, I thought the (.) was maybe a shortcut to define a class inside an ID in one fell swoop. But nada
Does the "visibility" element come into play also with the image swaping/hiding?
{visibility:hidden;}
{visibility:visible;}
Stephanie Trimble
6:28
Actually, you'll want to do display:none and display:block instead of visibility:hidden and visibility:visible...
 
Greg McMillan
6:29
ok
Stephanie Trimble
6:29
The reason for this is… visibility leaves the space on the page that that element would take up.  display completely removes the space for the element.
 
Greg McMillan
6:29
nice - thanks for the great tip!
Stephanie Trimble
6:29
No problem.
 
Greg McMillan
6:30
Okay - back to the drawing board. Thanks again and have a good night. My son just got home.. time to play!
Stephanie Trimble
6:30
Here's a good CSS tutorial… http://www.html.net/tutorials/css/introduction.php
Ah, ok.  You too.  Have a good night.
then I tried this, http://www.planetoftunes.com/web_site/css/css_examples/control_image_visibility/control_image_visibility.htm#

Using JS to Hide and Show DIVs
JS:

function HideDIV(d) { document.getElementById(d).style.display = "none"; }
function DisplayDIV(d) { document.getElementById(d).style.display = "block"; }
HTML:

<div id="swap1" style="background-image:url('cadFinite.png')">
    </div>
 
<div id="swap2" style="background-image:url('finiteMapSwap2.png')">
    </div>
 
<div id="nav1">
    <p onmouseover="HideDIV('swap0');DisplayDIV('swap1')" onmouseout="HideDIV('swap1');DisplayDIV('swap0')" class="alignleft"> <a>CAD Diagram</a> </p>
    <p onmouseover="HideDIV('swap0');DisplayDIV('swap2')" onmouseout="HideDIV('swap2');DisplayDIV('swap0')" class="alignright"> <a>Campus Layout</a> </p>
    </div>
http://www.willmaster.com/library/features/mouseover_div_swap.php
```

## beacon

http://css3.bradshawenterprises.com/

Use CSS3:

Radial gradient. A box with rounded corners. Enough so that it looks like a circle.
The edges fade out to transparent. Blue for the center. RGBA but with an opacity of 0 (so it looks like it's fading out)
For the animation, change the hight and width of the box and the border radius. Apply WebKit key-frame animations. Can do it from the start of page or a MouseClick.
This would involve no JavaScripting
In the CSS, position the map image itself as relative. But position the box itself as absolute. Put this inside the div that is surrounding the image. This will ensure that the absolute positioning is relative to the outer box (not the page itself). Then do a top and left of wherever that is.

The CSS3:

```
@-webkit-keyframes glow {
    0% {padding: 0;}
    50% {padding: 20px; background-color:rgba(254,115,40,0.2); -webkit-border-radius:25px; top:280px; left:50px;}
    100% {padding: 100px; background-color:rgba(254,115,40,0.7); -webkit-border-radius:99px; top:200px; left:-20px;}
    }
     
#beacon {background-color:#fe7328; background-color:rgba(254,115,40,0.7); width:10px; height:10px; top:300px; left:80px; position:absolute;
    -webkit-animation-name: glow;
    -webkit-animation-duration: 1s;
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-direction: alternate;
    -webkit-animation-timing-function: ease-in-out;
    border-radius:4px;
    -webkit-border-radius:4px;
    -moz-border-radius:4px;
    z-index:10;}
```

The webkit-animation-name and webkit-keyframes must both be set to glow
The beacon is referenced inside a containing DIV ID named swap0 that has position:relative
The actual beacon ID itself has position:absolute
Add rounded corners using -webkit-border-radius:4px
Change the keyframe animation settings to create a circle: padding, webkit-border-radius
The keyframes percentage settings refer to the animation-duration that is set to 1 second (1s). At 50% (.5 seconds), the keyframe is giving a 20px padding at said values.
To position the beacon, use the keyframe's top:px and left:px settings.
The HTML:

```
<div id="swap0">
    <div id="beacon"></div>
    </div>
```

## DIV IDs vs Classes

DIV – A unique ID found only once in an html file:
In html:
```
<div id="box1">
```

In CSS:

```
#box1
```

Class – A variable that is used multiple times in an html file:
In html:

```
<div class="bold">
```

In CSS:

```
.bold
```

A DIV takes priority over a Class.

http://css-tricks.com/the-difference-between-id-and-class/ http://creativebits.org/webdev/div_id_vs_div_class

## Sprites

Most of ITDev's stuff will be form submissions. So, put the sprite's class in the "input" of the form.

Two examples from linkedin.com

A form submission sprite
The html:

```
<input type="submit" class="search-go" value="Search" name="search">
```

The CSS:

```
.search-go {
    background: url("http://static01.linkedin.com/scds/common/u/img/sprite/sprite_global_v6.png") no-repeat scroll -9px -1170px #0076A8;
    border: 1px solid #06598B;
    border-radius: 3px 3px 3px 3px;
    color: #0076A8;
    cursor: pointer;
    height: 22px;
    text-indent: -1234px;
    width: 20px;
}
```

An "a" link href sprite
The HTML:

```
<a class="btn-primary" href="https://www.linkedin.com/secure/importAndInvite?trk=nmp_profile_network_stats_add_connections">Add Connections</a>
```

The CSS:

```
a.btn-primary, a.btn-new-primary, a.btn-secondary, a.btn-new-secondary, a.btn-tertiary, a.btn-ternary, a.btn-quaternary, a.btn-action {
    display: inline-block !important;
}
 
.btn-primary, .btn-menu-open.btn-primary, .btn-split.btn-primary:hover
 
.btn-split.btn-primary:hover {
    background: -moz-linear-gradient(center top , #73AEC9 0pt, #73AEC9 1px, #338AB0 1px, #0571A6 100%) repeat scroll 0 0 transparent;
    border-color: #045A8B;
    color: #FFFFFF !important;
}
 
.btn-primary, .btn-new-primary, .btn-secondary, .btn-new-secondary, .btn-tertiary, .btn-ternary, .btn-quaternary, .btn-action {
    border-radius: 3px 3px 3px 3px;
    border-style: solid;
    border-width: 1px;
    cursor: pointer;
    font-size: 12px;
    line-height: 1.35;
    margin: 0;
    overflow: visible;
    padding: 3px 10px 2px;
    text-decoration: none !important;
    vertical-align: top;
    width: auto;
}
```

