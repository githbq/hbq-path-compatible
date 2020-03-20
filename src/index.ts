import * as pathTool from 'path'

const compatiblePathTool = {}

Object.keys(pathTool).forEach(attribute => {
  const property = pathTool[attribute]
  if (typeof property !== 'function') {
    compatiblePathTool[attribute] = property
  } else {
    compatiblePathTool[attribute] = function (...args) {
      let result = property(...args)
      if (typeof result === 'string') {
        result = result.replace(/\\/g, '/')
      }
      return result
    }
  }
})

module.exports = compatiblePathTool
export default compatiblePathTool