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