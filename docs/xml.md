# XML

## Overview
      
XML is a general purpose information storage system, markup language
toolkit, open standard, and collection of other standards used to
author and manage technical documentation.  

XML itself does not DO anything. XML was created to structure, store,
and send information.

## Motivation and XML Benefits


Figure 1: Many Output Options

```
                                         |---->html
                                         |
                                         |---->pdf
 +----------+     +----------------+     |
 |source db |---->| transformation |---->|---->text (grep command lookup)
 | content  |     |    engine      |     |
 +----------+     +----------------+     |---->msword (roll your own docs)
                                         |
                                         |---->postscript (for printer)
                                         |
                                         |---->wireless (cell/pda)
                                         |
                                         |---->speech recognition
                                         |
                                         |---->language translation
                                         |
                                         |---->future
```

Figure 2. Write Once; Update Many

```
  +---------------+         |----->book 1
  | one paragraph |-------->|
  | changes       | update  |----->book 2
  +---------------+         |
                            |----->online 1
                            |
                            |----->online 2
```

The ability to update documents in many places (receivers) when data
sources have changed. 

- Online command lookup per software release. It's a lightweight html
  web page with hrefs to command reference pages. It will help online
  users easily find command descriptions.

- Helps writers accurately update and manage massive amounts of syntax
  examples. Command syntax is always changing. Applies to quality
  control and man hours spent on the docs. 

## XML Glossary

attribute: Defines a property of an element. It associates a name with
a value, which is a string of character data. One reason to use
attributes is to distinguish between elements of the same name, such
as setting a priority level. The generic syntax is as follows:

```
name = " value "
```

CSS: Cascading Style Sheet. A simple formatting strategy. A separate
document (not itself XML) that contains mappings from element
names to presentation details (font style, color, margins,
...). CSS is limited to cases where the output text must be in
the same order as the input data. CSS cannot sort data. The sorting
must be done in the XML file first. A "stylesheet" in XML is not
a CSS stylesheet. Transformation is more powerful than CSS.

document: Consists of one outermost element that contains all the
other elements, plus some optional administrative information at the
top. A document has two parts: prolog and element.

DTD: Document Type Definition. A pass or fail test for a document. DTD
is the oldest and most widely supported schema language. It declares
all the elements that are allowed and contained in a document. A DTD
enforces and formalizes a markup language. Alternatively, the WC3 XML
Schema has a more flexible feature set and is gradually replacing DTD.

  DTD limitations:

    - Cannot check if a required element has empty text or follows the
      wrong pattern. 
    - No support for namespaces

element: The building block's of XML. XML's markup divides a document
into separate information containers called elements. Similar to
Tupperware containers, elements seal up the date completely, label it,
and provide a convenient package for computer processing. Elements can
nest inside other elements. An element's generic syntax is as follows:

```
< name attribute1 attribute2 ... >
content
</ name >
```

markup: Symbols embedded in text used by XML to enhance the meaning of
information in certain ways, identifying the parts and how they relate
to each other. Just as skeletons give us vertebrates shape and
structure, markup does the same for text. 

node: Every point in a tree (element, text, or something else) is
called a node. 

root element: The base-level element of a document. Containing all the
other elements in the document. 

schema: A pass or fail test that describes the structure of an XML
document. Ensures that a document fulfills a minimum set of
requirements, finding flaws that could result in anomalous
processing. A schema is a quality control document. An XML-based
alternative to DTD. Provides much more detailed control over a
document, including comparing text with a pattern. There are several
competing kinds of schema. The W3C sanctioned version is called "XML
Schema". The XML schema language is also referred to as XML Schema
Definition (XSD).  A schema becomes important to have in a
multi-author environment where the XML system is collecting
information from a group of people.

An XML Schema:
```
defines elements that can appear in a document 
defines attributes that can appear in a document 
defines which elements are child elements 
defines the order of child elements 
defines the number of child elements 
defines whether an element is empty or can include text 
defines data types for elements and attributes 
defines default and fixed values for elements and attributes 
```

