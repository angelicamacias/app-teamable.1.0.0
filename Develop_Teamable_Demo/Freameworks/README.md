What ara JS Freameworks and why they are useful? 
They build these useful JS frameworks using vanilla JS itself 


- Easier to manage your code 
- Abstrac away the complexity for working with HTML 
- You can use these programs to write your applications more easily and faster 

React.js:
    - Doesn't enforce a specific projects structure
    - Works very efficientely with the DOM 

Angular:
    - More full-fledge framework

Vue.js:
    - Ligthweight and flexible 



Open source

- Open source is very common in the tech world
- In almost all cases, open source software is free
- Software, where the source code is publicy accessible
- People can modify and share and contribute to the source code 


Libraries 

- Collection of code targeted for specific common problems 
- Open source and free to use 

Libraries and frameworks 

- Frameworks and libraries are an essential part of software development 

Where to access those iberies or frameworks? 


Repository 

Is a place, an actual storage location where you store those programs. 

- A storafe location for software packages
- Developers can publish their programs to this repository 
- Others can download them from the repo and use it in their app 

-- Repository packages

Programs usually consist of hundreds of files

All files, scripts etc ehtat make up the program get packaged into 1 single file or package 

1) Download form a package repository 
2) Use the framework / library in our program 

Each programming language has its own package type and package repository 

## Npm 

npm: stands for Nde Package Manager 
npm: is a package manager 
manages software packages 
Can be used to install (download), upgrade, configure packages 
nps registry is a repository form JavaScript packages

-Registry: The service that makes all packages available (collection of repositories)

-Reository: The actual storage


--- A good libary has good documentation, like how to use the libray or what functions are available 


Any JS package, any software has a version, helps users and software providers to keep track of the changes and modifications.
Know when and what update have been done

For each new relese/new version the maintainer of the software provide release notes
 - Release
 Basically when you release a new version of 
 - Release notes
    -List of what has changed
    - Explain new features added
    - Issues resolved which improvements 

## Version scheme

In software development a common version format has been established

The version has threee part version number

```
3.2.40
```
the name of this version scheme is semantic versioing and widely adopted 

3: Mejor version 
- Big changes (features, bugfixes)
- Incomparible changes that affect apps that use older versions 

2: Minor version
- Add new functions 
- Add new bugfixes 
Minor changes 
- Changes are backwards compatible 

40: Patch version 
- Usually only for bug fixes 
- Which are backwards compatible 


--- A software bug is an error or flaw in the software that causes it to produce an incorrect or unexpected result 

## Validate the email address format
 
 <script src="https://unpkg.com/validator@latest/validator.min.js"></script>

 It's not going to download it locally on our computer, it is going to download it directly into the browser, not on our laptop. 

 We can change *latest* for the version: 13.7.0

 ## Tags

 Allow you to identify specific release versions 

## Summary

 - Include library in our application 
     Complete code will be availbe for you use in your code 
 - Use validator object (as defined in the documentation) to validate the email input  
     The exact lofic of validating the email is done in the *IsEmail()* method
     The functions fives the calidation result back by by returing true or false
    
# Introduction to NPM CLI

This is a program that we install locally on our laptop, and when we use it to download library or package from the NPM registry, it will find the library with that name that we are searching for. 
 
NPTM  is a technology that provides these two functionalities:
    - The packages repository for JS packages
    - The CLI tool to interct with the registry to install, upgrade, remove, publish packages. 

Pick date form a datepicker 
Downland JS packages locally instead of referencing public URL 
    - Install locally 
    - Reference as local script

    1) Install npm CLI tool locally 
    2) With commands you can interact with the npm registry 
        - Upload packages
        - Download packges
        - Upgrande package version 
        - Downgrade to a previous version 



    # Both variants have benefits 

    - Pulling form a public URL (CDN)
    For popular libraries: Will be cached on most browsers, because it's used by a lot of other websites. 

    - Download locally 
    Be suere that resource is availab
    Package and minify your whole code incl libraries into 1 file 

### How to download these pacakges? 

