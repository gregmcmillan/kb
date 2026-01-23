# Apache 

## Setup

The document root on bsd1 is here:
```
/usr/local/www/apache24/data
```
To install version 2.4:
```
$ pkg install apache24
```
To run apache www server on startup, add this to /etc/rc.conf:
```
apache24_enable="yes"
```
Add ServerName to the httpd.conf configuration file:
```
vi /usr/local/etc/apache24/httpd.conf
```
then add this:
```
ServerName 192.168.1.49
```
Start up Apache the first time by running:
```
/usr/local/sbin/apachectl start
```
From a PC on the network, point a web browser at:
```
http://192.168.1.49
```
It works if you see the Apache Test Page.

## Installation

http://apache-server.com/tutorials/ATgetting-started.html#downloading

1. Get apache_1.3.31.tar.gz source code from www.apache.org and install it in a directory

	```
	/usr/local/apache-2
	```

2. Unzip and expand the file

	```
	gunzip apache_1.3.31.tar.gz
	tar xvf apache_1.3.31.tar
	```

3. Configure, make, then install

	```
	cd /usr/local/apache-2/apache_1.3.31
	./configure --prefix=/usr/local/apache
	make
	make install
	```

Note: Excellent documentation at /usr/local/apache-2/apache_1.3.31/README.configure

## Troubleshooting

### Problem

When visiting http://192.168.1.101/ in web browser, no page would display. Instead, getting connection refused.

httpd would not start:

```
$ /usr/local/sbin/apachectl start
/usr/local/sbin/apachectl start: httpd could not be started
```

and getting this error at:

```
cat /var/log/httpd-error.log

[Fri Jan 22 23:18:43 2016] [alert] mod_unique_id: unable to gethostbyname("bsd1")
[Sat Jan 23 17:28:33 2016] [alert] mod_unique_id: unable to gethostbyname("bsd1")
```

### Solution

```
vi /etc/hosts
```

then, add this line. Ensure the hostname "bsd1" resolves to 127.0.0.1:

```
127.0.0.1               localhost bsd1
```

Start apache again:

```
$ /usr/local/sbin/apachectl start
/usr/local/sbin/apachectl start: httpd started
```

This line appeared in /var/log/httpd-error.log:

```
[Sat Jan 23 21:59:25 2016] [notice] Apache/1.3.29 (Unix) configured -- resuming normal operations

$ /usr/local/sbin/apachectl configtest
Syntax OK
```

## Log rotation

Logs can grow very large. The larger the file size, the longer the read/write access time. Rotating the logs can improve system performance. For each of the files, move them to the current date. There's also a bug in Apache's graceful restart that leaves the other files dangling. That is, it doesn't release all the processes from the files.

The apache logs are in the `/export/content/apache2/logs`. There are several Log files in there. You need to restart (a real start and stop) apache for it to use the new log files.

```
sudo -s
cd /export/content/apache2/logs
for mm  in `ls -1 *_log`; do mv ${mm} ${mm}.`date +%Y%m%d`; touch ${mm}; chown webservd:webservd ${mm}; done
```

Verification check. Look at the file size, dates, and file users before and after the move:

```
ls -al
fuser *
```
Then restart Apache:

```
/export/ctools/bin/apachectl stop
/export/ctools/bin/apachectl start
```

After the restart, notice the changes.

Before:

```
-rw-r--r--   1 webservd webservd 23045670 Jan 31 14:44 iwww-test-ssl-access_log
-rw-r--r--   1 webservd webservd 21916229 Jul 19  2011 iwww-test-ssl-access_log.20110719
-rw-r--r--   1 webservd webservd  119680 Jan 31 14:37 iwww-test-ssl-error_log
```

After:

```
-rw-r--r--   1 webservd webservd   16956 Jan 31 15:37 iwww-test-ssl-access_log
-rw-r--r--   1 webservd webservd 21916229 Jul 19  2011 iwww-test-ssl-access_log.20110719
-rw-r--r--   1 webservd webservd 23100616 Jan 31 15:35 iwww-test-ssl-access_log.20120131
```