Following is a simple XML document described by a simple XML schema:

```
XML document
------------   

<?xml version="1.0"?>
<note>
<to>Tove</to>
<from>Jani</from>
<heading>Reminder</heading>
<body>Don't forget me this weekend!</body>
</note>

XML Schema
------------   
<?xml version="1.0"?>
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema"
targetNamespace="http://www.w3schools.com"
xmlns="http://www.w3schools.com"
elementFormDefault="qualified">

<xs:element name="note">
    <xs:complexType>
      <xs:sequence>
        <xs:element name="to" type="xs:string"/>
        <xs:element name="from" type="xs:string"/>
        <xs:element name="heading" type="xs:string"/>
        <xs:element name="body" type="xs:string"/>
      </xs:sequence>
    </xs:complexType>
</xs:element>

</xs:schema>

The note element is said to be of a complex type because it contains other
elements. Only complex elements can have attributes. The other elements (to, from, heading, body) are said to be simple
types because they do not contain other elements. You will learn more about
simple and complex types in the following chapters.
```
Another simple element example:

```
XML document
------------
<lastname>Refsnes</lastname>
<age>34</age>
<dateborn>1968-03-27</dateborn> 

XSL stylesheet
--------------
<xs:element name="lastname" type="xs:string"/>
<xs:element name="age" type="xs:integer"/>
<xs:element name="dateborn" type="xs:date"/>  
```

stylesheet: Dictates how document elements should be formatted when 
they are displayed, whether it be in a word processor or a browser.
You can apply different stylesheets to the same document depending
on the environment, thus changing the look without affecting the
underlying data.

transformation: A process that breaks apart an XML document and builds
another one. Can sort elements, discard parts, and generate new
headers and footers for pages. Usually done with XSLT. Used for print
formatting, conversion to HTML, and generating a TOC or
index. Transformation requires two things: the source document and a
stylesheet. The stylesheet is a recipe for how to "cook" the XML and
arrive at a desired result. 

trees: Elements can be represented graphically as upside-down,
tree-like structures. Documents are parsed by traversing their
tree. You start at the root, move down the first branch to an element,
take the first branch from there, and so on to the leaves (character
data). Every XML document has only one tree. Every point in a tree
(element, text, or something else) is called a node. 

Unicode: The XML character and encoding set. This markup is culture
agnostic. It is not limited to the Latin alphabet or English
language. Supports hundreds of scripts, such as Chinese, Arabic, and
many more. XML provides a shorthand called character entity
references. If I want a letter "c" with a cedilla, express it
numerically like this: &#224 (decimal) or &#xe7 (hexadecimal). 

XML: Extensible Markup Language. It's is a general purpose information
storage system, markup language toolkit, open standard, and collection
of other standards used to author and manage technical documentation.

XML itself does not DO anything. XML was created to structure, store,
and send information.

The following example is a note to
Jose from Steve, stored as XML:

```
<note>
<to>Jose</to>
<from>Steve</from>
<heading>Reminder</heading>
<body>Don't forget me this weekend!</body>
</note> 
```

The note has a header and a message body. It also has sender and
receiver information. But still, this XML document does not DO
anything. It is just pure information wrapped in XML tags. Someone
must write a piece of software to send, receive, or display it.

XML editor: The most important tool in the XML toolbox. It lets me
read and compose XML. Often comes with error checking features. Make
sure it supports the character set used by the document. In most
cases, it will be UTF-8. For a free Emacs editor, see http://www.lysator.liu.se/~lenst/about_psgml/

XSL: eXtensible Stylesheet Language. Development started with XSL and
ended up with XSLT, XPath, and XSL-FO. XSL consists of three parts:

  o XSLT is a language for transforming XML documents 
  o XPath is a language for defining parts of an XML document 
  o XSL-FO is a language for formatting XML documents 

