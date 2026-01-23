# Javascript

## Introduction

Use JavaScript (JS) for all dynamic actions: show/hide, open/close, move, etc.

Most browsers support JavaScript just fine. But some handle it differently for different things. This was the motivation behind folks creating JavaScript libraries, such as jQuery and prototype. A library enables us to write one js code and have it handled the same way on all browsers, because the library code running in the background handles the js for me. This is becoming less of a problem, but IE still has its issues... IE continues to do things in a way that no one wants it done.

JS can do cool things: http://www.webdesign.org/web-programming/javascript/introduction-to-javascript-for-newbies.17007.html

## DOM

Almost everything you do with JavaScript involves working with the Document Object Model (DOM) — a standardized set of objects that represent a web document.

The DOM includes objects that enable you to work with all aspects of the current document. For example, you can read the value the user types in a form field, or the filename of the current page. The DOM is defined by the W3C (World Wide Web Consortium) and the latest browsers support DOM levels 1 and 2, which enable you to control all parts of a webpage with JavaScript.

## If, else, true, false

Use these for page actions.

and there are times when "== True" or "== False" should be used.

Example:

```
<script type="text/javascript">
AJS.$(document).ready(function() {
  
// Video Conferencing Show/Hide Check
  
if(AJS.$('#customfield_11498-5').attr('checked')) {
  AJS.$('#customfield_11928').parent().show();
} else {
  AJS.$('#customfield_11928').parent().hide();
}
  
AJS.$('#customfield_11498-5').click(function(){
  AJS.$('#customfield_11928').parent().toggle();
});
  
  
// WebEx Show/Hide Check
  
if(AJS.$('#customfield_11498-8').attr('checked')) {
  AJS.$('#customfield_11931').parent().show();
} else {
  AJS.$('#customfield_11931').parent().hide();
}
  
AJS.$('#customfield_11498-8').click(function(){
  AJS.$('#customfield_11931').parent().toggle();
});
  
  
// Other Requirements Show/Hide Check
  
if(AJS.$('#customfield_11498-9').attr('checked')) {
  AJS.$('#customfield_11930').parent().show();
} else {
  AJS.$('#customfield_11930').parent().hide();
}
  
AJS.$('#customfield_11498-9').click(function(){
  AJS.$('#customfield_11930').parent().toggle();
});
  
});
   
</script>
```

For more on .attr('checked'), see http://jquerybyexample.blogspot.com/2012/03/check-if-checkbox-is-checked-using.html

## On change, escaping an id of :1 then option select

In Jira, the second Cascading Select drop-down references the ID as ":1". To get on change to work based on this ID, we had to escape the :1 by using "
:1" and then select it by using "option:selected").text()". See http://stackoverflow.com/questions/1643227/jquery-get-selected-text-from-dropdownlist

Why use ".text". If we inspect the elements using Firebug, we see that the value is blank, or -1, or some other number. Whereas the text itself is more human readable (eg, Mobile phone). That's why we use ".text" in the js.

Example:

```
AJS.$("#customfield_12293\\:1").change(function() {
  var e = AJS.$("#customfield_12293\\:1");
  var val = AJS.$("#customfield_12293\\:1 option:selected").text();
  if(val == "Mobile phone") {
  
     AJS.$("#customfield_11594").parent().show();
     AJS.$("#customfield_11933").parent().show();
  
     AJS.$("#cf-customfield_11939").parent().hide();
     AJS.$("#customfield_11939-1").parent().hide();
  
  }
  
});
</script>
```

## js Debug logging

Use console.log statements to debug javascript. They can be placed at different places in the script.

1. Enter the console.log in different places of the js.

```
console.log("before fetching element");
console.log("after fetching element");
console.log("before if statement");
```

2. Go to Fire Bug > Console and check the messages:

Example:

