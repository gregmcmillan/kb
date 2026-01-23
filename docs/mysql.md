# MySQL

MySQL is an open-source relational database management system (RDBMS) used to store, manage, and retrieve structured data.

## Version
Which version is running?

```
$ mysql -V
mysql  Ver 14.14 Distrib 5.7.27, for Linux (x86_64) using  EditLine wrapper
```

## Monitor login
To access the MySQL Remote Monitor, as the user (-u) "mcmillan", call that user's password (-p), then choose the db named "mcmillan":

```
$ mysql -u mcmillan -p
Enter password: 
$ mysql>
```


## Start/Stop on Mac and Root Login

```
$ mysql.server start
$ mysql.server stop
```

Login as root (which is 'guessme'):

```
$ mysql -u root -p
```

## DB connect file

```
vi dbconnect.php
```

then put this in it:

```
<?php
// set database server access variables:
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


## Sample HTML form with call to DB

```
vi mysqltest.php

<html>
<body>
<?php

// Connect to db
include('dbconnect.php');

// Launch sql query and store it in $result
$result = mysql_query("SELECT * FROM rooms order by name")
or die(mysql_error());

// Start table
    echo "<table cellpadding=10 border=1>";

// Get number of columns, their names, and put into table heads
$num_fields = mysql_num_fields($result);
echo "<tr>";
for ($i=0; $i < $num_fields; $i++)
{ echo '<th>'.mysql_field_name($result, $i).'</th>'; }
echo "</tr>";

// Fill table rows with data from columns

    while($row = mysql_fetch_array($result)) {

        echo "<tr>";
        echo "<td>".$row['id']."</td>";
        echo "<td>".$row['name']."</td>";
        echo "<td>".$row['building']."</td>";
        echo "<td>".$row['locationcode']."</td>";
        echo "<td>".$row['floor']."</td>";
        echo "<td>".$row['seating']."</td>";
        echo "<td>".$row['capacity']."</td>";
        echo "<td>".$row['bookable']."</td>";
        echo "<td>".$row['roomtype']."</td>";
        echo "<td>".$row['displaytype']."</td>";
        echo "<td>".$row['phone']."</td>";
        echo "<td>".$row['phonetype']."</td>";
        echo "<td>".$row['devicecontrol']."</td>";
        echo "<td>".$row['other']."</td>";
        echo "<td><a href='editroom.php?id=".$row."'>Edit</a></td>";
	echo "</tr>";
    	}
    	echo "</table>";

// free result set memory
mysql_free_result($result);

// close connection
mysql_close($connection);

?>
</body>
</html>
```

## Sample sql queries

```
select * from artist;
use music;
select database();
show tables;
show columns from artist;
select * from artist;
select artist_name from artist;
select * from artist where artist_name = "New Order";
select artist_name from artist where artist_id = 4;
select artist_name from artist where artist_id < 'M';
select album_name from album where
    -> album_name > "C" and album_name < "M";
select artist_name, album_name from artist inner join album
    -> using (artist_id);
insert into artist values (7, "Barry Adamson");
delete from played;
update artist set artist_name = upper(artist_name);
```


## Import an entire database from an external file
```
mysql> source /Users/gmcmilla/webDev/mysql/music.sql
Query OK, 0 rows affected, 1 warning (0.01 sec)
Query OK, 1 row affected (0.00 sec)
```


## GUI mysql management tool
http://dev.mysql.com/downloads/workbench/

1. Start workbench
2. Database > Manage connections > New > name it "local mysql"
2. Connection Method: Local Socket/Pipe (for local db)
3. Test connection
4. Go back to dashboard
5. Database > query database > choose "local mysql" 
6. SQL Editor displays the DBs available


## Install

```
$ pkg install mysql57-server
```

which installed these two packages:

```
mysql57-server: 5.7.10_3
mysql57-client: 5.7.10_3
```

To enable MySQL server as a service, add mysql_enable="YES" to the /etc/rc.conf file.

Start/stop/restart mysql:

```
$ service mysql-server start
$ service mysql-server stop
$ service mysql-server restart
```

## Initial root login

```
$ mysql -u root -p
```

Change root's password from inside the interpreter:

```
mysql> SET PASSWORD FOR 'root'@'localhost' = PASSWORD('guessm3');
```

## blog

Create a table for the blog data:

```
mysql> CREATE TABLE  `blog` (
    -> `id` INT NOT NULL AUTO_INCREMENT ,
    -> `title` VARCHAR( 140 ) NOT NULL ,
    -> `content` TEXT NOT NULL ,
    -> `datetime` DATETIME NOT NULL ,
    -> PRIMARY KEY (  `id` )
    -> );
