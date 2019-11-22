'use strict'
import { test } from './block.js'
console.log('hello world~')

test()

if (module.hot) {
  module.hot.accept();
}