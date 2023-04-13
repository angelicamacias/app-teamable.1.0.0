# BACKEND

Persisting data is important

- Any changes are lost when we refresh the browser
- We want to save any changes made by the user
- Data is saved in a database
- A collection of structured information set up for easy access, managment and updating
- You can sabe data to database and get data from it


### we can't 

Send and save data directly into database 

## Backend code 


Frontend code 
    |
    |runs in the browser
    |
    |------------> Backend code 
                            |
                            |runds on server
                            |
                            |------------> Database

- Backend code "lives" on our server
- Machine that only we have access to and serve our application from 
- Others can not see or modify the backend code


## How it works -high level



Frontend code: HTML CSS VUE.JS
    |
    |runs in the browser
    |
    |------------> Backend code: node.js python  java
                            |
                            |runds on server
                            |
                            |------------> Database


### Frontend
- Focus on the visual aspects of a website
- The part user see and interact with 
- Excute functions when user interacts with HTML elements

### Backend

- Permanent changes must be sent to backend to be saved 


# Node.js

Module in Node.js
Same as JavaScript libraries

### Express

- A web application framework
- Provides a ser of features for web apps
- Helps to manage a server and routes

### require()

To include a module in your app 
Similar to import


## Different variable declaration 

- var
Was the only way, before new JS version added better alternatives 
Value can be updated

- const
Introduced with the 2nd mejor revisionof JS 
Value can't be updated
The preferred way, if variable with no and should not ve updated

- let
Introduced with the 2nd major revision of JS
Value can be updated 
Better version of var, because helps prevent errors

### semicolons are optional
Semicolon lets the compiler know that it reached the end of a command
Optional, because they will be inserted automatically in JavaScript 

### app.listen()

Starts a server 
Which listens for connections on the specified host and port

We have two functions: 

- On which port should the app listen? 
- What should the app do when receiving the HTTP request?

### note

Backedn code is executed on the OS with some applications dependent on the language

# Localhost and port


## LocalHost

- The hostname or the computer that is currenty in use to run the program 
- So it means "this computer" in a network
- Used for testing purposes in development, not in acutal production 


## Port

Ports are virtual places within an operating system, where network connections start and end

Every machiane has a range of ports available

Thes ports can be allocated to specific applications

Every application or service runs and is available on a specific port 

## How can we send the data, whatever we entered here as a new task to the backend?

# Introducrion to HTTP, URL IP Address


What is HTTP? 

Well, frontend and backend need a connection, like a pipe. 

```
        frontend ---> send information 
        
                www. <----[pipe]-----> server
        
                     send response <---- backend 

```
 

## HTTP protocol 

HTTP stands for: **H**yper **T**ext **T**ransfer **P**rotocol
Protocol of how to transfer hyper text

HTML stands for: **H**yper **T**ext **M**arkup **L**anguage

- HTTP is the foundation of World Wide Web
- Enabling the data exchange between web browsers and web servers

pipe == http ---> save/get data from DB 

```
        frontend ---> send information 
        
                www. <----[http]-----> server
        
                     send response <---- backend 

```

**frontend**---> send informtation ---> HTTP Request
**backend** ---> send response ----> HTTP Response 

- Browser makes an HTTP request to backend 
- Server sends an HTTP Response for this request
- System of rules that define how data is exchanged
- Kind of a contract of how to send data over internet


Communications berween devices require that the devices agree on the format of the data that is being exchanged 

### Sending any type of data
- HTTP was originally created to send HTML files
    You can transfer any type of data 

index.html is **entrypoint** of every application 

### HTTP Client and HTTP server

HTTP is about communication between web clients and servers

Cient sends HTTP request ----- Server sends HTTP reponse, serving the request
 
## HTTP requesty cycle 

1) Browser requests index.html the server returns HTML page 
       
2) Browser requests referenced style.css server returns that CSS file
        <link rel="stylesheet" href="style.css"/>

...
### Backend responsibilities

- Get and save data in database
- Execute havy logic / data processing/ validiation 
- Receive requests from clients and send requested data back 
            Acting as web server 

# What is a URL?

Protocol-hostname-port: http://localhost:3000
URL: http://localhost:3000

URL: **U**niform **R**esource **L**ocator 
Also collequially called: wed address
URI: **U**niform **R**esource **I**dentifier 


example:


https//dev-to-uploads.s3.amazonaws.com/resized_logo_UQ.png