Query OK, 0 rows affected (0.05 sec)
```

```
mysql> show tables;
+--------------------+
| Tables_in_mcmillan |
+--------------------+
| blog               |
| rooms              |
+--------------------+
2 rows in set (0.00 sec)
```

```
mysql> describe blog;
+----------+--------------+------+-----+---------+----------------+
| Field    | Type         | Null | Key | Default | Extra          |
+----------+--------------+------+-----+---------+----------------+
| id       | int(11)      | NO   | PRI | NULL    | auto_increment |
| title    | varchar(140) | NO   |     | NULL    |                |
| content  | text         | NO   |     | NULL    |                |
| datetime | datetime     | NO   |     | NULL    |                |
+----------+--------------+------+-----+---------+----------------+
4 rows in set (0.00 sec)
```

## Basics

Start mysql on a mac:

```
$ mysql.server start
Starting MySQL
.. SUCCESS!
```

Use mysql.server stop to stop it. See also ps -ef | grep mysqld.

Access the monitor:

```
$ mysql
Welcome to the MySQL monitor.  Commands end with ; or \g.
Your MySQL connection id is 8
Server version: 5.6.12 Source distribution
Copyright (c) 2000, 2013, Oracle and/or its affiliates. All rights reserved.
Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.
Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.
mysql>
```

Show databases present:

```
mysql> show databases;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| test               |
+--------------------+
```

Use a database:

```
mysql> use test;
Database changed
```

Show tables inside this DB:

```
mysql> show tables;
Empty set (0.00 sec)
```

To access the MySQL Remote Monitor, as the user (-u) "mcmillan", call that user's password (-p), then choose the db named "mcmillan":

```
willers /home/mcmillan/WWW> mysql -u mcmillan -p mcmillan
Enter password:
Reading table information for completion of table and column names
You can turn off this feature to get a quicker startup with -A
 
Welcome to the MySQL monitor.  Commands end with ; or \g.
Your MySQL connection id is 3701802
Server version: 5.0.90 FreeBSD port: mysql-server-5.0.90_2
 
Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.
 
