# PHP

Use PreProcessingHtml (PHP) only when data needs to be stored in a database.

## Basic php website setup

There are 3 php files:

* header.php
* maincontent.php
* footer.php

Example at http://playpen-gm.corp.linkedin.com/php/maincontent.php

See also "When Laziness is a Virtue" at http://devzone.zend.com/node/view/id/636

## Dev environment
Madhu's php editor is ZendStudio (not free) and it runs on the server:

http://www.zend.com/en/products/studio/

She uses the Zend Framework http://framework.zend.com/manual/en/zend.controller.html

In the Zend framework, data goes into these 3 buckets:

* Model
* Controller
* View

Database and tables:

Admin interface
User interface

Zend has many libraries available. For example, use "ZenDB" for the database connections.

## Eclipse

1. Install Classic from http://www.eclipse.org/
2. Download PHP and Web plugins via Help > Install New Software > http://download.eclipse.org/releases/indigo/
3. Install Zend Debugger from http://www.zend.com/en/community/pdt

Follow this http://stackoverflow.com/questions/2451671/how-to-install-eclipse-php-development-tools-pdt-debugger-on-mac-in-the-yea

Installed Version: 5.2.6

Issue the "php -v" command:

```
$ php -v
PHP Warning:  Module 'ctype' already loaded in Unknown on line 0
PHP Warning:  Module 'dom' already loaded in Unknown on line 0
PHP 5.2.6 (cli) (built: Nov 18 2008 17:44:59)
Copyright (c) 1997-2008 The PHP Group
Zend Engine v2.2.0, Copyright (c) 1998-2008 Zend Technologies
    with Zend Extension Manager v1.2.2, Copyright (c) 2003-2007, by Zend Technologies
    with Zend Optimizer v3.3.3, Copyright (c) 1998-2007, by Zend Technologies
or view this file via a browser:

vi ver.php
<?php phpinfo(); ?>
http://playpen-gm.corp.linkedin.com/ver.php

```

## phpinfo()

Display startup configuration information, including the path to php.ini:

```
<?php
 
phpinfo()
 
?>
```

## Extensions

Many extensions (eg, json) are built into PHP, but are not enabled until they are explicitly referenced in the php.ini file.

the php.ini file lives here:

```
/export/ctools/etc/php5/php.ini
```

and this line sets the extension directory to here:

```
extension_dir=/export/ctools/lib/php5/extensions/no-debug-non-zts-20060613
```

Extensions are defined like this:

```
extension="mysql.so"
extension="mysqli.so"
extension="apc.so"
extension="ldap.so"
extension="curl.so"
extension="json.so"
```

The list of available extensions are here:

```
cd /export/ctools/lib/php5/extensions/no-debug-non-zts-20060613
ls -al
```
Make changes then restart Apache

## PHP CLI

Use `php -f <filename>` to test a script from the command line:

```
php -f test.php
```

## Notes from ShopIn handoff

```
mysql -u root;
use ShopIn
show tables;
```

sftp to upload

View contains the html/css/js files

config.php > what used for?

core files vs view files

passing information between views and conrollers

roles (manager, user, admin)

view templates

what is a .tpl file. A template?

https. Make the whole site https (not just the login page)

Display mysql column headings
http://www.plus2net.com/sql_tutorial/mysql_field_name.php

http://www.phpsuperblog.com/php/display-all-field-column-names-of-a-table-in-mysql-database/

## DB connection

```
<?php
// set database server access variables
$host = "localhost";
$user = "mcmillan";
$pass = "guessm3";
$db = "mcmillan";
 
// open connection
$connection = mysql_connect($host, $user, $pass) or die ("Unable to connect!");
 
// select database
mysql_select_db($db) or die ("Unable to select database!");
 
?>
```

Logins
http://www.phpeasystep.com/phptu/6.html

## Disable Apache APC caching for PHP files

When enabled, Alternative PHP Cache (APC) caches php files. This blocks changes to files from being displayed in web browsers.

apc.enabled can be set to 0 to disable APC. This is primarily useful when APC is statically compiled into PHP, since there is no other way to disable it (when compiled as a DSO, the extension line in php.ini can just be commented-out).

To disable APC:

```
cd /export/ctools/etc/php5/
sudo vim php.ini
```

Then in the php.ini file, change "apc.enabled=1" to a "apc.enabled=0":

```
apc.enabled=0
```

Restart the Apache server:

```
sudo /export/ctools/bin/apachectl stop
sudo /export/ctools/bin/apachectl start
```

## Comment block

```
/*
This is
a comment
block
*/
?>
```

## php.ini

find its location:

```
find / -name php.ini
vi /usr/local/etc/php.ini
```

## error logs

```
vi /usr/local/etc/php.ini
```

then search for "error_log" for the location

see http://digwp.com/2009/07/monitor-php-errors-wordpress/

