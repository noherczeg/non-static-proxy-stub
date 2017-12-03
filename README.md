# non-static-proxy-stub
A Webpack based proxy stub for proxy-ing only non static sources.

## Use case
Consider the following:

You are developing the frontend part of an application  which consists of
a codebase where the web-sources are embedded into another technology
(e.g. Java, .Net, etc..) and since the sources are embedded you need to
go through a slow build process to check any change you made to your
static sources.

Let's say the sources are served  through a path: `/assets`, and said
static sources reside in that folder.

You don't need anything special, but one thing: to proxy backend calls
to the the backend part of the application, and leave everything else
as-is.

This Seed covers this very scenario and nothing more.

## Usage
Copy the following files to your static sources root:
- package.json
- index.js (necessary for Webpack to function)
- webpack.config.js

Since this scenario is only valid in development it's advised to copy the
`.gitignore` file as well (there is no need for NPM dependencies in
production).

Then run:
```
npm install
npm start
```

For further configuration please check the `webpack.config.js` file!
