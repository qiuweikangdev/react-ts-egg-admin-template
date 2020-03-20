/*
 * @Descripttion:  获取请求参数中间件, 可以使用ctx.params获取get或post请求参数
 * @version: 
 * @Author: qqqiu
 * @Date: 2020-01-27 19:15:40
 * @LastEditors  : qqqiu
 * @LastEditTime : 2020-01-27 19:15:56
 */
module.exports = options => {
    return async function params(ctx, next) {
        ctx.params = {
            ...ctx.query, //get请求的参数
            ...ctx.request.body //post请求的参数
        }
        await next();
    };
};