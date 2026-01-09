# du

The ``du`` (disk usage) utility displays disk usage statistics.

Try it with/without the -h (human readable) and -k options. It will count allocation units.

```
$ du -h
8.0K	./.git/refs/heads
4.0K	./.git/refs/tags

$ du -k
8	./.git/refs/heads
4	./.git/refs/tags
```

File size of a directory:

```
$ du -s -h Originals
198G Originals
```

To view the file size of a directory, pass the -s option to ``du`` followed by the folder. This will print a grand total size for the folder to standard output. Along with the -h option a human readable format is possible.