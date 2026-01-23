# Javadoc

## Summary
This document describes how to use javadoc to auto-generate documentation that is derived from Java source files:

Insert a javadoc comment in a .java file
Run the javadoc command line tool
Display the generated HTML output
See also Java Coding Conventions.

## Procedure
Follow these steps:

Step 1 - Ensure Java and javadoc are installed on your computer:

```
$ which java
/usr/bin/java
$ which javadoc
/usr/bin/javadoc
```

Step 2 - Create a Java file with enclosed javadoc comments. For a full list of supported javadoc control parameters, see http://www.tutorialspoint.com/java/java_documentation.htm.

```
vi AddNum.java
```
  
then insert this:
  
```
import java.io.*;
/**
* <h1>Hey Tech Docs.... Add Two Numbers!</h1>
* The AddNum program implements an application that
* simply adds two given integer numbers and Prints
* the output on the screen.
* <p>
* <b>Note:</b> Giving proper comments in your program makes it more
* user friendly and it is assumed as a high quality code.
*
* @author Greg McMillan
* @version 1.0
* @since   October 21, 2014
*/
public class AddNum {
   /**
   * This method is used to add two integers. This is
   * a the simplest form of a class method, just to
   * show the usage of various javadoc Tags.
   * @param numA This is the first paramter to addNum method
   * @param numB  This is the second parameter to addNum method
   * @return int This returns sum of numA and numB.
   */
   public int addNum(int numA, int numB) {
      return numA + numB;
   }
   /**
   * This is the main method which makes use of addNum method.
   * @param args Unused.
   * @return Nothing.
   * @exception IOException On input error.
   * @see IOException
   */
   public static void main(String args[]) throws IOException
   {
      AddNum obj = new AddNum();
      int sum = obj.addNum(10, 20);
      System.out.println("Sum of 10 and 20 is :" + sum);
   }
}
```

Step 3 - Use the javadoc command to generate the HTML, Javascript, and CSS files:

```
$ javadoc AddNum.java
Loading source file AddNum.java...
Constructing Javadoc information...
Standard Doclet version 1.8.0_25
Building tree for all the packages and classes...
Generating ./AddNum.html...
AddNum.java:32: error: invalid use of @return
   * @return Nothing.
     ^
Generating ./package-frame.html...
Generating ./package-summary.html...
Generating ./package-tree.html...
Generating ./constant-values.html...
Building index for all the packages and classes...
Generating ./overview-tree.html...
Generating ./index-all.html...
Generating ./deprecated-list.html...
Building index for all classes...
Generating ./allclasses-frame.html...
Generating ./allclasses-noframe.html...
Generating ./index.html...
Generating ./help-doc.html...
1 error
```
Step 4 - Inspect the files:

```
$ ls
AddNum.html     constant-values.html    index.html      package-summary.html
AddNum.java     deprecated-list.html    overview-tree.html  package-tree.html
allclasses-frame.html   help-doc.html       package-frame.html  script.js
allclasses-noframe.html index-all.html      package-list        stylesheet.css
```

Step 5 - Open index.html in a browser:


## Use Grep to Find Comment Strings
Can't find the source? 

The grep command is your good friend.

Step 1 - Download the source code repo to your local Mac:

http://viewvc.corp.linkedin.com/netrepo/network/trunk/identity/mt-rest-client/restli-snapshot/

See the Download GNU tarball link.

Step 2 - Unzip it

Step 3 - Use grep to find the string:

```
gmcmilla-mn1:Downloads gmcmilla$ grep -R 'Degree attained' identity/
identity//mt-rest-client/restli-snapshot/identity-rest-impl-com.linkedin.identity.accountCreations.snapshot.json:      "doc" : "Degree attained in a study",
identity//mt-rest-client/restli-snapshot/identity-rest-impl-com.linkedin.identity.people.snapshot.json:      "doc" : "Degree attained in a study",
identity//mt-rest-client/restli-snapshot/identity-rest-impl-com.linkedin.identity.profiles.snapshot.json:      "doc" : "Degree attained in a study",
API Workshop Preso
APIs and SDKs WorkshopEd MarshallCopyright 2014
AgendaRegistration and breakfast – 8:30-9:00Introductions and workshop goals – 9:00-9:15Discussion of APIs and SDKs – 9:15-9:45Javadoc discussion and demo – 9:45-10:15Setting up Javadoc exercises – 10:15-10:30Break – 10:30-10:45Javadoc exercises – 10:45-12:00Lunch – 12:00-1:302
Agenda, continuedJavadoc exercises review – 1:30-2:00Web Services discussion and demo – 2:00-2:30Break– 2:30-2:45Web Services exercises – 3:00-4:00Web Services exercises review – 4:00-4:30Training – 4:30-4:45Q&A and closing – 4:45-5:003
APIs and SDKsAPI = Application Programming InterfaceSDK = Software Development Kit•Typical users and why they use them•Typical producers of these products•Examples4
Typical Documentation Deliverables•Programmer’s Reference Guides•Online help (in some format, more later)•Performance & Tuning Guides•Programmer’s Guides•Data Dictionaries•API and SDK Installation Manuals•System Administrator’s Guides•User Configuration Guides5
Ideal Information for SDKs•Provide an overview of the SDK•Describe the tools and components in the SDKand how they relate to the APIs•Describe each tool in detail•Describe any sample programs included in theSDK6
```

