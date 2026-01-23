# Autodoc for python

Many Python engineers write docstrings in functions and at the top of modules. For this reason, Autodoc is probably the most important feature of Sphinx. It enables you to autogenerate code documentation directly from the source of your Python project.

Docstrings and cross references can be applied at different code levels:

* Module level (long form at the top of the file)
* Function level
* Class level
* Method level
* Constants and variables level

To create a docstring, use Sphinx’s built-in inline markup – reStructuredText (RST). It’s a markup language similar to Markdown or MediaWiki. RST is suited well for writing documentation, and it integrates with Sphinx very nicely. It does not have a tremendously high learning curve, and we recommend you get a handle on the basics. You can also use Markdown instead of RST in Sphinx but not for Autodoc purposes. For links to more information, see More Resources.

Keeping the documentation with the code base is a benefit to many Python developers. Using Autodoc, the code and docs are in the same file, and the HTML is easily generated with Sphinx.

Follow these steps to use Autodoc:

1. Set Up Your Project

2. Add Code Documentation

3. Build the Documentation

## Set up your project

If you haven’t already, set up the skeleton of your Python MP. Instructions can be found here.

Basic Directory Structure
Most PyGradle projects have a structure like this:

```
project-name_trunk/
 project-name_trunk/
 ├── acl
 │   └── main.acl
 ├── build.gradle
 ├── gradle.properties
 ├── project-name
 │   ├── MANIFEST.in
 │   ├── README.md
 │   ├── build.gradle
 │   ├── docs
 │   │   ├── conf.py
 │   │   └── index.rst
 │   ├── setup.cfg
 │   ├── setup.py
 │   ├── src
 │   │   └── linkedin
 │   │       ├── __init__.py
 │   │       └── projectname
 │   │           ├── __init__.py
 │   │           └── triangle.py
 │   └── test
 │       └── test_project-name.py
 ├── product-spec.json
 └── settings.gradle

 7 directories, 17 files
 ```

Note

If your project name contains a hyphen, the hyphen is automatically removed from the named directory in the src folder. For example, the directory structure looks like: project-name > src > linkedin > projectname.

The docs Directory
As created by Python’s templates in mint product create, you should have a docs directory in the root of your subproject that contains two files: conf.py and index.rst.

```
project_name_trunk/project_name/docs
 $ ls ~/project-name_trunk/project-name/docs
 conf.py index.rst
conf.py
```

Sphinx’s configuration file is conf.py. Inspect the file and ensure that Autodoc is enabled:

```
docs/conf.py
 extensions = [
     'sphinx.ext.autodoc'
 ]
index.rst
```

The documentation index is index.rst. We recommend you include a header, short description, and contents tree. Alternatively, you can insert all your code documentation here.

For our purposes, we’ll take the recommended approach. The toctree directive is a Sphinx one. For links to more information, see More Resources.

```
docs/index.rst
 Welcome to project-name's documentation!
 ========================================

 This is where you'd put a short description of your project and contents tree.

 Contents:

 .. toctree::
    :maxdepth: 2
```

## Add code documentation

The recommended best practice is to add your documentation within the code using docstrings. You can add docstrings at the module level, function or method level, class level, and even to constants and variables. The docstrings are then converted to documentation in Sphinx. For links to more information, see More Resources.

The following files are examples of how to create code documentation:

triangle.py

triangle.rst

index.rst

`triangle.py`
Go to your Python source and add docstrings. A docstring is a string literal that occurs as the first statement in a module, function, class, or method definition. Docstrings must be enclosed by """triple double quotes""". Both one-line and multi-line docstrings are supported.

To format the docstrings, several Autodoc keywords are available: :param:, :raises:, :returns:, :rtype:, and more.

To create clickable cross references inside docstrings, use :class:, :mod:, :func:, and more. You can also reference objects in different files within the same project.

All the RST directives are available, such as Example usage:: and .. note::.

In this example, the Python file is named triangle.py .

`triangle.rst`
Next create an RST file, named triangle.rst in this example, for the above Python file. For Sphinx to autogenerate your file, use the .. automodule:: directive as shown below.

```
project-name_trunk/project-name/docs/pages/triangle.rst
 The Triangle Module
 ===================

 .. automodule:: linkedin.project_name.triangle
    :members:
```

