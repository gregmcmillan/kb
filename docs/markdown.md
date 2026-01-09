# Markdown

Markdown is a lightweight markup language with simple formatting syntax. 

It allows you to create styled text (like bold, italics, headers, lists) from plain text, making it easy to write and read, and it's widely used for web content, documentation (like on GitHub), and notes before converting it into other formats like HTML.

## Best practices

* mdx
* Docusaurus
* VS code

Basic syntax:

* [Basic Syntax](https://www.markdownguide.org/basic-syntax/)
* [Kramdown](https://kramdown.gettalong.org/)

## Inline images

For Docusaurus, place the files inside ``/docs/images/<file>`` and reference them using this:

```
![](./images/g1.png)
```

![](./images/g1.png)

Tip. Sometimes the alt text (inside the ``[]`` is wonky in the VS Code editor and is "required")

## Sublime indenting and comments

To shift a block of text to the right/left in Sublime Text, `cmd + ]/[` in OSX.

* **Comments**: Done with a # hash character. Use the **command** **/** toggle to comment in/out lines in Sublime and VScode.

# Sublime markdown preview

Github Flavored Markdown (GFM)

Install Markdown Preview and Package Control:

https://packagecontrol.io/packages/Markdown%20Preview

Add this Sublime keymap shortcut under Preferences > Key Bindings - User:

```
[
	{ "keys": ["command+p"], "command": "markdown_preview", "args": {"target": "browser", "parser":"markdown"} }
]
```

## TOC Anchors in Markdown

### Creating

To create an anchor to a heading in github flavored markdown. Add - and lowercase characters between each word in the heading and wrap the value in parens (#some-markdown-heading). 

So a link like this:

```
[Critical System and Applications](#critical-system-and-applications)
```

Will jump to a heading like this:

```
# Critical System and Applications
```

Alternatively, use a named html anchor tag like this:

[mytext-*/](#there_you_go)

<a name="there_you_go"></a>

### Periods in anchors

The link breaks. Solution is to remove the period altogether.

```
[Using Rest.li JARs](#using-restli-jars)

## Using Rest.li JARs
```
## Jekyll frontend conversion

For Markdown-to-Jekyll frontend conversion to work for headings on Github Pages (https://gmcmillan100.github.io/docs/freebsd.html), the following must be true:

* The line immediately before the heading hash (#) must be blank
* No blank space after the #

## Resources

https://guides.github.com/features/mastering-markdown/