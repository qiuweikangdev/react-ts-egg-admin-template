/*
 * @Descripttion: 
 * @version: 
 * @Author: qqqiu
 * @Date: 2020-01-26 00:38:01
 * @LastEditors: qqqiu
 * @LastEditTime: 2020-03-14 13:29:55
 */
/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1579970272536_3918';

  // add your middleware config here
  config.middleware = ['params', 'errorHandle'];
    //跨域
    config.security = {
      csrf: {
          enable: false,
          ignoreJSON: true
      },
      // domainWhiteList: ['http://127.0.0.1:8080']
  };
  config.cors = {
      allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
      credentials: true, //获得前端的cookie
      // origin: () => 'http://127.0.0.1:8080' //这边不能为*号，需要指定明确的、与请求网页一致的域名
      origin: () => 'http://localhost:3000' //这边不能为*号，需要指定明确的、与请求网页一致的域名

  };
  config.cluster = {
      listen: {
      path: '',
      port: 3001,
      hostname: '127.0.0.1'
      // hostname: '0.0.0.0'
      },
  };
  config.jwt = {
    secret: 'secret', //密钥
    ignore: [/^\/user\/login/], // 哪些请求不需要认证
}
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