Think of XSL as set of languages that can transform XML into XHTML,
filter and sort XML data, define parts of an XML document, format XML
data based on the data value, like displaying negative numbers in red,
and output XML data to different medias, like screens, paper, or
voice. 


XSLT: Extensible Stylesheet Language for Transformations. A
programming language optimized for transformation. XSLT stylesheets
are used by XSLT engines to transform one XML document into another
document (html, pdf, doc, text, ...). In the transformation process,
according to instructions in the XSLT, the XSLT engine selects content
from the XML source, and places it in the output document.

 How XSL works:

 ```      
 xslt/html stylesheet----->xslt engine---->html output
                                ^
                                |
                                |
                          xml documents
                                |
                                |
                                v
 xslt/xsl-fo stylesheet----->xslt engine---->xsl-fo---->fo engine----->pdf output
```

XSL-FO: Extensible Style Language Formatting Object. The style
language for formatting objects. Use XSLT to map elements to
formatting objects. An XSL formatter converts the formatting objects
into pages, paragraphs, graphics, and other presentational
components. XSL-FO uses the same terminology as CSS to create a nice
looking page. For a good XSL-FO formatter/processor, see the
Formatting Object Processor (FOP) at http://xml.apache.org/fop/index.html. 
FOP is written in Java and comes bundled with a Java-based parser (Xerces)
and a Java based XSLT transformer (Xalan). FOP outputs PDF by default,
but MIF and PostScript might be available now. 

With XMLSpy, generating PDF output from an XML file is a two-stage
process. In the first step, an XSLT transformation (or stylesheet) is used to
transform the XML file into an XSL-FO file (FO file, for
short). XSL-FO is a markup language, similar to CSS, that provides
presentation information for a variety of media, including paged
media. The FO file, therefore, contains the page sequencing and layout
information (markup) that will be used to generate the PDF. In the
second step, an FO processor uses the FO file as input to generate the
PDF. 


well-formedness: An XML parser reports syntax errors in markup, such
as mismatched tags, malformed tags, and illegal characters. For
example, the start and end tags must match exactly in case and
spelling. Reserved markup delimiters include ``<, >, &``.
For a good cli-based checker, see http://www.jclark.com/sp/

A well-formed XML document is a document that conforms to the XML
syntax rules:

   o must begin with the XML declaration 
   o must have one unique root element 
   o all start tags must match end-tags 
   o XML tags are case sensitive 
   o all elements must be closed 
   o all elements must be properly nested 
   o all attribute values must be quoted 
   o XML entities must be used for special characters 

validation: Means an XML document adheres to an assigned
schema. That is, the elements and sequence appear to be correct, as
well as the element "contents" and their attributes. 

The difference between a well-formed XML document and a valid one. The
difference is that a well-formed document need only follow the general
rules for XML, while a valid file must conform to a schema as well as
being well-formed.

## Phased Approach

4.1  Phase 1--Research and CSS Testing

  o Purchase several XML books
  o Experiment with CSS. Content vs Presentation.
  o Start the XML Project Plan