Use a dedicate tool for managing packages: Package Manager 
Helps for:
- Download them 
- Update the versions locally
- Remove the libraries locally 
We can use:

command NPM install and just the name of the library


NOTE: The most popular package manager tool for JS is NPM: Node Package Manager 

# Command line interface and operating system basic explained


## What is CLI? 

Command Line Interface

On ever operting system (OS) we have: 
    - Graphical User Interface = GUI 
            You have graphical elements to interact with, like buttons, icons, etc
            You were able to do everyting you wanted with GUI 
    - Command Line Interface = CLI 

Both are interfaces to interact with your OS
 
## CLI commands

- pwd: print working directory
            Prints the full path of your current location in the file system 
- cd: cahnge directory 
            Allows you to move between directories
- ls: list
            List files 
- mkdir: make directory 
            Creates a new folder 
- rm *file1* = Delete or "remove" *file 1*
- rm -r *dir1* = Delete *dir1* and all its contents recursively 

Downloading: Obtatining a copy from internet 
            Binary= File whose content is in vinary format consisting of bytes. 
            By downloading, the invary file just sits on your computer without doing anything.
Installing: Giving insturctions to take the downloaded info and update the OS


cURL

Client URL 

CLI tool that enables you to download or send data over the internet 


1.- Download the install.sh file with cURL 
2.- Execute install.sh file to actually install homwbrew on our computer
=-----

Install packages

if we want a specyfic version then: 
```
npm install validator@13.7.0
```
if dont, just
```
npm install validator
```
And here we will have the last version 


## node_modules

Packages are put in ./node_modules folder of the current package root.

It's just a folder created by npm and a way of tracking each package you intall locally

The module system is a fundamental part of how Node.js applications are written and strucured.

A module is a self-contained file or directory of related code, which can be included.

Makes the code more managaeable:
Instead of having 1 big file, split the code up in separate files.

Its call "module" because youre building a modular application with it. 

## package.json

Package.json file basically servers as a docuementation
We know exactly, what livraries we're using with which version in our application wihout even having to go to node modules and look inside every. 

json = Java Script Object Notation 

Syntax is derived from JavaScript object notation, but JSON is text only. 

It's a lightweight format for storing and transporting data

.json **Provide:**

- Easy syntax, human-readable text
- Easy to read for programming languages


JSON is language-independent, but heavily used in JavaScritp
JSON format is used for all types of configuration data

```
{
  "dependencies": {
    "validator": "^13.7.0"
  }
}
```

JSON syntax is subset of the JavaScript syntax
JSON data is written as name/value pairs (aka key-value pairs)


JSON {"name":"Mike"}
JavaScript {name:"Mike"}


## package.json File

The heart of any JavaScript project

It holds various metadata relevant to the projecto and used to manage the project's dependencies scripts, version and more
Dependencies property lists all the required packages for your application to function. 

### charset Attribute

Specifies the character encoding for the HTML document
It is recommended to use the UFT-8 character set, which covers almost all of the characters and symbols in the world. 

### npm install 

INstalls all modules insted as dependencies on packages.json 

```
npm install
```
It will actually try to find package.json file in the folder, where we are executing this npm install command and it will go and install everything that is listed inside package.json. 

### Adding caracter ^  in version section 

Using a cracter ^ sign means that we can accept minor an patch releases, but not a major release when updating our package. 

## Package-lock.json 

Used to lock dependencies to a specific version number 
Allows future developers to install the same dependencies with exact same version in the project. 


### Necessary dependecies for Vue App 

Vue > Vue.js freamework
core-js > Ensures that JS code works on all browsers and browser versions
compiler > compiling Vue.js to vanilla JS
cli-service > providing vue.js CLI commands build, serve. 

# Create UI with VueJs
UserInterfase



### npm install 
npm install will find package.json file, see that we have added some dependencies and it will basically just go  ahead and download all of them and create node modules folder automatically and put those downloaded libraries in there. 

## Create basic vue.js structure 
Root componment -> App.vue: Parent component of the app containing all child components. 

index.html: single div element to mount the vue component into 

