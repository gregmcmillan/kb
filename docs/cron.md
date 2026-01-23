# cron

Edit `crontab` and add reference to run `cron` at 5AM daily:

```
sudo crontab -e
0 05 * * * /export/apps/apache2/iwww-test/htdocs/getall.sh
Tip: For testing purposes, run the script every 5 minutes until it works correctly. Do this by using "0,5,10,15,20,25,30,35,40,45,50,55 * * * *" instead of "0 05 * * *", then change it back.
```

Display crontab and verify:

```
sudo crontab -l
```

Monitor the cron log file:

```
sudo tail -f /var/cron/log
>  CMD: /export/apps/apache2/iwww-test/htdocs/getall.sh
>  root 1662 c Tue Nov 15 22:20:00 2011
<  root 1661 c Tue Nov 15 22:20:00 2011 rc=1
<  root 1662 c Tue Nov 15 22:20:02 2011
postdrop: warning: unable to look up public/pickup: No such file or directory
```