After `sphinx-build` runs, this generated HTML is created for triangle.rst.

The `:members:` directive tells Sphinx to include all docstrings in the module for public members.

You can also be specific about which members you include. For example, by default, private members (names prefixed with the underscore _ convention) are not included unless you specify private-members. For more details on what you can do with Autodoc, see More Resources.

If you’re writing an RST that isn’t strictly code documentation, you can also use other directives, such as autoclass or automethod. These directives allow you to precisely control where docstrings are included, and is useful when constructing content from multiple modules.

`index.rst`
After you’ve added the RST file to your docs directory, reference it from your index.rst:

```
.. toctree::
   :maxdepth: 2
   triangle
```

## Build the documentation

PyGradle is Sphinx’s build system. It generates your documentation and uploads it to the Product Dashboard upon build and publish. If you want to preview your documentation locally before you commit, do so by running the following commands:

Turn on the virtual environment by using source ./activate:

```
$ cd docin_trunk/docin
$ source ./activate
(docin)[gmcmilla@gmcmilla-mn1 ~/docIn/docin_trunk/docin]$
```

Tip: If you’re getting a ./activate: No such file or directory, try first running a mint build, which runs a series of tasks defined in the product-spec.json and compiles the code. Use deactivate to turn off the virtual environment when you’re done.

Generate the documentation with sphinx-build. The sphinx-build script builds a Sphinx documentation set on your laptop.:

```
$ sphinx-build -b html docs ../build/docin/docs/html
```

View the HTML:

```
$ open ../build/docin/docs/html
```

See the Generated HTML for this RST.

Alternatively, you can preview it on a local web server. This can be useful if you want to get feedback on your docs:

```
$ cd project-name_trunk/project-name/
$ . activate
(project-name)$ tmpdir=`mktemp -d`
(project-name)$ sphinx-build -b html docs $tmpdir

(project-name)$ cd $tmpdir
(project-name)$ python3 -m http.server
Serving HTTP on 0.0.0.0 port 8000 (http://0.0.0.0:8000/)
```
Then, go to http://0.0.0.0:8000/ to view your docs.

## Troubleshooting Tips
Module Access
When you run Sphinx on a doc with automodule, you must have access to all the modules that are imported, and they must be present in the same virtual environment. Otherwise, the import command will fail at build time.

## Coding Conventions
As you add docstrings, be sure to follow the standard coding conventions:

Python Style Guide and Best Practices

If you don’t, here are some Python errors you might encounter:

indentation is not a multiple of four
expected 2 blank lines, found 1
expected an indented block
IndentationError: expected an indented block
whitespace after `(`
trailing whitespace
blank line contains whitespace
expected 2 blank lines
local variable is assigned to but never used
undefined name
See Wc-Test and its console logs for troubleshooting tips.

## Docstring Linking Issues
If your docstrings at the class, function, and method levels are not working properly, it could be due to the location of the docs directory. This directory should be at the Gradle sub-project level, rather than the top level of the Multiproduct.

This is because the docstrings must exist in the same virtual environment that Sphinx operates.

## Resources
RST quick references:

http://docutils.sourceforge.net/docs/user/rst/quickref.html

http://www.sphinx-doc.org/en/stable/rest.html

https://thomas-cokelaer.info/tutorials/sphinx/rest_syntax.html

http://www.sphinx-doc.org/en/master/usage/restructuredtext/directives.html#table-of-contents

http://www.sphinx-doc.org/en/stable/usage/restructuredtext/basics.html

Docstring quick references:

https://www.python.org/dev/peps/pep-0257/

https://thomas-cokelaer.info/tutorials/sphinx/docstring_python.html

Autodoc quick references:

http://www.sphinx-doc.org/en/stable/ext/autodoc.html

A tool for automatic generation of Sphinx sources (for example, sphinx-apidoc -o docs src): http://www.sphinx-doc.org/en/1.4/man/sphinx-apidoc.html

Examples for setting up an open source project with Sphinx:

https://pythonhosted.org/an_example_pypi_project/sphinx.html

https://media.readthedocs.org/pdf/brandons-sphinx-tutorial/latest/brandons-sphinx-tutorial.pdf

