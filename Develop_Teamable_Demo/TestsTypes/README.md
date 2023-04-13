# Tests types 


### Unit tests

Simplest test type  **input**-> *FUNCTION*  **output**->
function: is 1 isolated unit

Testing just one **single** object or **unit**   

Easy to write, because they are fully isolated
Unit tests are cheap to automate and can run very quickly 


### Update profile function 

- Does multiple things: 
Accepts payload
Reads payloas
REads payload
Checks it's not empty
Sabes the data into database
Sends response back 


## Integration tests

With dependencies, like testing a function that calls other functions
More complex and difficult to test
Integrations with other systems, like database 

Testes indidual functions

Testing that is works in combination s

Testing the interaction with the database or other services 

Integation tests are more complex test logic
Write hundreds of unit tests, have fewer integrations test

## End to end tests

Testing the app from outside 
Testing the user interface (UI) of the app
Using the browser to interact with the app 

E2E tests simulate user behavior with the software
They verify that various user flows work as expectd, like logging in 

There are E2E test freameworks for weiting such tests
Many end-to-end testing tools are selenium-based

## UI tests
Verifying that the UI works as expected

## End to end tests (E2E)
Tests the entire software from beginning to end 

## Performance testing

Testing th appication performance
Envoluating how a system performas under a particular workload
Performance tests simulate these workloads 

- Mesuring reliability 
- Speed 
- Scalability 
- Responsiveness


**Unit tests**: Have many low level unit tests to test isolated functionality
**Integration tests**: Test with dependencies, with other systems
**E2E Test**: Test end to end flows, brom browser interaction to backend and database
**Performance tests**: How does the website perform under high load? 

## Test coverage

How many aspects of the application do we test? 

# Write Unit Tests to test our new functions

## Jest

Jets is a popular JavaScript Testing frameworks
Can also be used for Vue, React, Angular and other JS projects. 

Test your frontend and backend code with it 

## Naming Jest test files

You should name your testing files with same name of the file you want to test plus .test


### our first test case

Call function with valid email ----> we expect 'false'

### Second test case

Call function with a invalid email ---> we expect "true"

How to write a test in jest

- Jest useds "matchers" to let you test values in different ways
- There are different matchers available (.toBe() is the matchers in our case)
- We want to compare the output of our test with a value we expect the funciton to return 


## Why test unit is usfuly? 

# Integration test

Unit test = testing isolated, individual unit
- funcitonA()
- funcitonB()
- functionC()

Testing the interaction with the database or other services

HTTP handler ---> functionA()

## Simulate the browser/forntend

This is also called "mocking"

Mock is a method/object that simulates the behavior or a real method/object in controlled ways






# test flow diagram
![Diagrama sin título drawio (3)](https://user-images.githubusercontent.com/114703394/231870100-6a22c4eb-3c62-4134-af96-4e73819d4d74.png)

