# tail

The `tail` utility displays the last part of a file.

Inspection of Big Logs

Logs can grow huge and egrepping a big file just hangs.

Instead tail the file's last 20,000 lines, dump the output into a temporary location, and egrep it there:

```
tail -2000 file > filedump
egrep filedump
```