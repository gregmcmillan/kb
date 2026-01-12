# awk

Use the `awk` utility to remove the text from a line after a certain character.

```
mint list-products | grep js-library | awk -F 'with tags' '{print $1}' > js-library
```

https://unix.stackexchange.com/questions/117384/how-can-i-remove-the-text-from-a-line-after-a-certain-character-with-awk