# REST

## Terms and definitions

Representational State Transfer (REST) is an architecture style for designing networked applications. The idea is that, rather than using complex mechanisms, such as RPC or SOAP to connect between machines, simple HTTP is used to make calls between machines. REST relies on a stateless, client-server, cacheable communications protocol. In virtually all cases, the HTTP protocol is used.

REST uses HTTP for all four Create/Read/Update/Delete (CRUD) operations.

REST identifies six data elements: 

* Resource
* Resource identifier
* Resource metadata
* Representation
* Representation metadata
* Control data

More terms:

* Uniform interface – Clients use the Hypertext Transfer Protocol (HTTP) to submit requests to resources and get responses. Several methods, such as GET and PUT, are part of HTTP’s uniform interface. HTTP is a protocol between clients and resources. In this protocol, except when you define new methods to extend HTTP, the list of methods and their semantics is fixed.

* Uniform Resource Identifier (URI) – an identifier of a resource. Another commonly used name for this is a Uniform Resource Locator (URL).

* Uniform Resource Name (URN) – Resources form the nucleus of any REST API design. For example, “customers” is a collection resource and “customer” is a singleton resource. We can identify “customers” collection resource using the URN “/customers”. A URN looks something like a URL. For example, here's a hypothetical URN: urn:def://customer

* Resource – Anything that can be identified by a URI. The URI typed by the user is the address of a resource that corresponds to a web page. In a typical static website, every web page is a resource. The part of the server that updates the user’s status is another resource.

* Representation – The HTML document that the server returns to the client is a representation of the resource. A representation is an encapsulation of the information (state, data, or markup) of the resource, encoded using a format such as XML, JSON, or HTML.
REST is not a "standard". There will never be a W3C recommendation for REST, for example. And while there are REST programming frameworks, working with REST is so simple that you can often "roll your own" with standard library features in languages like Perl, Java, or C#.

