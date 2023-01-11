## HTML stands for Hyper Text Markup Language

Why does "hyper text" mean?
- Refers to links that connect web pages to one another 
- Hypertext is a text that contains links in web pages that redirets you to other web pages.
- These likes itserlf are called "hyperlinks"

HTML consists of different HTML elements, which you enclose or "mark up" your website content.
These HTML elements are set off from other texty by "tags", which is element name surrounded by "<" and ">"


### HTML Elements

HTML element is defined by a start tag, some content and an end tag 
```
<tagname> Content goes here... </tagname>
```


## Block elements 

Take up full width.
Examples: 
    div, p, ol, ul, li, h1-h6, etc. 


###  <div>  

Defines a division or section on an HTML document
Used as a container for other HTML elements. 

### <b>  
Makes the text blod 

### <botton>  
Defineas clickable button 

### <i> 
To display text italic 

### <p>
To define a paragaph 
Browsers automatially add a single blank line before and after each <p> element. 

### <ul> or <ol> Element 

<ul> to define an unordered list. 
<ol> to define an orderd list. 

###  <li> 
Defines  a list item 
Used inside orderd or unordered list. 

### </img>
Imagenes 
- scr attribute
Specifies the URL ot the image.
Possible vaules:
- An abolute URL points to anthoer web site. 
- A relative URL points to a file within a web site. 
### <a> 
Defines a hyperlink, used to link from one page to another. 
## Types of elements

### Lnline elements

Only take up as much width as necessary.
Examples: 
    b, i, img, button, etc. 
This is a <span> element inside a paragraph

## HTML attributes
All HTML elements can have attributes
Attribures usually have name/value pairs 
Provide additional info about HTML elements. 

### href attribute
Specifies the URL of the page the kink goes to 

### <input>
Specifies an input field where user can enter data. 
Depending on type attribute the element is displayed in different ways. 

## Indetation 
Use tab key to ident 
Refers to the spaces ar the beginning of a code line 
This is the minimum that the code of HTML need to
Improves readibility of code 
Nothing specific to HTML 

## Self-closing tags
Usually tags have a starting and closing tag.
Elements that can not have content, don't require a closing tag. 
So these can ve self-closing. 

```
<script>
</script>

<body>
</body>
```

For call a code js we need to add it in this way 

```
<script src="app.js">
</script>

<body>
</body>
```

For say that the code is into a folder we use "/":
We can reed the code app.js is into the folder javascriptproyec 

```
<script src="javascriptproyec/app.js">
</script>

<body>
</body>
```

NOTA: For save the multiples files we can "group files": logically, per file type.
NOTA: The locations where the files are living or files exist is very important in programming, because everyting is so linked, you have to make suer the locations are correctly set. 

## Custom Functions
Functions that you define

## Built-in fuctions
Functions built into JavaScript language
Common logic that others can re-use in their own software

### Bulit-In array methods
pop() = remove last element
push() = add new element (at the end)
split() = splits a string into a array of substrings
## Methods
Methods are actions that can be performed on objects. 
Function definitions on an object. 
## Date object
You can use the date object and its methods to work with dates and times.
It's not a real built-in data type of JavaScript
================================================================

# CCS

## <style>

Used to define style (CSS) information for a document. 
p = the selector. Pointing to the HTMl element you want to sytle. 


### syntax

h1 {color:blue; font-size:12px;}

h1: selector
color: property 
blue: value
font-size: property
12px: value 

### border property 

Shorthand syntax for:
     border-width     border-style    border-color 

### Margin property 

Used to create space around elements, outside of any defined borders.

## id Attribute

Listed to specify a unique id for an HTML element. 
Only 1 element with the same id can exist in an HTML document. 

### id selector

Uses the id attribute of an HTML element to selecto a specific element. 
Hash (#) character is used select element by id. 

### class attribute

Used to specify a name for an HTML element.
Multiple elements can share the same class. 

### Class selector

Uses the class attribute of an HTML element to select HTML elements.
Dot(.) character is used to select elements by class. 

# Website layout 

There are many different layouts, but the following structure is very common. 

-> Basic layout
    Header
    Navigation
    Aside 
    Sectio 
    Footer

This can ve donE via CSS

- How to style with CSS?
1) Using float, width and oteher positioning.
    Flexboc layout: You work with a flex container and flex items. 
    Makes it easier to design flexible reponsive designs. 

    Grid layout: Grid-based layout system, with rows and columns 
    Also makes it easier to design flexible web pages. 

### flexboc

- Parent element (container)
This div should become a flexible container 

- Flex items (child elements)
Define the flex-direction

NOTE: 
Different version of flexbox. Like any language, CSS is developed improved by its maintainers. 
The value was changed when a new specification was released.
**Flex** *is the latest one.*

### Attribures for parent and childs

attribures for the parent container 

The flex container properties are: 
- flex-direction
- flex-wrap
- flex-flow
- justify-content
- align-items
- align-content

Attribures for flex items

The flex item properties are:
- Order 
- Flex-grow
- Flex-shrink
- Flex-basis
- Flex
- Align-self


