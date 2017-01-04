# gulp-angular2-babel

Information: To run gulp auto script builds for development testing to run web page with babel ES6 javascript and angular2.

Programs:
 * Atom.io (optional)
  * bottom-dock
  * gulp-manager
 * Nodejs 7.3.0 (Require)
 * Babel.js ES6 (npm package)
 * gulp (npm package)

gulp run script with browserify, babelify and others.

Note this is development build.

To Setup:

```
npm install

npm install -g gulp
```

It need to install package file from package.json. It will be listed in dependencies that will be add into node_modules to run build and server. The server is very simple with gulp using task with watch changes.

Note the vender.js file is around 6.19 MB (+/-) depend what you include with it. By default files are angular 2 and support files to run javascript.

Credits:
 * https://github.com/shuhei/babel-angular2-app/blob/master/src/index.html
 * http://blog.revathskumar.com/2016/02/browserify-separate-app-and-vendor-bundles.html
