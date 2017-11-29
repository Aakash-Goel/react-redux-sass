/**
 * app.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

// Needed for redux-saga es6 generator support
import 'babel-polyfill';

// Import all the third party stuff
import React from 'react';
import ReactDOM from 'react-dom';

const render = () => {
  ReactDOM.render(
    <div>
      <p>Welcome to <strong>Yet Another React Redux Store Starter-Kit!!</strong></p>
      <div>
        <p>Supported Features:</p>
        <ul>
          <li><strong>React</strong></li>
          <li><strong>Express</strong> (configured to run the server)</li>
          <li><strong>Webpack</strong> (configured for build (dev/prod) process)</li>
          <li><strong>ES6</strong> (write in ES6 and will transpile into ES5 using `babel`)</li>
          <li><strong>Logs</strong> (configured server logs using `bunyan` library)</li>
          <li><strong>JS-Lint</strong> (configured linting to write concise coding, used `eslint` and `airbnb`(for standard-linting-rules))</li>
        </ul>
      </div>
      <div>
        <p>Upcoming Features</p>
        <ul>
          <li><strong>Redux Store</strong> (to quickly start react-redux application)</li>
          <li><strong>Browser Sync</strong> (to test the application on number of browsers quickly, efficently and simultaneously)</li>
          <li><strong>SASS/SCSS</strong> (to use SASS)</li>
          <li><strong>PostCSS</strong> (to automatically add prefixes in the css files)</li>
        </ul>
      </div>
      <div>
        <p>Any suggestions or recommendations ?</p>
        <p>Send me on my email-id (<strong>se.aakashgoel@gmail.com</strong>)</p>
      </div>
    </div>,
    document.getElementById('app'),
  );
};

render();
