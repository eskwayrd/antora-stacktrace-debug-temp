// A broken extension to debug Antora's `--stacktrace` option.

'use strict'

function register ({ config: {} }) {
  this.on('contentClassified', ({ playbook, contentCatalog }) => {
    // Code is broken here.
    // Antora should report the next line, but does not.
    console.log('I am broken...
  })
}

module.exports = { register }