```
<script type="text/javascript">
  
AJS.$("#customfield_12293\\:1").change(function() {
  console.log("before fetching element");
  var e = AJS.$("#customfield_12293\\:1");
console.log("after fetching element");
  //var val = e.options[e.selectedIndex].text;
  var val = AJS.$("#customfield_12293\\:1 option:selected").text();
console.log("before if statement");
  if(val == "Mobile phone") {
 
     AJS.$("#customfield_11594").parent().show();
     AJS.$("#customfield_11933").parent().show();
     AJS.$("span:contains('Model Type')").parent().parent().show();
     AJS.$("#customfield_11938-1").parent().show();
     AJS.$("#customfield_11938-2").parent().show();
     AJS.$("#customfield_11938-3").parent().show();
     AJS.$("#customfield_11934").parent().show();
     AJS.$("#customfield_11597").parent().show();
     AJS.$("#customfield_11598").parent().show();
     AJS.$("#customfield_11606").parent().show();
     AJS.$("#customfield_11935").parent().show();
 
     AJS.$("#cf-customfield_11939").parent().hide();
     AJS.$("#customfield_11939-1").parent().hide();
     AJS.$("#customfield_11939-2").parent().hide();
     AJS.$("span:contains('Platform')").parent().parent().hide();
     AJS.$("#customfield_11595").parent().hide();
     AJS.$("#customfield_11936").parent().hide();
     AJS.$("#cf-customfield_11938").parent().hide();
 
  }
 
});
 
</script>
```

## Resources
Per webdev Florence Davis:

Eloquent JavaScript, http://eloquentjavascript.net/
JavaScript Patterns, http://www.amazon.com/JavaScript-Patterns-Stoyan-Stefanov/dp/0596806752
Dan Cederholm (Best Practices Guru), http://simplebits.com/,
Per some JS developers at LinkedIn:

https://developer.mozilla.org/en-US/learn/javascript

http://ajaxian.com/

Function Basics
Remember:

Code which is placed within a function will only run when that function is called.
Code which is not placed within a function will run as soon as it is found by the browser, i.e. as the page loads.
http://www.mediacollege.com/internet/javascript/tutorial/function.html


## jQuery

http://jqueryui.com/ http://jquery.com/

Newbie video tutorials:

http://www.impressivewebs.com/jquery-tutorial-for-beginners/
http://blog.themeforest.net/tutorials/jquery-for-absolute-beginners-video-series/
Minimum

```
<script type="text/javascript" >
 
$(document).ready(function() {
//code here
 
});
</script>
```

Tabs
http://www.ilovecolors.com.ar/jquery-tabs/

New Image on Mouseover
http://roshanbh.com.np/2008/03/image-hover-effect-jquery.html

pop-ups
http://creativeindividual.co.uk/2011/02/create-a-pop-up-div-in-jquery/

http://www.shanestrong.com/featured/jquery-popup

http://yensdesign.com/2008/09/how-to-create-a-stunning-and-smooth-popup-using-jquery/

Browser Detection
http://www.javascriptkit.com/javatutors/navigator.shtml

getElementById(d)
http://www.developertutorials.com/learn-javascript/javascript-getelementbyid-2604.php

Panoramic views
can be done in JS (no flash, no qt), as Apple did it - http://www.apple.com/iphone/gallery/

For the iphone gallery, lots of js was used plus libraries. And a whole lot of images were used to create a seamless and smooth experience!

see:

http://www.gayadesign.com/diy/panoramic-photoviewer-in-javascript/ http://www.gayadesign.com/scripts/photonav/ http://help.adobe.com/en_US/photoshop/cs/using/WSfd1234e1c4b69f30ea53e41001031ab64-75e8a.html

Alternative technologies:

Quick Time Video (QTVR), http://en.wikipedia.org/wiki/QuickTime_VR
Flash
json
JavaScript Object Notation (JSON) is a lightweight data-interchange format. Used by large sites, such as apple.com, for AJAX kind of stuff.

Do this for DynaMaps:

Create a json file that contains:

all the names of the conference rooms
a link to the associated page
When someone searches on a word, have JavaScript take care of it instead of it actually submitting
Have it get the json file (or put it in my JS if that is easier)
Have the JS look for the key (the conference room name)
Set the link to the value and it will go to that page
However... this means no typos are allowed in search. The user must spell it correctly, which most people will do anyways.

I'll need to account for mistakes by my users, such as displaying an error message "Room not found. Spelling mistake?"

