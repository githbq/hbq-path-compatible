import * as pathTool from 'path'

const compatiblePathTool = {}

Object.keys(pathTool).forEach(methodName => {
  const property = pathTool[methodName]
  if (typeof property !== 'function') {
    compatiblePathTool[methodName] = property
  } else {
    compatiblePathTool[methodName] = function (...args) {
      let result = property(...args)
      if (typeof result === 'string') {
        result = result.replace(/\\/g, '/')
      }
      return result
    }
  }
})

export default compatiblePathTool