main.js: Create application instance and mount the root component into the DOM 


## error

'./src/main.js': looking for thear structure of having a source folder 

"../" ----> "./"


## Declaring component's state and bind data with "v-bind"

## data function
Used to declare the reactive state of component. 
Return the initial state
It's a JS object that will be made reactive by Vue, when the functions is called on creation of the component. 

---> Reactivity meaning: when you modify the value of them, the corresponding view updates. 

 But each time it uses a separate component and also creates a new instance. When we use a data function at that time each instance maintains a separate copy of the return data object.


## Declaring methods and bind with "v-on"


methods functions

Used to add functions to a component instance 

## v-on or @

Another built-in special attributes that vue provies 

@ is shorthand for "v-on"

Attaches an avent listener to the element

### Attribute bindings

To bind attributes, we use v-bind, v-on 
We can't use mutach {{}} syntax

### Text interplation 

Use mutache syntax to vind the values


### two-way binding on form input elements

difference between vanilla js and javascript freamwork (like vue js)

Is that the freameworks make it actually easier to communicate with HTML code to connect to the HTML code. 
IN this pure JavaScript, you have to use this document objecto and basically go tho


### 2 core features of Vue 

--> Declarative rendering
    Vue extends standard HTML with a template syntax that allows us to declaratively describe HTML output based on JavaScript state

--> Reactivity
    Vue automatically tracks JavaScript state changues and efficiently updates the DOM when changes happen. 

Template syntax

Under the hood, vue complies the templates into highly-optimized JavaScript code 

One of those funtionalities is that on the input field, on this input element. 

### v-model
Updates the template whenever the model (data) changes and updates the model whenever the template changes. 
It reduces the complexity of keeping user input conistent with the application data model. 


## Toggle element visibility with "v-show"

### v-show

Toggle the element visibility depending if the value is true or false... "display the element or not"


creates a two-way binding

It binds the value of the input element to the property of the component's data. 


It's comon to use "is" or "has" variable names for boolean variables

In dara object, you define the initial values
These values are updated later, based on the changes. 

**this** refers to the component instance 

 ## Server frontend

 ### "serve" command
 - Compiles Vue.js into JavaScript
 - Starts a dev server 

 ### "build" command

 Produces a production-ready bundle in the /dist directory
 compiles Vue into JS and manifes the JS/CSS/HTML 

 HTML/CSS/JS is manified 
 Minification = Process of minimizing code by removing any unnecessary characters, spaces etc

 Why? to reduce load times, minified versions reduce file sizes dramatically 


### created()

Is called when the component instance was created 

# Application Flow 

- Created() gets called, when app component is created
- Calling fetchUserProfile() function 
- Which makes the HTTP request to the backend
- Backend will send back the user data
- We set or update the component's state with the user data 


# Send updated data to backend 


connection URL / mongodb://localhost:27017

mongodb             The protocol
localhost           The hostname or ip address
27017               The port number 


## Create a new mongo client

Creates a new client that can talk to the mongo server to the URL we provide
We can use that client object and use its methods to connect and interact with the server 

## Logic

Access payloead from request
Chech if payloead is empty? 
    - if true => send error reponse
    - if false => 
        1-save dara into DB
        2-send reponse 


### Unique "id" field

Each document stored in a collection requires a unique_id field
If not provided, the MongoDB driver automatically generates an id for the _id field. 

### insertOne()

Inserts a single document into a collection
It's only for insetion not for updating documents 


### deleteOne()

Removes a single document from a collection 
{} includes the filter or deletion criteria


### updateOne()

Updates a single document within the collection based on the filter

1st paramter: filter = the slection criteria for the update
2nd paramter: update = the modifications to apply 
3rd parameter: upseret = takes a boolean value updateOne()
    if true, updates the document if no documents match the filter


### findOne()
 
- Returns one document that satisfies the specified query criteria on the collection 
- If multple documents sarisfy the query, the method returns the first document


### null
 
The value "null" means that no value exists


## Destructuring

Makes it possible to unpack values from properties from objects or arrays into distinct variables 













