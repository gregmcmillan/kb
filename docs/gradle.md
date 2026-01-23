# Gradle

## Basic Concepts
The source directories (src) contain source code, such as src/main/java/HelloWorld.java
The build directory is generated as the build system works. Anything that is not a source of truth artifact goes into the build directory.
The build directory is never checked in.
If you run a clean, it will delete the build directory.
There is a Gradle task that generates javadoc.
Workflow:

Start gradle
Check out code
Create a Jenkins job
Run the correct tool on the correct directory
gradle javadoc
gradle sphinx
Copy the HTML directories to the static web server.
Notify the search tool that new HTML is ready to be indexed

## Installation
Main doc: https://www.jayway.com/2013/05/12/getting-started-with-gradle/

Ensure JDK 1.5 or greater is installed:

```
$ javac -version
javac 1.8.0_92
```

Ensure Homebrew is installed:

```
$ brew -v
Homebrew 0.9.5 (git revision df7f2; last commit 2014-10-17)
```

Use Homebrew to install Gradle:

```
sudo brew install gradle
sudo brew link gradle
```

Confirm Gradle is installed:

```
$ which gradle
/usr/local/bin/gradle
$ gradle -v
------------------------------------------------------------
Gradle 2.10
------------------------------------------------------------
Build time:   2015-12-21 21:15:04 UTC
Build number: none
Revision:     276bdcded730f53aa8c11b479986aafa58e124a6
Groovy:       2.4.4
Ant:          Apache Ant(TM) version 1.9.3 compiled on December 23 2013
JVM:          1.8.0_92 (Oracle Corporation 25.92-b14)
OS:           Mac OS X 10.9.5 x86_64
```

If you get this error:

```
Error: Cowardly refusing to `sudo brew install`
```

Do this http://digitizor.com/fix-cowardly-refusing-sudo-error-brew/

## Building sphinx docs

Hello World
Main article: https://www.learnhowtoprogram.com/lessons/setting-up-a-project-with-gradle

Create directory and define build.gradle:

```
mkdir gradle
cd gradle
vi build.gradle
gradle/build.gradle
apply plugin: 'java'
apply plugin: 'application'
 
archivesBaseName = "hello-world"
version = '1.0'
mainClassName = "HelloWorld"
 
repositories {
 mavenCentral()
}
 
dependencies {
  compile group: 'com.sparkjava', name: 'spark-core', version: '2.3'
  testCompile group: 'junit', name: 'junit', version: '4.+'
}
```

Create sample Java source file:

```
gradle/src/main/java/HelloWorld.java
 public class HelloWorld {
  public static void main( String[] args ) {
    System.out.println( "Hello World!" );
  }
}
```

Run Gradle job:

```
$ gradle run
:compileJava UP-TO-DATE
:processResources UP-TO-DATE
:classes UP-TO-DATE
:run
Hello World!
BUILD SUCCESSFUL
Total time: 3.532 secs
```

Inspect the build:

```
cat build/classes/main/HelloWorld.class
```

## Plugins

Written in Groovy

Expects to find code in specific directories (src/main/groovy/resources, test/groovy)

Spock is the testing framework used to test Gradle plugins

