'use strict'
import { test } from './page1.js'
document.write('hello world~1234')

test()
debugger;
if (module.hot) {
  module.hot.accept();
}