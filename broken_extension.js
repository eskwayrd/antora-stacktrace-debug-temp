// A broken extension to debug Antora's `--stacktrace` option.

'use strict'

const extensionName = 'broken_extension'

function register ({
  config: {
    ...unknownOptions
  }
}) {
  const logger = this.getLogger(extensionName)

  if (Object.keys(unknownOptions).length) {
    const keys = Object.keys(unknownOptions)
    throw new Error(
      `Unrecognized option${keys.length !== 1 ? 's' : ''}` +
      ` specified for ${extensionName}: ${keys.join(', ')}`
    )
  }

  // During contentClassified, check all of the pages one by one
  this.on('contentClassified', ({ playbook, contentCatalog }) => {
    console.log('I am broken...
  })
}

module.exports = { register }
