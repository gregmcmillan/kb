# man

A man page (short for manual page) is a form of software documentation usually found on a Unix or Unix-like operating system. man pages usually cover library and system calls, formal standards and conventions, and even abstract concepts. To invoke a man page, type `man <command_name>` in your terminal. Man pages are written in Groff.  

## Groff

Groff (also called GNU troff) is the GNU replacement for the troff and nroff text formatters. As a formatting and typesetting engine, this utility acts like a compiler for the input supplied (plain text content and formatting commands) to it and it creates a formatted document as its output.

## man pages on your machine

At LinkedIn, man pages for git, brew, vim, pearl, etc. are pushed to your `/usr/share/man`. You'll also find man pages in `/usr/local/share/man`. Man pages are grouped into sections. You'll find multiple folders inside the main man folder (eg: man1, man4, etc.). The number corresponds to the section of the manual that page is from. The man page for man (man man) explains it and lists the standard ones:

## MANUAL SECTIONS

The standard sections of the manual include:
    1 User Commands
    2 System Calls
    3 C Library Functions
    4 Devices and Special Files
    5 File Formats and Conventions
    6 Games et. al.
    7 Miscellanea
    8 System Administration tools and Daemons

## Additional Resources

Syntax - https://linux.die.net/man/7/groff
Groff examples - http://www.thegeekstuff.com/2012/09/linux-groff-command-examples/
http://web.cecs.pdx.edu/~trent/gnu/groff/groff.html#SEC2
Groff manual - https://www.gnu.org/software/groff/manual/html_node/index.html#Top
Linux man page -https://linux.die.net/man/7/groff
Writing man pages using Groff - http://www.linuxjournal.com/article/1158
Writing manual pages - https://liw.fi/manpages/
Linux ManPage HowTo - http://www.tldp.org/HOWTO/Man-Page/q1.html
Technical Prose - http://technicalprose.blogspot.com/2011/06/how-to-write-unix-man-page.html
Writing effective man pages - http://home.windstream.net/kollar/groff/effman.html
Writing and Formating UNIX Manual Pages with -man macros - http://home.fnal.gov/~mengel/man_page_notes.html

Writing GNUstep man-pages with groff - http://gnustep.made-it.com/man-groff.html

WYSIWYG Man Viewers 

Iman - https://sourceforge.net/projects/iman-macosx/?source=directory
Polyglot - https://sourceforge.net/projects/polyglotman/?source=directory