mysql>
```

Display the version of mysql from bash:

```
mysql> SELECT VERSION();
+---------------------+
| VERSION()           |
+---------------------+
| 5.0.18-standard-log |
+---------------------+
1 row in set (0.01 sec)
```

Display the available tables:

```
mysql> show tables;
+--------------------+
| Tables_in_mcmillan |
+--------------------+
| rooms              |
+--------------------+
1 row in set (0.00 sec)
```

Inspect the characteristics of the table named "rooms":

```
mysql> describe rooms;
+---------------+-------------+------+-----+---------+----------------+
| Field         | Type        | Null | Key | Default | Extra          |
+---------------+-------------+------+-----+---------+----------------+
| id            | int(11)     | NO   | PRI | NULL    | auto_increment |
| name          | varchar(32) | NO   |     | NULL    |                |
| building      | varchar(32) | NO   |     | NULL    |                |
| locationcode  | varchar(32) | NO   |     | NULL    |                |
| floor         | varchar(32) | NO   |     | NULL    |                |
| seating       | varchar(32) | NO   |     | NULL    |                |
| capacity      | varchar(32) | NO   |     | NULL    |                |
| bookable      | varchar(32) | NO   |     | NULL    |                |
| roomtype      | varchar(32) | NO   |     | NULL    |                |
| displaytype   | varchar(32) | NO   |     | NULL    |                |
| phone         | varchar(32) | NO   |     | NULL    |                |
| phonetype     | varchar(32) | NO   |     | NULL    |                |
| devicecontrol | varchar(32) | NO   |     | NULL    |                |
| other         | varchar(32) | NO   |     | NULL    |                |
+---------------+-------------+------+-----+---------+----------------+
14 rows in set (0.01 sec)
```

Select all the data from the table named "rooms", then display it;

```
mysql> select * from rooms;
+----+----------+----------+--------------+-------+---------+----------+----------+--------------+-------------+----------------+-----------+---------------+------------+
| id | name     | building | locationcode | floor | seating | capacity | bookable | roomtype     | displaytype | phone          | phonetype | devicecontrol | other      |
+----+----------+----------+--------------+-------+---------+----------+----------+--------------+-------------+----------------+-----------+---------------+------------+
| 14 | InFinite | 2 (2027) | LSV2         | 1     | 18      | 28       | Yes      |              | Projector   | 1-650-687-3600 | Polycom   | Touch Panel   | Whiteboard |
|  4 | Pac Man  | 2029     | LSV1         | 1     | 4       | 6        | Yes      |              | N/A         | 650            | Shoretel  | N/A           | Whiteboard |
| 15 | Zelda    | 1 (2029) | LSV1         | 1     | 10      | 15       | Yes      | Presentation | Projector   | 1-650-605-1298 | Polycom   | Remote        | Whiteboard |
|  7 | Pac Man2 | 2029     | LSV1         | 1     | 4       | 6        | Yes      |              | N/A         | 650            | Shoretel  | N/A           | Whiteboard |
|  8 | dkd      | 0        | kdkd         | 0     | 3       | 4        | 5        |              | 7           | 0              | dd        |               |            |
|  9 | hello    | 1        | dd           | 3     | 7       | 66       | yes      |              | dd          | 88             | dd        | dd            | jj         |
| 13 |          |          |              |       |         |          |          |              |             |                |           |               |            |
| 11 | ggg      | 0        | gg           | 0     | 0       | 0        |          |              |             | 0              |           |               |            |
| 12 | tt       | 0        | ttt          | 0     | 0       | 0        |          |              |             | 0              |           |               |            |
| 16 |          |          |              |       |         |          |          |              |             |                |           |               |            |
| 17 |          |          |              |       |         |          |          |              |             |                |           |               |            |
| 18 |          |          |              |       |         |          |          |              |             |                |           |               |            |
| 19 |          |          |              |       |         |          |          |              |             |                |           |               |            |
| 20 |          |          |              |       |         |          |          |              |             |                |           |               |            |
| 21 |          |          |              |       |         |          |          |              |             |                |           |               |            |
| 22 |          |          |              |       |         |          |          |              |             |                |           |               |            |
| 23 |          |          |              |       |         |          |          |              |             |                |           |               |            |
| 24 |          |          |              |       |         |          |          |              |             |                |           |               |            |
+----+----------+----------+--------------+-------+---------+----------+----------+--------------+-------------+----------------+-----------+---------------+------------+
18 rows in set (0.00 sec)
```

Resources: http://en.wikibooks.org/wiki/MySQL/CheatSheet http://dev.mysql.com/tech-resources/articles/mysql_intro.html

Local sql queries

1. Create an sql select query in a file:

```
cat /tmp/ZZmsql3.sql
  select substring(lastmoddate from 1 for 7) as "Month", count(distinct title) as "Attachments" 
    from ATTACHMENTS
    group by substring(lastmoddate from 1 for 7)
```

2. Query the confluence DB using the "testuser" account:

```
mysql -utestuser -p -D confluence_3_5_7 < /tmp/ZZmsql3.sql
Enter password: 
```

3. The results are returned:

```
Month   Attachments
2006-03 3
2006-04 7
2006-05 32
2006-06 21
2006-07 72
2006-08 67
```

limit directive

Use the "limit" directive to skip and show rows. Can take one or two attributes. If you use one attribute, for example "LIMIT 5", it will show only that many records which get taken off of the top of the list of results. If you use two attributes, for example "LIMIT 10, 5", it will skip the number of records indicated by the first number and then show the number of records indicated by the second number. In other words it's "LIMIT skip, show"

```
select contenttype, count(``*``)
from CONTENT
group by CONTENT.contenttype limit 5,1
Distinct (unique filtering)
```

Use the ``distinct <in this column>`` parameter:

```
select lastmodifier, count(distinct lastmodifier) from CONTENT where lastmoddate >= date_sub(curdate(),interval 7 day)
```

In example above, the "lastmodifier" object contains a username for each page version in the wiki. But when "count(distinct lastmodifier)" is applied, only the unique usernames are counted.

SQL as root

```
mysql -u root -D confluence_3_5_7 < attachmentsAndTotalFileSize
count(``*``)        sum(filesize)
50161   24001977213
```

Query as root and use -D:

```
mysql -u root -D confluence_3_5_7 -e 'show tables;'
 
