import React from 'react';
import { connect } from 'react-redux';

const App = () => {
  return (
    <div>
      <p>Welcome to <strong>Yet Another React Redux Store Starter-Kit!!</strong></p>
      <div>
        <p>Supported Features:</p>
        <ul>
          <li><strong>React</strong></li>
          <li><strong>Redux Store</strong> (for react state managemenr)</li>
          <li><strong>Express</strong> (configured to run the server)</li>
          <li><strong>Webpack</strong> (configured for build (dev/prod) process)</li>
          <li><strong>Hot-Reloading</strong> (changes reflected in the browser while developing)</li>
          <li><strong>ES6</strong> (write in ES6 and will transpile into ES5 using `babel`)</li>
          <li><strong>Logs</strong> (configured server logs using `bunyan` library)</li>
          <li><strong>JS-Lint</strong> (configured linting to write concise JS code, used `eslint` and `airbnb`(for standard-linting-rules))</li>
        </ul>
      </div>
      <div>
        <p>Upcoming Features</p>
        <ul>
          <li><strong>Testing</strong></li>
          <li><strong>Code-Coverage</strong></li>
          <li><strong>Style Linting (for writing concise styles)</strong></li>
          <li><strong>React/Redux Router</strong> (to quickly start react-redux application)</li>
          <li><strong>Generators</strong> (to quickly setup base for containers/components)</li>
          <li><strong>Browser Sync</strong> (to test the application on number of browsers quickly, efficently and simultaneously)</li>
          <li><strong>SASS/SCSS</strong> (to use SASS)</li>
          <li><strong>PostCSS</strong> (to automatically add prefixes in the css files)</li>
        </ul>
      </div>
      <div>
        <p>Any suggestions or recommendations ?</p>
        <p>Send me on my email-id (<strong>se.aakashgoel@gmail.com</strong>)</p>
      </div>
    </div>
  );
};

export default connect()(App);
