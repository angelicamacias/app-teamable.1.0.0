# Workflow




![Diagrama sin título drawio (2)](https://user-images.githubusercontent.com/114703394/231858613-ddbee190-d46d-484a-a813-1f22a7f005d5.png)








Where to run the application? 

The tester should be able to access the new app version from the broweser without doing manual steps of installation 
They don't need to know how to start the application 

# Server Basics

## Local machine vs Remote machine

- Localhose = the local machine

Applications on the local machine are accesible by other applications on that same machine  

- Remote machine 

Domain name or Host Name
Under the hood: domain name get translated to IP addresses in the background 

 hostname: www.linkedin.com ----> IP address: 108.174.3.0

Accessing resources or web app on the internet
Access using host name or IP address of the machine 

# Server machine 

A computer, whose only job it is ro run an application 

SErver program vs Physical server the server progam runs on:

clien <--------> server


server <-------> client

## What is a server machine? 

- Server machine
Server operating systems:
You only interact with CLI no GUI
Most servers are Linux servers

Few client applications: like file editor. 

Dedicated for specific task 
Runs a service for another computer program or users

Not meant for personal usage
No visual work 


- Client machine
Client operating systems:
Windows, macOs, Linux distributions software

Your laptop is a client machine 
You work on it, you browse the internet etc
You turn off the computer when done 

## Server vs Client computer 

- No graphical user interface
- Interaction with command line interface (CLI)
- Mostly Linux Operating system 

Executing commands on the server CLI 
To install software and run the server program 

## Cloud computing


Mange own pysical servers 
    
    Companies by big computers
    Need to be roburs, need much CPU, memory etc
    
    Cost a lot
    People, who manage these physical servers
    Human costs of managing own servers

Soluction:

You Can rent our servers and run your appliaction on it
We manage the servers and make suer they run 24/7
We maintain them, secure them etc. 


**"The cloud"** refers to servers, that are accessed over the internet 
Servers you rent from other people, who manage the physical servers 

Servers you rent for other people, who manage the physical servers for you. 

- Cloud providers
Compaines, who offer computing resources

- Data centers
Facility housing many networked computers 

---> Widely used cloud providers
Azure, aws, google cloud

---> Smallers ones
digital Ocena 

---> Many other ones




AWS aws is currentyy the most popular plataform 


How do we create a server on the cloud? 
How do we connect to the server? 

- Address of the server
- Port of the application 
- Protocol to communicate


### SSH secure shell

Program(running on port22) that lets you connect to the terminal (CLI) of the remote server machine 
This program comes with the operating system 


- SSH or secure shell
SSH is a network protocol 
Gives users a secure way to communicaste with a remote server


SSH CLIENT ----SSH----> SSH SERVER  

SSH client initiates the connection: 
```
ssh://server-address:22
```

**protocol**: ssh
**IP address of host name**: server-address
**port**: 22

note: Same concept as HTTP 

Protocol: the common language
Address: the unique addres to identify the server on the internet
Port: where SSH app is listening 


You execute a SSH command on your termianl to connect: 
    - ssh username@serverhost
    - ssh maria@192.17.19.3

[\W]$ ssh root@134.122.82.124 -------> SSHing or logging into the remote server

root@web-server:~# ls ---------------> Executing command on remote server


### Controlling access with firewall 

- Firewall
Monitors and controls incoming and outgoing network traffic
Allows you to selectively open ports for the public

### Controlling who can access the port 

We need to install necesarry software to tun out application on the remote server.

- SSH server funs on port 22
- Using firwall configuration we can allow access to SSH port 22
- We can define, who (which IP addresses) can access the port

### Firewall configuration 
- Selectively open ports
- Define WHO (which IP addresses) can access those ports
- Own firewall configuration for both incoming and outgoing traffic 

### Stanadr ports
8080
mySql: 3306
mongo: 27017


FTP: 21
SHH: 22
SMPT: 25


client-server communication works always the same 

client <---------> server 

## Wrap up 


# Role of sys admin explained

Who configures servers? 

Server administrator: 
Install, configure and maintain server
Preparing the server for deployment

Databases admin: 
Configure database 

Network admin: 
Configure networking


## Multiple people vs one person

In large companies ---> often separate roles or separate depertments for those tasks 

## Virual Machines (VM)

A virtual enviroment that functions as a virtual computer system 

With its own, CPU, memory, network interface etc

### How to create a server on a cloud platform? 

- Interact with a web based UI 
A web application you access via browser
Go through the selection to create a virtual server: 
            How much CPU?       How much RAM? 
            Wich OS?            Which OS version? 

You get access to the machine for a long as you want

Only you can connect and do whatever you want

- Click on "Creat server"

In the background the cloud provider will create a new isolated server machine in one of its dta centers. 

Publicly accessible IP address, so you can interac with that server 

- What is the sate of the rented machine? 

You always get a new vitual machine 
ONly the operating system you selected, is installed on the machine

- How to connect to your server on the cloud? 

You will see the public IP address, which you can use to connect via ssh
Authenicate with username an password


**Latency**= How much time it takes for a data packet to travel from on epoint to another



### IP 


- Public: Identifies the mcahine on the internet
- Private: Identifies the machine on a local network. Unlike a public IP address, it can only be viewed by other devices on the local nerwork. 


How to connect with a windows machine? 

- Windows in more visual 
- Connect with a visual GUI SSH client insted of CLI SSH client

## Configure access rules with firewall 

- Open ports
- And who (which IP addresses) can access the port
- By default, no firewall is configured 
- All ports are publicly accessible 
- Every IP address on the internet can connect to it 

Firewalls configutation always have: 

Indound rules 
- Access rules for incoming traffic

Outbound rules 
- Access rules for outgoing traffic 


### Installing software with pacjage manager 

packafe manager ------> packafe repositories

- Command Line Interfaace = CLI
On macOs we used brew

- Graphical User Interface = GUI

On windows it's common to use visual install Wizards

**sudo**= execute commands as root or superuser
**root User** = User with unlimited privileges