mysql -u root -D confluence_3_5_7 -N -e 'show tables;'
```

Dump all tables in one shot:

```
for mm in `mysql -u root -D confluence_3_5_7 -N -e 'show tables;' `; do echo "============ ${mm} =========="; mysql -u root -D confluence_3_5_7 -N -e "desc ${mm};"; done
```

See Confluence's source code at:

```
cd /export/apps/confluence/i001/confluence-3.5.7-std/confluence/
find .
iwww-test/htdocs
```

As user webservd, publish files here:

```
/export/apps/apache2/iwww-test/htdocs
```

## Remote SQL Query
1. Open ssh connection from local 3306 to remote 3306:

```
ssh -L3306:iwww-test.corp.linkedin.com:3306 iwww-test.corp.linkedin.com
```

2. Confirm that a local connection (127.0.0.1) exists to port 3306:

```
telnet 127.0.0.1 3306
Trying 127.0.0.1...
Connected to localhost.
Escape character is '^]'.
quit
packets out of orderConnection closed by foreign host.
```

3. Configure DbVisualizer to use the correct settings:

4. Press the Connect button in DbVisualizer. Notice the connect message:

```
MySQL
5.1.37-log
MySQL-AB JDBC Driver
mysql-connector-java-5.1.16 ( Revision: $bzr.revision-id )
```

Note: The first connection attempt failed because "testuser" didn't have enough MySQL Grant permissions on the iwww-test side.

Donaldo had to grant this via:

```
iwww-test.corp:gmcmilla[591] ~ $ mysql -uroot -e 'GRANT SELECT ON confluence_3_5_7.* TO "testuser"@"iwww-test.corp" IDENTIFIED BY "resutset";'
```

at which point, the correct password was set and DBvisualizer could connect:

```
iwww-test.corp:gmcmilla[590] ~ $ mysql -uroot -e 'show grants for "testuser"@"localhost";'
+-----------------------------------------------------------------------------------------------------------------+
| Grants for testuser@localhost                                                                                   |
+-----------------------------------------------------------------------------------------------------------------+
| GRANT USAGE ON *.* TO 'testuser'@'localhost' IDENTIFIED BY PASSWORD '*582B2A37B5C55612EC66660570F8397BDA8F7600' |
| GRANT SELECT ON `confluence_3_5_7`.* TO 'testuser'@'localhost'                                                  |
+-----------------------------------------------------------------------------------------------------------------+
```

Tip. After the "confluence_3_5_13" db was added, the testuser account stopped working. DBvisializer could not connect. The resolution was to reissue the password via the above steps.

6. Open a local shell and confirm netstat displays an ESTABLISHED connection:

```
gmcmillan-macpro:~ gmcmilla$ netstat -an | egrep 3306
tcp4       0      0  127.0.0.1.3306         127.0.0.1.49944        ESTABLISHED
tcp4       0      0  127.0.0.1.49944        127.0.0.1.3306         ESTABLISHED
tcp4       0      0  127.0.0.1.3306         *.*                    LISTEN
tcp6       0      0  ::1.3306               *.*                    LISTEN
DB Queries
```

Use mysql to query the DB or log into the MySQL monitor:

To query a specific DB as a user:

mysql -utestuser -p -D confluence_3_5_7 < /tmp/ZZmsql3.sql
To access the monitor:

```
mysql
Welcome to the MySQL monitor.  Commands end with ; or \g.
Your MySQL connection id is 3
Server version: 5.0.18-standard-log

Type 'help;' or '\h' for help. Type '\c' to clear the buffer.

mysql>
```

## Access Confluence's MySQL Monitor
```
iwww-test.corp:gmcmilla[561] ~ $ mysql -u root -e confluence_3_5_7
mysql> show databases;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| confluence_3_0_2   |
| confluence_3_5_7   |
| internal           |
| mysql              |
| test               |
+--------------------+
6 rows in set (0.00 sec)
```

Examples

```
mysql> show databases;
+--------------------+
| Database           |
+--------------------+
| information_schema | 
| test               | 
+--------------------+
2 rows in set (0.01 sec)

