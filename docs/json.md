# Json

JavaScript Object Notation (JSON) is a lightweight text-based open standard designed for human-readable data interchange. It is derived from the JavaScript scripting language for representing simple data structures and associative arrays, called objects.

A json formatted text string looks contains brackets, colons, and curly braces:

```
[{"contenttype":"BLOGPOST","count(*)":"2076"},{"contenttype":"COMMENT","count(*)":"2054"},{"contenttype":"MAIL","count(*)":"29448"},{"contenttype":"PAGE","count(*)":"33819"}]
```

## PHP

PHP 5.2 and higher includes the json_encode() and json_decode() functions built right in.

However when enabled in php and tested with "php -f scriptname.php":

```
echo json_encode($results);
```

this error was being thrown:

```
Fatal error: Call to undefined function json_encode()
```

Turns out the json extension needed to be enabled in php.ini

Vi php.ini here:

```
cd /export/ctools/etc/php5/
sudo vim php.ini
```

Then in the php.ini file, add the extension:

```
extension="json.so"
```

Restart the Apache server:

```
sudo /export/ctools/bin/apachectl stop
sudo /export/ctools/bin/apachectl start
```
