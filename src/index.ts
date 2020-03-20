import * as pathTool from 'path'

const compatiblePathTool = {}

Object.keys(pathTool).forEach(methodName => {
  compatiblePathTool[methodName] = function(...args) {
   let result = pathTool[methodName](...args)
   if (typeof result === 'string') {
    result = result.replace(/\\/g, '/')
   }
   return result
  }
})

export default compatiblePathTool