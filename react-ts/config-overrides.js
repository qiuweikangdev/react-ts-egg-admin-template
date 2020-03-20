/*
 * @Descripttion: 
 * @version: 
 * @Author: qqqiu
 * @Date: 2020-03-07 09:33:30
 * @LastEditors: qqqiu
 * @LastEditTime: 2020-03-10 13:52:24
 */
const { override, addWebpackAlias,fixBabelImports ,addLessLoader} = require('customize-cra')
const path = require('path')
const resolve = dir => path.join(__dirname, '.', dir)

module.exports = override(
  addWebpackAlias({
    ['@']: resolve('src')
  }),
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
   addLessLoader({
       javascriptEnabled: true,
       modifyVars: { '@primary-color': '#1DA57A' },
  }),
)