TypeAhead. YUI has it, but Stephanie hasn't tested it yet. This is an advanced topic. Every time there's a key stroke, it goes to the JS and looks for something.

Resources:

Douglas Crockford created json
http://www.crockford.com/
http://javascript.crockford.com/
Rollover Buttons
Much more complicated that it sounds. See http://www.elated.com/articles/rollover-buttons-with-javascript/

Put this in head:

```
<script type="text/javascript">
 
eg_on = new Image ( );
eg_off = new Image ( );
 
eg_on.src = "art/eg_on.png";
eg_off.src = "art/eg_off.png";
 
function button_on ( imgId )
{
  if ( document.images )
  {
    butOn = eval ( imgId + "_on.src" );
    document.getElementById(imgId).src = butOn;
  }
}
 
function button_off ( imgId )
{
  if ( document.images )
  {
    butOff = eval ( imgId + "_off.src" );
    document.getElementById(imgId).src = butOff;
  }
}
 
</script>
<a href="javascript: void(0)"
onclick="window.open('http://www.linkedinfitness.com/','windowname1');"
onmouseout="button_off('eg'); return true"
onmouseover="button_on('eg'); return true">
<img src="art/eg_off.png" align="right" style="width: 107px; height: 24px; border: none;" alt="Button" id="eg"/>
</a>
```

## New window open
To open a new window on mouse click:

```
href="javascript: void(0)"
onclick="window.open('http://www.linkedinfitness.com/','windowname1');"
```

## js in external files
http://www.webreference.com/programming/javascript/external/

Set this script line in the HTML head:

```
<script type="text/javascript" src="file.js"></script>
```

## Progress bar
http://t.wits.sg/jquery-progress-bar/

HTML. The javascript in "script.js" is dumping data into the ids progress1, progress2, and progress3:

```
<input type="button" onclick="doSomething();" id="foo" value="Update Metrics Now Pbar" />
 
<div class="example">
        <div id="progress1">
            <div class="percent"></div>
            <div class="pbar"></div>
            <div class="elapsed"></div>
        </div>
 
        <hr />
        <div id="progress2">
            <div class="percent"></div>
            <div class="pbar"></div>
            <div class="elapsed"></div>
        </div>
 
        <hr />
        <div id="progress3">
            <div class="percent"></div>
            <div class="pbar"></div>
            <div class="elapsed"></div>
        </div>
    </div>
```

Jquery hides the "example" div class on page load. When "id-foo" is clicked, show the example class:

```
<script type="text/javascript">
 
 
$(document).ready(function(){
        $('.example').hide();
 
        $('#foo').click(function() {
                $('.example').show();
        });
});
</script>
```

Reference these js and css file in the html header:

```
<html>
<head>
<link href="cssprogressbar/jquery-ui-1.8.16.custom.css" rel="stylesheet" type="text/css"/>
<link href="cssprogressbar/main.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="jsprogressbar/jquery-1.6.2.min.js"></script>
<script type="text/javascript" src="jsprogressbar/jquery-ui-1.8.16.custom.min.js"></script>
<script type="text/javascript" src="jsprogressbar/script.js"></script>
</head>
</html>
```

script.js is the primary jQuery control script.

## Safari jQuery page refresh issues

Many people have found that Safari has issues with jQuery's .load function being used to refresh pages. Certain assets, such as js files, do not get loaded properly.

http://www.quackit.com/javascript/javascript_refresh_page.cfm

In my case, Safari did not load the js (a highcharts instance) that was sent to a specific div (#container), when that div id was reloaded in the page (maincontent.php):

```
function reloadpage(){
        $('#container').load("maincontent.php");
}
```

The workaround was to not use jquery. Instead just code it in raw javascript like this:

```
function reloadpage(){
        setTimeout("location.reload(true);");
}
```

## Learning
Watch JS bootcamp, 

https://esv4-videocenter-vm1.linkedin.biz/search/?q=JS+101&x=-1190&y=-15

 and all the online references (go/js2012)

https://linkedin.atlassian.net/wiki/display/ENGS/2012+JS+Bootcamp