mysql> show tables;
ERROR 1046 (3D000): No database selected
mysql> use test
Database changed
mysql> show tables;

select * from enrollments where event_pk = 108;
select name from events where event_pk = 108;
select * from enrollments;
select name, event_pk from events;
select events.name, events.event_pk, enrollments.status, enrollments.user_pk, events.start_at
from events inner join enrollments on events.event_pk=enrollments.event_pk;

select events.name, events.event_pk, enrollments.status, enrollments.user_pk, events.start_at
from events 
inner join enrollments on events.event_pk = enrollments.event_pk
inner join users on users.user_pk = enrollments.user_pk;

select surveys.title, survey_questions.text
from surveys inner join survey_questions on surveys.survey_pk = survey_questions.survey_pk
    inner join survey_questions on surveys.survey_pk = survey_questions.survey_pk
    inner join survey_instances on surveys.survey_pk = survey_instances.survey_pk;
    
select * from assignments
where month(created_at)=6 and year(created_at)= 2022;

select * from assignments
where quarter(created_at)=3 and year(created_at)= 2021;

select * from assignments
where created_at between '2021-02-01' and '2021-03-31';

select ``*``, datediff(started_at, created_at) from assignments
where created_at between '2021-02-01' and '2021-03-31';

SELECT VERSION();
```

## MySQL Workbench
Use for DB design and modeling

http://dev.mysql.com/downloads/workbench/5.2.html

To connect to a database:

Click Open Connection to Start Querying
Leave Username and Password empty, enter a database name in Default Schema, click OK:

The SQL Editor is displayed:

## NULL vs NOT NULL
NULL stands for the absence of a known value. NULL is unusual because it doesn't represent a specific value the way that numeric, string, or temporal values do.

Allowing a column to be NULL introduces an additional state that you wouldn't have if you set the column up as NOT NULL. Do not do this if you don't need the additional state. That is, if you can't come up with a difference between the meaning of empty string and the meaning of null, then set the column up as NOT NULL and use empty string to represent empty. Representing the same thing in two different ways is a bad idea. Most of the time, however, NULL is a needless extra state that just forces programmers to have to handle more cases.

The correct way to test for NULL or to query based on NULL is to use the "IS NULL" and "IS NOT NULL" operators:

```
select * from rooms where name is null;
select * from rooms where name is not null;
```
To change the "devicecontrol" column from NULL to NO NULL:

```
mysql> describe rooms;                                          
+---------------+-------------+------+-----+---------+----------------+
| Field         | Type        | Null | Key | Default | Extra          |
+---------------+-------------+------+-----+---------+----------------+
...
| devicecontrol | varchar(32) | YES  |     | NULL    |                |
...
14 rows in set (0.00 sec)
 
mysql> alter table rooms modify devicecontrol varchar(32) not null;
Query OK, 12 rows affected (0.01 sec)
Records: 12  Duplicates: 0  Warnings: 0
 
mysql> describe rooms;
+---------------+-------------+------+-----+---------+----------------+
| Field         | Type        | Null | Key | Default | Extra          |
+---------------+-------------+------+-----+---------+----------------+
...
| devicecontrol | varchar(32) | NO   |     | NULL    |                |
...
```

## User Accounts
To display the list of user accounts:

```
mysql -uroot -e 'select User from mysql.user;'
+---------------+
| User          |
+---------------+
| root          |
|               |
| root          |
|               |
| cflu302       |
| cfluence302   |
| cfluence3513  |
| root          |
| statuser      |
| sysbench_user |
+---------------+
```

Notes
https://iwww.corp.linkedin.com/wiki/cf/rpc/soap-axis/confluenceservice-v1?wsdl http://stackoverflow.com/questions/2086542/how-to-call-overloaded-soap-method-with-php-soapclient

Add label

## Misc
Node.js. See docs/nodejs.

Python connector:
http://stackoverflow.com/questions/372885/how-do-i-connect-to-a-mysql-database-in-python

Ember Data connector:
http://stackoverflow.com/questions/22293741/ember-js-with-mysql-connection


Remember to run mysql_upgrade the first time you start the MySQL server
after an upgrade from an earlier version.

Initial password for first time use of MySQL is saved in $HOME/.mysql_secret
ie. when you want to use "mysql -u root -p" first you should see password
in /root/.mysql_secret
