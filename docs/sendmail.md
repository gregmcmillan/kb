# Sendmail

The Postfix `sendmail` command implements the Postfix to Sendmail compatibility interface.

Is sendmail running:

```
ps aux | grep sendmail
```

Send a test message:

```
mail -s "sendmail test" gmcmilla@linkedin.com
```

Inspect the sendmail queue:

```
$ sendmail -bp
-Queue ID- --Size-- ----Arrival Time---- -Sender/Recipient-------
105D51A8C25E      502 Mon Sep 10 13:18:47  _www@gmcmilla-md.local
          (connect to mail-b.linkedin.com[64.74.98.16]:25: Connection refused)
                                         gmcmilla@linkedin.com
                                         jfenton@linkedin.com
                                         mcolin@linkedin.com

40B781A8BFC0      596 Mon Sep 10 12:24:41  _www@gmcmilla-md.local
          (connect to mail-b.linkedin.com[64.74.98.16]:25: Connection refused)
                                         gmcmilla@linkedin.com
                                         jfenton@linkedin.com
                                         mcolin@linkedin.com

589AF1A8DB26      514 Tue Sep 11 09:14:48  _www@gmcmilla-md.local
          (connect to mail-b.linkedin.com[64.74.98.16]:25: Connection refused)
                                         gmcmilla@linkedin.com
                                         jfenton@linkedin.com
                                         mcolin@linkedin.com
```

Mail log:

```
cat /var/log/mail.log
Sep 11 09:14:41 gmcmilla-md postfix/master[8479]: master exit time has arrived
Sep 11 09:14:41 gmcmilla-md postfix/master[8486]: daemon started -- version 2.5.5, configuration /etc/postfix
Sep 11 09:14:48 gmcmilla-md postfix/pickup[8487]: 589AF1A8DB26: uid=70 from=<_www>
Sep 11 09:14:48 gmcmilla-md postfix/cleanup[8494]: 589AF1A8DB26: message-id=<20120911161448.589AF1A8DB26@gmcmilla-md.local>
Sep 11 09:14:48 gmcmilla-md postfix/qmgr[8488]: 589AF1A8DB26: from=<_www@gmcmilla-md.local>, size=514, nrcpt=3 (queue active)
Sep 11 09:14:48 gmcmilla-md postfix/smtp[8496]: connect to mail.linkedin.com[216.52.242.16]:25: Connection refused
Sep 11 09:14:48 gmcmilla-md postfix/smtp[8496]: connect to mail-b.linkedin.com[64.74.98.16]:25: Connection refused
Sep 11 09:14:48 gmcmilla-md postfix/smtp[8496]: 589AF1A8DB26: to=<gmcmilla@linkedin.com>, relay=none, delay=0.05, delays=0.02/0.01/0.02/0, dsn=4.4.1, status=deferred (connect to mail-b.linkedin.com[64.74.98.16]:25: Connection refused)
Sep 11 09:14:48 gmcmilla-md postfix/smtp[8496]: 589AF1A8DB26: to=<jfenton@linkedin.com>, relay=none, delay=0.05, delays=0.02/0.01/0.02/0, dsn=4.4.1, status=deferred (connect to mail-b.linkedin.com[64.74.98.16]:25: Connection refused)
Sep 11 09:14:48 gmcmilla-md postfix/smtp[8496]: 589AF1A8DB26: to=<mcolin@linkedin.com>, relay=none, delay=0.05, delays=0.02/0.01/0.02/0, dsn=4.4.1, status=deferred (connect to mail-b.linkedin.com[64.74.98.16]:25: Connection refused)
```
