/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-11-29 16:20:03
 * @LastEditors  : qqqiu
 * @LastEditTime : 2020-01-27 19:09:14
 */
'use strict';

/** @type Egg.EggPlugin */

exports.mysql = {
    enable: true,
    package: 'egg-mysql',
};
// 跨域
exports.cors = {
    enable: true,
    package: 'egg-cors',
};


// egg-jwt
exports.jwt = {
    enable: true,
    package: "egg-jwt"
};
exports.session = {
    key: 'EGG_SESS',
    maxAge: 24 * 3600 * 1000, // 1 天
    httpOnly: true,
    encrypt: true,
};