HTTP protoco: http
Hostname: dev-to-uploads.s3.amazonaws.com 
File name: resized_logo_UQ.png

NOTE:
Very inconvenient if we needed to know the port of the websites we want to access


### Standard port

Very inconvenient if we needed to know the port of the websites we want to access

### HTTP is the default protocol

Gets added automatically to the web address 

## What is HTTPS?

HTTPS is the secure version of HTTP 

HTTPS is HTTP wich **encryption** and verification

# IP Addresses

- Host names are mapped to IP addresses
- IP address is a unique address that identifies a device on the internet
- Every machine on the internet has an IP address


# Serve index.html

### express.static()

Built-in function that serves static files

### __dirname
Variable thta gives you the absolute path of the directory containing the currently excecuting file 


#### how to run the server?
```
$ npm start

> start
> node server.js

app listening on port 3000
```

## HTTP status codes 



- Request succeeded

---> 200

Indicate whether a specific HTTP request has been successfully completed 

- Not modifications

---> 304

Indicates to the browser that there is no need to retransmit the requested resources 

It's an implicit redirection to a cached resource

- Not found

---> 404

Server cannot find the requested resource 

- Some error on the server side

---> 500 

Best to retry 



Responses are grouped in five classes 

- **Informational responses**: 100-199
- **Successful responses**: 200-299
- **Redirection messages**: 300-399
- **Cient error responses**: 400-499
        Bad reques from client.
        Client or user has to fix an error before trying again 
        - You request a non existant resource (404 not found)
        - Or user entered some invalid data (400 bad request)
        - Or not allowed to perform this action (403 forbidden)

- **Internal server error**: 500

# Introduction to JSON 

We want to send data, between frontend and backend in order to then eventually save that data in the data bases. 
For that they need a common language they both understand to talk to each. 


frontend <---- http ----> backend 




## JSON 

Data exchange with JSON 

JSON: Java Script Object Notation 

- JSON is a ligthweight format for storing and transporting data

- It's most often used for data exchange from server to web page 

As it's only, JSON data can easily be sent between computers and used by any programming language

XML is another format for data exchange, but JSON is most widely used. 


### JSON syntax

Esay syntax, human-readable text

JavaScript can easily convert JSON data into JavaScritp objects. 


- JSON.parse()
Convert to JS object

- JSON.stringify()
Convert JS object into JSON string 


# Implement data exchange between frontend and backend 

        Header       -----> Metadta is in the HTTP header
----------------------
        body         -----> Pavload is the information or data sent in the HTTP message body 


note: 
metadata: data about the data

### fetch

Provides an easy way to fetch resources across the network 
here we have two parameters: 

- enpoint or URL: Want to talk to the backend.  

EXAMPLE:

localhost:3000/save-task 
                |---------> save-task:  endpoints

note: endpoint
A web address URL at which the clients can gain access to it
We can create our own enpoints in our backen 

Fetch abstracs away the complexity

We only need to configure a few things, and rest in heandled by the fetch method
And there are also default values, which are set by the browser itself



## JSON.stringify()

Converts a JavaScript object into a JSON string 


## HTTP Methods

Used to indicate the deired action to ve performed for fiven resource
The most important ones are: 

- GET: Retrieve or get dara
- POST: Send data to the server
- PUT: Update/Modify data
- DELET: Delete data 

## HTTP header

Adds additional contex and metadata about the request or response 

## Synchronous vs Asynchronous 

**Synchronous** calls are blocking 
The request must complete, before the browser can continue with the execution 
```
|------>| request1 |------
|                        |
|             <-----| reponse 1|
|
|
|
|------>| request2 |------
|                        |
|             <-----| reponse 2|
|
```


**Asynchronous** calls or requests are non-blocking 
Tasks can run simultaneously 
```
|------>| request1 |------
|                        |
|         <---------------
|
|
|------>| request2 |------
|                        |
|         <---------------
|
|
|------>| response1 |------
|                        |
|         <---------------
|
|------>| response2 |------
|                        |
|         <---------------
```

## Promise

Handling the "pomise" with async/await

A "promise" is an object represting the eventual completion or failure of an asynchronous opertion 

You receive a "promise" immediately, hot the actual response

With await keyword, the actual reponse is assigned to our variable once the request completes

### body-parsejr Module

Extracts the body portion of an incoming request, parses the JSON dara and exposes it on req.body 

### app.use(middleware)

app.use() let's you register middleware or a chain of middlewares

These are executed vefore the end route

## Get data from backend

get data from backend


