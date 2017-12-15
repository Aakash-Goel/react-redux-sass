// needed for regenerator-runtime
// (ES7 generator support is required by redux-saga)
import 'babel-polyfill';

import chai from 'chai';
import sinon from 'sinon';
import chaiEnzyme from 'chai-enzyme';
import sinonChai from 'sinon-chai';

chai.use(chaiEnzyme());
chai.use(sinonChai);

global.sinon = sinon;
global.expect = chai.expect;

const context = require.context('../../src', true, /\.jsx?$/);
context.keys().forEach(context);
