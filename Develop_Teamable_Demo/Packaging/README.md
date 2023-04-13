How do testers get access to the app?
Pachage evertything into a single file 

- Compress and pack frontend and backend code into a sigle file 
- This can be easily copied, uploaded and sent to cowokers 


## Building 

Building is compiling all the software
Compiling takes higher level programming language code and translates it into machine code

## Packaging

The packaging process gets the software ready for deployment
How you intend to transport the software (package into zip file or create an installer etc)

# Creating a new release of our application 

- A release is the distribution of the newest version of our application 

- This new version will include all our new features and bugfixes. 

### <package-name>-<version>

teamable-1.0.0

Name and version of the package is pulled from package.json file 


# Builid the applicaiton 

Transpiles code 
And puts production-read bundle into dist/ directory 

# Resulting file type 

A zip is a set of files packaged together into a single file and compressed using the gzip compression program

A tarball is a set of files packaged together into a single file, but not compressed. 

### Gzipped tar file (.tgz)

It's a TAR archive file that has been compressed 

### .npmignore

List files and folders you want to keep out of the resulting package


## Packages for development

Libraries needed only when developing and testing the app 

## Packages for production 

Packages required to just run the application 

## dependencies

Packages required in production 

## devDependencies

Include packages here that are only needed for local development or testing 


## npm install 

Installs dependencies and devDependencies

## npm install --omit=dev
Only installs dependencies 