A REST service is:
* Platform-independent (you don't care if the server is Unix, the client is a Mac, or anything else),
* Language-independent (C# can talk to Java, etc.),
* Standards-based (runs on top of HTTP), and
* Can easily be used in the presence of firewalls.

REST is based on resources, a limited but diverse set of operations, and a well- defined document format. 

data formats — how the API handles the interaction between data generation and data request. E.g., JSON, XML, YAML, 

REST is a term that was coined by Roy Fielding in his doctoral dissertation (see http://www.ics.uci.edu/~fielding/pubs/dissertation/top.htm). See also http://en.wikipedia.org/wiki/Roy_Fielding, his personal website at http://roy.gbiv.com/, and LinkedIn profile at www.linkedin.com/in/royfielding.

## LinkedIn REST calls

Follow this https://developer.linkedin.com/documents/quick-start-guide#toggleview:id=python

Create a script:

```
#!/usr/bin/python
import oauth2 as oauth
import httplib2
import time, os, simplejson
  
# Fill the keys and secrets you retrieved after registering your app
consumer_key      =   '75xa6oiszuh4jt'
consumer_secret  =   'lH6Dp2NrYwRZQ60E'
user_token           =   'bccad401-4bb4-47d7-8c0c-68c436996048'
user_secret          =   '360eb870-9fb0-4519-b13c-0eeaae3f949f'
  
# Use your API key and secret to instantiate consumer object
consumer = oauth.Consumer(consumer_key, consumer_secret)
  
# Use the consumer object to initialize the client object
client = oauth.Client(consumer)
  
# Use your developer token and secret to instantiate access token object
access_token = oauth.Token(
            key=user_token,
            secret=user_secret)
  
client = oauth.Client(consumer, access_token)
  
# Make call to LinkedIn to retrieve your own profile
# resp,content = client.request("http://api.linkedin.com/v1/people/~", "GET", "")
# By default, the LinkedIn API responses are in XML format. If you prefer JSON, simply specify the format in your call
resp,content = client.request("http://api.linkedin.com/v1/people/~?format=json", "GET", "")
print resp,content
```

Run it:

```
$ ./apicall.py
{'status': '200', 'content-length': '251', 'content-location': u'http://api.linkedin.com/v1/people/~?oauth_body_hash=2jmj7l5rSw0yVb%2FvlWAYkK%2FYBwk%3D&amp;oauth_nonce=31740385&amp;oauth_timestamp=1400281114&amp;oauth_consumer_key=75xa6oiszuh4jt&amp;format=json&amp;oauth_signature_method=HMAC-SHA1&amp;oauth_version=1.0&amp;oauth_token=bccad401-4bb4-47d7-8c0c-68c436996048&amp;oauth_signature=XVtZyhAbyCRkPgE2wALgKrNzy30%3D', 'x-li-pop': 'PROD-ELA4', 'transfer-encoding': 'chunked', 'set-cookie': 'lidc="b=LB02:g=53:u=66:i=1400280226:t=1400364634:s=3682054480"; Expires=Sat, 17 May 2014 22:10:34 GMT; domain=.linkedin.com; Path=/', 'vary': '*', 'x-li-uuid': 'XQ2tiYjBgGryUnDfSZh0Fg==', 'server': 'Apache-Coyote/1.1', 'x-li-fabric': 'PROD-ELA4', 'connection': 'keep-alive', '-content-encoding': 'gzip', 'date': 'Fri, 16 May 2014 22:58:34 GMT', 'x-li-request-id': 'Q0P4XDKUEY', 'x-li-format': 'json', 'content-type': 'application/json;charset=UTF-8'} {
  "firstName": "Greg",
  "headline": "Staff Technical Writer at LinkedIn",
  "lastName": "McMillan",
  "siteStandardProfileRequest": {"url": "http://www.linkedin.com/profile/view?id=4721002&amp;authType=name&amp;authToken=e9fN&amp;trk=api*a3792451*s3862291*"}
}
```

Get my LinkedIn ID:

```
resp,content = client.request("http://api.linkedin.com/v1/people/~:(id)?format=json", "GET", "")
```

Get my profile using that ID:

```
resp,content = client.request("http://api.linkedin.com/v1/people/id=8vT1pihw8x?format=json", "GET", "")
```

Get all my ID's connections:

```
resp,content = client.request("http://api.linkedin.com/v1/people/id=8vT1pihw8x:(connections)?format=json", "GET", "")
```

Get my group membership full details list:

```
resp,content = client.request("http://api.linkedin.com/v1/people/~/group-memberships: (group:(id,name),membership-state,show-group-logo-in-profile,allow-messages-from-members,email-digest-frequency,email-announcements-from-managers,email-for-every-new-post)", "GET", "")
```

## Python Interpreter
Import modules, set script, retrieve my own LinkedIn profile using the Profile API, print the response:

```
gmcmilla-mn:restli gmcmilla$ python
Python 2.7.2 (default, Oct 11 2012, 20:14:37)
[GCC 4.2.1 Compatible Apple Clang 4.0 (tags/Apple/clang-418.0.60)] on darwin
Type "help", "copyright", "credits" or "license" for more information.
>>> import sys; print('\n'.join(sys.path))
/System/Library/Frameworks/Python.framework/Versions/2.7/lib/python27.zip
/System/Library/Frameworks/Python.framework/Versions/2.7/lib/python2.7
/System/Library/Frameworks/Python.framework/Versions/2.7/lib/python2.7/plat-darwin
/System/Library/Frameworks/Python.framework/Versions/2.7/lib/python2.7/plat-mac
/System/Library/Frameworks/Python.framework/Versions/2.7/lib/python2.7/plat-mac/lib-scriptpackages
/System/Library/Frameworks/Python.framework/Versions/2.7/Extras/lib/python
/System/Library/Frameworks/Python.framework/Versions/2.7/lib/python2.7/lib-tk
/System/Library/Frameworks/Python.framework/Versions/2.7/lib/python2.7/lib-old
/System/Library/Frameworks/Python.framework/Versions/2.7/lib/python2.7/lib-dynload
/System/Library/Frameworks/Python.framework/Versions/2.7/Extras/lib/python/PyObjC
/Library/Python/2.7/site-packages
>>> import sys; sys.path.append('/Library/Python/2.6/site-packages')
>>> import sys; print('\n'.join(sys.path))
/System/Library/Frameworks/Python.framework/Versions/2.7/lib/python27.zip
/System/Library/Frameworks/Python.framework/Versions/2.7/lib/python2.7
/System/Library/Frameworks/Python.framework/Versions/2.7/lib/python2.7/plat-darwin
/System/Library/Frameworks/Python.framework/Versions/2.7/lib/python2.7/plat-mac
/System/Library/Frameworks/Python.framework/Versions/2.7/lib/python2.7/plat-mac/lib-scriptpackages
/System/Library/Frameworks/Python.framework/Versions/2.7/Extras/lib/python
/System/Library/Frameworks/Python.framework/Versions/2.7/lib/python2.7/lib-tk
/System/Library/Frameworks/Python.framework/Versions/2.7/lib/python2.7/lib-old
/System/Library/Frameworks/Python.framework/Versions/2.7/lib/python2.7/lib-dynload
/System/Library/Frameworks/Python.framework/Versions/2.7/Extras/lib/python/PyObjC
/Library/Python/2.7/site-packages
/Library/Python/2.6/site-packages
>>>
>>>
>>> import oauth2 as oauth
>>> import httplib2
>>> import time, os, simplejson
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
ImportError: No module named simplejson
>>> 
... # Fill the keys and secrets you retrieved after registering your app
... consumer_key      =   '75xa6oiszuh4jt'
>>> consumer_secret  =   'lH6Dp2NrYwRZQ60E'
>>> user_token           =   'bccad401-4bb4-47d7-8c0c-68c436996048'
>>> user_secret          =   '360eb870-9fb0-4519-b13c-0eeaae3f949f'
>>> 
... # Use your API key and secret to instantiate consumer object
... consumer = oauth.Consumer(consumer_key, consumer_secret)
>>> 
... # Use the consumer object to initialize the client object
... client = oauth.Client(consumer)
>>> 
... # Use your developer token and secret to instantiate access token object
... access_token = oauth.Token(
...             key=user_token,
...             secret=user_secret)
>>> 
... client = oauth.Client(consumer, access_token)
>>> 
... # Make call to LinkedIn to retrieve your own profile
... import sys; sys.path.append('/usr/local/linkedin/lib/python2.6/site-packages')
>>> import sys; print('\n'.join(sys.path))
/System/Library/Frameworks/Python.framework/Versions/2.7/lib/python27.zip
/System/Library/Frameworks/Python.framework/Versions/2.7/lib/python2.7
/System/Library/Frameworks/Python.framework/Versions/2.7/lib/python2.7/plat-darwin
/System/Library/Frameworks/Python.framework/Versions/2.7/lib/python2.7/plat-mac
/System/Library/Frameworks/Python.framework/Versions/2.7/lib/python2.7/plat-mac/lib-scriptpackages
/System/Library/Frameworks/Python.framework/Versions/2.7/Extras/lib/python
/System/Library/Frameworks/Python.framework/Versions/2.7/lib/python2.7/lib-tk
/System/Library/Frameworks/Python.framework/Versions/2.7/lib/python2.7/lib-old
/System/Library/Frameworks/Python.framework/Versions/2.7/lib/python2.7/lib-dynload
/System/Library/Frameworks/Python.framework/Versions/2.7/Extras/lib/python/PyObjC
/Library/Python/2.7/site-packages
/Library/Python/2.6/site-packages
/usr/local/linkedin/lib/python2.6/site-packages
>>> import time, os, simplejson
>>> resp,content = client.request("http://api.linkedin.com/v1/people/~", "GET", "")
>>> print resp,content
{'status': '200', 'content-length': '399', 'content-location': u'http://api.linkedin.com/v1/people/~?oauth_body_hash=2jmj7l5rSw0yVb%2FvlWAYkK%2FYBwk%3D&amp;oauth_nonce=15296225&amp;oauth_timestamp=1400278233&amp;oauth_consumer_key=75xa6oiszuh4jt&amp;oauth_signature_method=HMAC-SHA1&amp;oauth_version=1.0&amp;oauth_token=bccad401-4bb4-47d7-8c0c-68c436996048&amp;oauth_signature=GAJbDMI3zbD9qNfMEmYin6qGZR4%3D', 'x-li-pop': 'PROD-ELA4', 'transfer-encoding': 'chunked', 'set-cookie': 'lidc="b=LB02:g=53:u=66:i=1400278234:t=1400364634:s=664249250"; Expires=Sat, 17 May 2014 22:10:34 GMT; domain=.linkedin.com; Path=/', 'vary': '*', 'x-li-uuid': 'RDbmq1ck7C0nFHjWjmfOXw==', 'server': 'Apache-Coyote/1.1', 'x-li-fabric': 'PROD-ELA4', 'connection': 'keep-alive', '-content-encoding': 'gzip', 'date': 'Fri, 16 May 2014 22:10:33 GMT', 'x-li-request-id': 'OSDJWVDRVE', 'x-li-format': 'xml', 'content-type': 'text/xml;charset=UTF-8'} <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<person>
  <first-name>Greg</first-name>
  <last-name>McMillan</last-name>
  <headline>Staff Technical Writer at LinkedIn</headline>
  <site-standard-profile-request>
    <url>http://www.linkedin.com/profile/view?id=4721002&amp;authType=name&amp;authToken=e9fN&amp;trk=api*a3792451*s3862291*</url>
  </site-standard-profile-request>
</person>
```

Now get my profile in JSON format:

```
>>> resp,content = client.request("http://api.linkedin.com/v1/people/~?format=json", "GET", "")
>>> print resp,content
{'status': '200', 'content-length': '251', 'content-location': u'http://api.linkedin.com/v1/people/~?oauth_body_hash=2jmj7l5rSw0yVb%2FvlWAYkK%2FYBwk%3D&amp;oauth_nonce=14378307&amp;oauth_timestamp=1400279364&amp;oauth_consumer_key=75xa6oiszuh4jt&amp;format=json&amp;oauth_signature_method=HMAC-SHA1&amp;oauth_version=1.0&amp;oauth_token=bccad401-4bb4-47d7-8c0c-68c436996048&amp;oauth_signature=4MoAF7L6FAtHjYbSP5qE4P9QHRU%3D', 'x-li-pop': 'PROD-ELA4', 'transfer-encoding': 'chunked', 'set-cookie': 'lidc="b=LB02:g=53:u=66:i=1400278234:t=1400364634:s=664249250"; Expires=Sat, 17 May 2014 22:10:34 GMT; domain=.linkedin.com; Path=/', 'vary': '*', 'x-li-uuid': '/nEGXyI8KIG1qY19TpYigQ==', 'server': 'Apache-Coyote/1.1', 'x-li-fabric': 'PROD-ELA4', 'connection': 'keep-alive', '-content-encoding': 'gzip', 'date': 'Fri, 16 May 2014 22:29:24 GMT', 'x-li-request-id': 'A5BBSQAYXG', 'x-li-format': 'json', 'content-type': 'application/json;charset=UTF-8'} {
  "firstName": "Greg",
  "headline": "Staff Technical Writer at LinkedIn",
  "lastName": "McMillan",
  "siteStandardProfileRequest": {"url": "http://www.linkedin.com/profile/view?id=4721002&amp;authType=name&amp;authToken=e9fN&amp;trk=api*a3792451*s3862291*"}
}
```

App API Key and OAuth:

Application Details
Company:
foobar
 
Application Name:
Greg's API App
 
API Key:
75xa6oiszuh4jt
 
Secret Key:
lH6Dp2NrYwRZQ60E
 
OAuth User Token:
bccad401-4bb4-47d7-8c0c-68c436996048
 
OAuth User Secret:
360eb870-9fb0-4519-b13c-0eeaae3f949f
Access token:

https://www.linkedin.com/uas/oauth2/authorization?response_type=code &client_id=75xa6oiszuh4jt&state=DCEEFWF45453sdffef424&redirect_uri=http://employees.org/~mcmillan/index.htm
 
http://employees.org/~mcmillan/index.htm?error=unsupported_response_type&error_description=We+only+support+a+response_type+of+%22code%22%2C+but+you+passed+code+

## Basic HTTP request and response

```
curl -v HTTP
```

Use `curl -v` to see the Requests `(>)` and Responses `(<)`:

```
$ curl -v http://www.linkedin.com/pub/greg-mcmillan/1/6b8/8a
* About to connect() to www.linkedin.com port 80 (#0)
*   Trying 216.52.242.80...
* connected
* Connected to www.linkedin.com (216.52.242.80) port 80 (#0)
> GET /pub/greg-mcmillan/1/6b8/8a HTTP/1.1
> User-Agent: curl/7.24.0 (x86_64-apple-darwin12.0) libcurl/7.24.0 OpenSSL/0.9.8y zlib/1.2.5
> Host: www.linkedin.com
> Accept: */*
>
< HTTP/1.1 200 OK
< Server: Apache-Coyote/1.1
< P3P: CP="CAO DSP COR CUR ADMi DEVi TAIi PSAi PSDi IVAi IVDi CONi OUR DELi SAMi UNRi PUBi OTRi IND PHY ONL UNI PUR FIN COM NAV INT DEM CNT POL PRE"
< Last-Modified: Wed, 23 Apr 2014 22:51:38 GMT
< Content-Type: text/html;charset=UTF-8
< Content-Language: en-US
< Vary: Accept-Encoding
< Date: Fri, 02 May 2014 17:28:16 GMT
< X-FS-UUID: 503239ed1a6e6a13f0d066a0c22a0000
< X-LI-UUID: UDI57RpuahPw0GagwioAAA==
< X-Frame-Options: sameorigin
< X-Content-Type-Options: nosniff
< X-Li-Fabric: prod-lva1
< Set-Cookie: _lipt=deleteMe; Expires=Thu, 01-Jan-1970 00:00:10 GMT; Path=/
< Set-Cookie: leo_auth_token="GST:8SVydKA5OCok3GNyKZ-M1TAOpOg_I76V0l-MsFL1OXI_A_NYJwjr06:1399051696:9c9c0a0111562fa4304d597a37307755aaf61c4a"; Version=1; Max-Age=1799; Expires=Fri, 02-May-2014 17:58:15 GMT; Path=/
< Set-Cookie: sl="delete me"; Version=1; Max-Age=0; Expires=Thu, 01-Jan-1970 00:00:10 GMT; Path=/
< Set-Cookie: sl="delete me"; Version=1; Domain=.www.linkedin.com; Max-Age=0; Expires=Thu, 01-Jan-1970 00:00:10 GMT; Path=/
< Set-Cookie: s_leo_auth_token="delete me"; Version=1; Max-Age=0; Expires=Thu, 01-Jan-1970 00:00:10 GMT; Path=/
< Set-Cookie: JSESSIONID="ajax:7808061843093481525"; Version=1; Path=/
< Set-Cookie: visit="v=1&G"; Version=1; Max-Age=63072000; Expires=Sun, 01-May-2016 17:28:16 GMT; Path=/
< Set-Cookie: lang="v=2&lang=en-us"; Version=1; Domain=linkedin.com; Path=/
< Set-Cookie: bcookie="v=2&83633f62-af62-4f61-8eef-ab86f9e576bb"; domain=.linkedin.com; Path=/; Expires=Mon, 02-May-2016 05:05:48 GMT
< Pragma: no-cache
< Expires: Thu, 01 Jan 1970 00:00:00 GMT
< Cache-Control: no-cache, no-store
< Transfer-Encoding: chunked
< Connection: keep-alive
< X-Li-Pop: PROD-ELA4
< Set-Cookie: lidc="b=VB65:g=65:u=1:i=1399051696:t=1399138096:s=3752938381"; Expires=Sat, 03 May 2014 17:28:16 GMT; domain=.linkedin.com; Path=/
<
<!DOCTYPE html>
 <!--[if lt IE 7]> <html lang="en" class="ie ie6 lte9 lte8 lte7 os-win"> <![endif]-->
 <!--[if IE 7]> <html lang="en" class="ie ie7 lte9 lte8 lte7 os-win"> <![endif]-->
 <!--[if IE 8]> <html lang="en" class="ie ie8 lte9 lte8 os-win"> <![endif]-->
 <!--[if IE 9]> <html lang="en" class="ie ie9 lte9 os-win"> <![endif]-->
 <!--[if gt IE 9]> <html lang="en" class="os-win"> <![endif]-->
 <!--[if !IE]><!--> <html lang="en" class="os-win"> <!--<![endif]-->
<head>
...
Methods

The HTTP specification provides a number of generic methods, but only five are most relevant to REST:

GET – Retrieves a resource
HEAD – Retrieves representation and resource metadata
POST – Inserts, updates, or extends a resource; may change the state of other resources
PUT – Creates, updates, or replaces a resource
DELETE – Deletes a resource
 See http://httpkit.com/resources/HTTP-from-the-Command-Line/

Python urllib2.urlopen to Read Pages
Using urllib2.urlopen(), the HTML can be retrieved by calling the read() method of the returned object. The headers are available in the headers attribute.

#!/usr/bin/python
import urllib2
f = urllib2.urlopen('http://www.employees.org/~mcmillan/gregprof.htm')
print f.headers
print f.read()
Notes
Against my own LinkedIn profile with a Python client, use the existing LI profile REST APIs:

https://developer.linkedin.com/documents/authentication

and OAuth 2:

https://developer.linkedin.com/documents/authentication

Use python to scrape a web page, http://docs.python-guide.org/en/latest/scenarios/scrape/

rest:

http://rest.elkstein.org/2008/02/using-rest-in-python.html

http://www.voidspace.org.uk/python/articles/authentication.shtml#introduction

You can test the API directly, using your browser.



# Examples of Quality API Docs

https://developer.linkedin.com/rest

https://stripe.com/docs/api

https://developers.google.com/maps/documentation/android/

https://auth0.com/docs, a quick start for each client language

https://dev.twitter.com/docs/api/1.1, especially https://dev.twitter.com/docs/api/1.1/get/statuses/lookup

http://ffeathers.wordpress.com/2012/03/04/what-developers-want/

References
In progress:

RESTful Web Services Cookbook, http://techbus.safaribooksonline.com/book/web-development/web-services/9780596809140
http://contentkangaroo.com/2014/01/08/part-2-of-5-rest-api-documentation-understanding-rest-and-what-makes-good-api-documentation/
Confluence's REST APIs:
https://developer.atlassian.com/display/CONFDEV/Using+the+REST+APIs+-+Prototype+Only
https://docs.atlassian.com/atlassian-confluence/REST/latest/
Done

http://oreilly.com/catalog/pwebserperl/chapter/ch11.pdf
http://rest.elkstein.org/2008/02/what-is-rest.html?m=1