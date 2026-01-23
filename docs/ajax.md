# Ajax

Used to update just a specific portion(s) of a page, inside specific div IDs.

onClick of button run php script

```
<script>
function doSomething(){
    $.get("getall.php");
    return false;
}
 
 
</script>
 
<input type="button" onclick="doSomething(); timeout_init();"value="Update Metrics Now" />
```

After php finishes, add alert message to appear:

```
<script>
function doSomething(){
    $.get("getall.php", function(){alert("Metrics Loaded");})
    return false;
}
```

Loading content with jQuery AJAX - using a loading image
http://www.electrictoolbox.com/load-content-jquery-ajax-loading-image/

Using setTimeout() with Javascript
http://www.electrictoolbox.com/using-settimeout-javascript/

Resources
http://www.liferay.com/community/wiki/-/wiki/Main/Ajax+Toolkit

free Ajax loading animated gifs, http://www.ajaxload.info/