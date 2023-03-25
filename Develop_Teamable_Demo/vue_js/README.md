How do we make sure that our code will work for all users? 
    
# core-js:  
    Makes sure ehat our code works in all older browsers. 
    Includes "polyfills" for the newest JavaScript versions.
    
    We can write with the latest JS syntax, but at the same time be sure that our users can use a functioning web app. 

    We need to include core-js or similar library, no metter JS framework we use. 
    
### js 
Is basically an entry ponint JavaScript because this is where we initialize vue.js usage in out application

One big avantage of using "import" syntax, insted of the script reference in index.HTML file is that, we can actually pick and choose exactly, what we want to import form that library

Vue.sj allows us to build the entire component in one file. 
Structure (HTML), style (CSS) and functionality (JS)

<template> <script> <style>

A freamework usually defines the backbone of your application. Defining the structure of your app. 

We use the import and export keywords to share and recive functionality respectively across different modules.

Every module:
    - exmport: With export, we can export code (variable, object, functions), which then can be imported in other JavaScript files. 
    - import

### The application instance

Every Vue appp starts by creating a new application instance with the "createApp" function. 

### The Root component 

App is our root component

Every Vue app requires a "root component" that can contain other components as its children


### Mouting the app

An application instance wont render anything until its .mount() mehtod is called 

# How to run ot execute a Vue.js app?
Browser only understands basic JavaScript, it understands the manila JavaScript, but browsers can't interpret syntax of frameworks.

Different browser versions can interpret different version of plain JS 

Browsers no matter which version, can not understand framework syntax. 
Browsers can only understand plain JavaScript 

## Transpiling 

Is a process of interpreting one programming conveting a higher level language into another higher level language
Converting to a different version of the same language

## How do we tranpire vue js into plain JavaScript code?
Vye.js hav its own library for this use cas, specifically called compiler-sfc


### vue-cli-service issue on Windows
If you get an error in terminal, "vue-cli-service is not recognised as a command", to fix this issue, follow these steps:

delete node_module entire folder
delete package-lock.json file
After deleting them from the root folder, run the following commands

npm cache clean --force
npm install
npm run serve

## commands for Vue.js

- Serve command
    Compiles or transpiles Vue.js to vanilla JavaScript
    Starts a dev server and serves the application to the browser 

note: see what the name of the command is or the script you can jus do npm, run name of the script and that's it


Vanilla:
In computer science, vanilla is the term used to refer when computer software and sometimes also other computing-related systems like computer hardware or algorithms are not customized from their original form.

Custom software development:
Is the process of designing , creating, deploying and ma



## Basic Folder structure

Auto-generated folder, containing all installed libraries for our app

- Source folder: It contains all the vue.js components and JS files
- Public folder: Index file is located here as well as any other static assents 

### npm scripts

Convenient way to bundle common shell commands for your project. 

Benefit: Commands are shared amongst everyone using the codebase, ensuring that everyone is using the same command with same configuration options.

for run the pacakage: 
---> npm run serve 

## Vs structure

In Vue.js you have to or it's the best practice to structure your code into small sections. 

Components allow us to split the UI into independent and reusable pices. 

Allows us to think about each pices in isolation 

## Register a component

A Vue component needs to be "registered" so that Vue knows where to locate its implementation when it is encountered in a template. 
The registred component is only available in the current component (=local registration)

# Parameterize the values

### Parameterize our components

This makes our components reusable 

### Text interpolation 

- Double braces  define placeholders for data
- The most basic form of data binding
- The double curly braces will be replaced with the value the "title" property pased in to the component.


### Note:

If i want to use this component what information do I have to pass?

So that component works because if you do not pass this title, you get an error that there is this information missing. 
Where it's just not going to display in the browser. When you have 230 parameters that you have to pass, it's way easier to see, what you need to pass when it's just cleanly listed. 

So we have a title, we have a name... whatever, so justk looking at these properties field and just of all tha's the name, so ehat's already information, how to huse that components, adn these are the properties that it expects or these are the components, that you have to impor. 
So this basically is an informaiton of, how to use this custom element. 

### Why do I have to parametrize it? 

Because you can reuse the same element for different cases.

###  click button 

we are in vue.js and not just JavaScript and HTML, so that's going to be specific to vue.js. So want to call a function whenever a buttom is clicked, we have to tie that click event using it click:

```
@click=
```
we have this at symbole and then click and then whatever the name of the function is that, we want to call whenever a click event happens on the button:
```
@click="handleClick()"
```
So this is the function that we call if is clicked the button.

Then in the attribute call methods, is where we define any functions that we use within this template. 

### Abstract 
 
 Building our website task by task

 1) Develop frontend of app
    1st version UI with vanilla JavaScript 
    2nd version UI with a JS framework
2) Devlop backend of app 
3) Create and connect database

# Use Vue in teamable app 
We're going to use vue.js freamework to develop our team able application. 