4.2  Phase 2--Low Cost XML Testing

  o XMLSpy. Basic tutorial. Created schema, xml file, transformed into
    html. Initial impressions: The authoring environment is difficult
    to work in. Not WYSIWYG at all. Too many windows. Switching views
    in the main area is a good feature, especially the text
    view. Having a built in transformation engine was handy. I like
    pressing F10 and F8 to transform or validate a file. So far don't
    see a content repository or a solution for a multi-author
    environment where multiple "books" share the same content.

    Note: I liked how xmlspy auto inserts the end tag. There's no find
    and replace feature in text view (unlike Framemaker). I like the
    command completion feature while manually editing text.

  o PSGML. Decided not to use it. Hasn't been updated in 3 years. No
    support for Schemas. 

  o nXML mode. An emacs plugin (similar to psgml) that uses Relax NG
    schema language http://www.thaiopensource.com/nxml-mode/
    http://www.relaxng.org/

    Note: Arbortext claims it does not support Relax NG

    After that, might use:

       Xerces, http://xml.apache.org/

    Language creation and resume conversion. 

  o Daniel Veillard's xmllint and xsltproc. Relax NG-aware processing
    applications. Code is provided in the libxml2
    (http://xmlsoft.org/) and libxslt (http://xmlsoft.org/XSLT/)
    distributions

  o Test 3. DocBook 

## Equipment Evaluation and Purchase

```
Editing Tool     Cost      Platform Supported
---------------------------------------------
psgml emacs      free      Unix
XML spy          $200      
Morphon          $150
Epic*            $700      Unix/Windows
Xmetal*          $500      Windows
```

* = A suite of editing systems for high-end formatting and
collaboration. Procket most likely needs. 

IE 5.1 and above is a good XML viewing tool. IE also contains an XSLT
transformation engine. However, it's too risky to serve XML documents
and expect end user clients to format them correctly. Therefore, at
the moment, it's safer to do the transformation on the server side
and just serve HTML. 

CSS is good for displaying formatted documents on computer
terminals. However, only CSS1 is widely implemented. Forget about CSS2
and CSS3.


## Design Issues and Tradeoffs

Consider the following when choosing an editor:

  o Weigh the benefits of enforced structure (see Xmetal) against the
    interruptions in the creative process (ArborText's Epic).

  o A specialized table editor is a godsend. Tables in XML are complex
    structures. They are not fun to work with in markup. 

  o PDF generation. High quality PDF is difficult to achieve. Epic
    uses FOSI while XML Spy uses XSLT. 


With XML there's a more compelling
reason to do away with the "first instance" standard to any of our
guidelines. Our audience in many cases will not read the doc in
order in hardcopy or in XML chunks. 

Chunking Awareness and Tagging Methodology

Hidden Proprietary Coding. Truly Exchangeable?

Vendor Dirty Laundry and Bugs: What doesn't work?

In-House Expertise vs Professional Services


##  Tools Costs


## Headcount and Maintaining the System


## Notes from Meeting with Juniper XML Tools Person

I)

XML RESEARCH--JUNIPER TOOLS (BRENDA, LIZ)
1/14/2004

Juniper Contacts -- XML Research
	* Liz (liz@caltonia.com)
	* Brenda Dupolin (brenda.dupolin@juniper.com?)
	* Lunch 11:30 at Macaroni Grill, Milpitas

Application:
	* Arbortext Epic (Headquartered in Michigan)

Other Apps Considered:
	* Documentum
	* Lightspeed
	* Zyvision (used primarily for magazine and .pdf output)
	* Arbortext (best app for .pdf output)

Arbortext Epic:
	* Performance suffers over DSL
	* Supported on Windows, Solaris, ``<another environment>``
	* Arbortext Epic export Formats:
		- Word translation format (RTF)
		- HTML
		- PDF
		- Palm
		- TXT
	* Cost: 
		- Arbortext $680/seat for 1 year
		- $300/seat annual renewal fee
	* Arbortext Conference in Atlanta May 2004
	* Training classes in Michigan

Free Applications:
	* There are freeware existing, but they are only for the
front-end 
	authoring of XML code (XV, EMACS, etc.)
	* Arbortext Epic has available free trial edition.

Juniper resources to convert to XML:
	* Arbortext, when they merged with another company
	* Oracle, was adopted internally when XML conversion initialized
	* Liz support from 11/2000 to 1/2004 as XML Tools support (FT?)
	* Brenda part of Dev team 11/2000 to 1/2004
	* They have not converted all docs
	* All writers author in XML

DTD Applications and Creation
	* XXL (?) is used for style templates
	* FOSI (Formatting Output Specification Instance)
	* This is not a Wysiwyg application

"Chunking"
	* Chunking is defined by the person inputting content
	* Chunk of information can as small as a single word
	* Passages of text and/or illustrations can be "swapped out"
	for the export of differing docs

XML Training:
	* Costs $100/hour
	* Using outside vendor may not get us exactly what we want
	(using inside staff enables a finer definition of our needs)
	* Liz recommends taking Arbortext training classes
	* Training classes provides the app's *real* capabilities and
	limitations

Content Management apps:
	* Oracle (we already have)
	* IFS
	* Interwoven Teamsite (used by Juniper), able to display change
	history; this function may not be available on comparable apps
	* CVS is the low-cost solution

Exterior Search Engine:
	*This is the search tool that enables customers to search
through
	Juniper's doc content
	*Inktomi (used by Juniper)
	* Liz is satisfied by Inktomi's performance

Sharing Docs With Training:
	* Juniper doesn't share content with their Training dept
	* Power Point conversion to XML is not pretty

Reference Material:
	* XML Overview:
http://www.simultrans.com/seminars/seminar200006.htm
	* Arbortext: http://www.arbortext.com/
	

II. 

Email from Brenda at Juniper

```
From: "Brenda DePaolis" <brenda@juniper.net>
To: "Greg McMillan" <gmcmillan@procket.com>
Subject: Papers From Liz
Date: Wed, 14 Jan 2004 13:36:10 -0800

Hi Greg,

Thanks for lunch. It was great talking to you and Clyde. The freeware that a friend of mine is using is called XMLmind. Here's a link: http://www.xmlmind.com/.


Here's the papers that Liz wrote:

Beyond Theory: Making Single-Sourcing Actually Work 
ACM SIGDOC 2003
Oct 12, 2003, San Francisco, CA
Full Paper, (PDF)  http://www.caltonia.com/pres/p25-fraley.pdf
Presentation Slides, (PDF) http://www.caltonia.com/pres/sigdoc-2003oct13.pdf


Branched Libraries and Rapid Release Single-Source Environment Implementation 
Arbortext International User Group Conference (AUGI) 2003
May 16, 2003, San Antonio, TX
Initial Abstract (PDF)  http://www.caltonia.com/pres/augi-2003-abstract.pdf
Presentation Slides, (PDF)  http://www.caltonia.com/pres/augi-2003-abstract.pdf

----------------------
Brenda DePaolis
Technical Publications
Juniper Networks, Inc.	             
(408) 936-2441
```

## DocBook Tips

Getting started:

(1) Install Java version such as 1.3 or 1.4
(2) Install Apache Server
(3) Install Xalan & Xerces Parser & XSL Processor
(4) Download DTD & Stylesheets
(5) I then created scripts that referenced the correct Java Environment
DTD, HTML, and XSL
 
## References

XML Basics
http://infohost.nmt.edu/tcc/help/xml/

PSGML for Emacs
http://www.lysator.liu.se/~lenst/about_psgml/

James Clark's NSGML cli error checker
http://www.jclark.com/sp/

http://www.webstandards.org/

http://www.webreview.com/

Regarding Arbortext Epic:

- Noticed how their "Specifications" page looks so much like a Cisco html document.

- We discovered Epic also runs on Solaris

- As far as handing graphics, it does not support EPS but only
EPSF, which the current version of A.Illustrator no longer
supports. The difference between the two formats it that EPSF
has on top of the EPS code an additional 1-bit raster 
interpretation of the graphic for Wysiwyg display

Epic's overview and other links:

http://www.arbortext.com/frame.htm?wstat=0&curl=http://www.arbortext.com/html/epic_editor_overview.html&ms=349

WC3 XML Recommendation
http://www.w3.org/TR/2004/REC-xml-20040204/

What is XML?
http://www.xml.com/pub/a/98/10/guide0.html

James Clark is one of the early pioneers of SGML and XML. 
Created the best parsers, validators, and SoftQuad.
http://www.jclark.com
