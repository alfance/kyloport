# Project Title
Kylo's portfolio

## Getting Started
using the modules provided by
https://medium.com/@ColeMurray/react-flux-in-es6-pt-1-2-e2a7b4aa074e

##Installing
```
npm init
npm install
```


if some of the dependencies were not installed, try...

```
$ npm install --save react react-dom
$ npm install --save-dev react-hot-loader babel-loader flux webpack webpack-dev-server
```

##dev

```
$ npm run start

```

user port 8080
```
https://localhost:8080
```

##Build - build to bundle.js

```
$ npm -d build
$ npm run-script build

```


## File Structure
* [app.js] - contains routers
* [layout.js] - divided into nav and Content
* Components
*   : Navbar - Navbar
*   : Portfolio - portfolio arrangement in the main page
*   : Content - renders everything other than nav
* Stores - containing constant files
*   : Navbar
*   : Portfolio
* Views - child page container
*   : components - components that make up each project page
*   : Individual Project file
*   : B-side - secondary project container
*   : Project main - projects container
*   : Resume
