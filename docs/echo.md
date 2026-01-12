# echo

Use the ``echo`` utility to identify the search path for the executable files that
I'm using. 

For example, my ``brew`` utility is coming from ``/opt/homebrew/bin/brew``:

```
$ echo $PATH
/usr/local/bin:/System/Cryptexes/App/usr/bin:/usr/bin:/bin:/usr/sbin:/sbin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/local/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/bin:/var/run/com.apple.security.cryptexd/codex.system/bootstrap/usr/appleinternal/bin:/opt/homebrew/bin

$ which brew
/opt/homebrew/bin/brew
```