## Barron Roberts best practices Javadoc for Java

Javadoc is a tool for generating API documentation in HTML format from doc comments in source code. Documenting as you code ensures that your product is maintainable over time:

Where Produced

Building Javadoc

Tips for Javadoc Craftsmanship

Using package.info for Package Overviews

Displaying Javadoc in CRT

Javadoc Example

Where Produced
DocIn discovers the Javadoc whenever there’s a new Last Known Good (LKG) build of an MP, and the artifacts have been extracted and published successfully to Artifactory. LKG is also known as PCx passing:

Javadoc is produced automatically by default for library products, as part of every successful mint build version (e.g., jdk-versions-1.3.1-javadoc.jar).

For deployable products, Javadoc has less importance. A deployable is not consumed as code, and sometimes build speed is an issue. Javadoc is critical for libraries.

For the language stubs generated by Rest.li for APIs, these are generated for you and covered by go/restli

Building Javadoc
Gradle runs the Javadoc tool. In your Java MP, there is a standard build.gradle file at the subproject level:

```
mymp_trunk/<subproject>/build.gradle
```

It should contain this line by default:

```
apply plugin: 'li-java'
```

If not, add it. When the li-java plugin is applied, the Javadoc folder is generated when mint build completes:

```
mymp_trunk/build/<subproject>/docs/javadoc
```

Note

The source code for the li-java plugin is here. It’s part of the ligradle-jvm MP. There are other plugins, such as li-groovy, that wrap li-java and transitively apply it to generate Javadoc accordingly.

After your code is checked in, the Javadoc is zipped and sent to Artifactory , where DocIn downloads it and displays the artifacts accordingly.

## Tips for javadoc craftsmanship

As a minimum best practice, we recommended you write Javadoc for all classes and interfaces, especially for the public APIs you want people to use.

Explain what the code does or represents. The more detail you put in your class description, the better off readers will be when they inherit your code in the future.

While documenting your code with Javadoc is highly encouraged, internal classes and APIs probably don’t require Javadoc.

Use Javadoc for documenting low-level details about your code, but consider using DocIn’s Markdown for documenting use cases and procedures.

Don’t restate the obvious. Give the reader meaningful content and describe critical corner cases. For example, consider a class named setVersion. The comment for this should not be “Sets the version”. It’s better to write something valuable, such as “Sets the version of the plugin to be used with abc. If none is specified, then this happens.”

Consider the following corner case example. What happens if there are no names. Do you get an empty list or null?

```
public List <string> getNames (){
        return names;
}
```

Use HTML tags to separate paragraphs and format lists. Otherwise, the text gets sandwiched and runs on together.

See also:

LinkedIn Java Coding Conventions

Oracle Javadoc Tool

Using package.info for Package Overviews
In Javadoc, you can use package.info.java to provide a top-level package overview. It can include a library description, getting started guide, or historical information.

Do this to set it up:

Create package-info.java under a package-name:

```
<mp>/<subproject>/src/main/java/com/
```

```
linkedin/<package-name>/package-info.java
```

Add your description in HTML:

```
/**
 * <style>
 * </style>
 * <h1></h1>
 * <p>
 * </p>
 */
package com.linkedin.<package-name>;
```

When compiled, the description will be included.

Examples:

JDK Versions. A simple example created by Baron Roberts. It builds to look like this in CRT.

Mockito Javadoc. An advanced example created by Szczepan Faber. It includes syntax highlighting, navigation, and much more. See its Gradle code.

Troubleshooting tips:

If there’s no Javadoc artifact in Artifactory, most likely the Java MP has a customized build.gradle file that must be changed.

Java MPs do not require docin init to get the Javadoc to display in DocIn’s CRT UI.

One MP can have many Javadocs.

Javadoc Example
See jdk versions produced by Baron Roberts.
