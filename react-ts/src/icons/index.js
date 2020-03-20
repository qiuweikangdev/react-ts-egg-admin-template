/*
 * @Descripttion: 
 * @version: 
 * @Author: qqqiu
 * @Date: 2020-03-09 01:22:28
 * @LastEditors: qqqiu
 * @LastEditTime: 2020-03-09 01:22:29
 */
const path = require('path')
const files = require.context('./svg', false, /\.ts$/)
const modules = {}
files.keys().forEach(key => {
  const name = path.basename(key, '.ts')
  modules[name] = files(key).default || files(key)
})
export default modules