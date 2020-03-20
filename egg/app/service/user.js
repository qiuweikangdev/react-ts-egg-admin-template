/*
 * @Descripttion: 用户业务逻辑
 * @version: 
 * @Author: qqqiu
 * @Date: 2020-01-21 14:48:38
 * @LastEditors: qqqiu
 * @LastEditTime: 2020-03-13 09:42:27
 */
"use strict";

const Service = require("egg").Service;

class UserService extends Service {
     //注册
     async register(params){
        const { ctx ,app} = this;
        let { username, password  } = params //接受客户端的参数
        let saltPwd = await ctx.helper.saltPassword(password) //获取加密后的密码
        let queryUser = 'SELECT * FROM users WHERE username = "' + username + '"'
        let result = {}
        let result1 = await app.mysql.query(queryUser) //查询用户存不存在
        if (!result1.length) {
            //如果用户名不存在,则新建用户
            let insertUser = 'INSERT INTO users(username,password) VALUES (?, ? )'
            let result2 = await app.mysql.query(insertUser, [username, saltPwd])
            if (result2) {
                result = {
                    code: 200,
                    message: '注册成功',
                }
            }

        } else {
            result = {
                code: 200,
                message: '用户名已存在',
            }
        }
        return result 
    }
    //登录
    async login(params){
        const { ctx ,app} = this;
        // let { username, password, authCode } = params;
        let { username, password  } = params;
        let secret = app.config.jwt.secret
        let sqlStr = 'SELECT * FROM users WHERE username = "' + username + '"'
        let result
        let result1 = await app.mysql.query(sqlStr)
        if(result1.length>0){
             //比较加密后密码
            await ctx.helper.comparePassword(password, result1[0].password)
                .then((isMatch) => {
                    if (isMatch) {
                        const token = ctx.helper.getToken({ id: result1[0].id, name: result1[0].username }, secret);
                        //用户信息
                        const userInfo = {
                            id: result1[0].id,
                            username: result1[0].username
                        }
                        result = {
                            code: 200,
                            message: '登录成功',
                            token,
                            userInfo: userInfo
                        }
                    } else {
                        ctx.status = 401;
                        result = {
                            message: '密码错误',
                        }
                    }
                }).catch(err => {
                    ctx.status = 500;
                    result = {
                        message: err
                    }
                })
        }
         else {
            ctx.status = 404;
            result = {
                message: '用户名不存在'

            }
        }
        return result
    }
    // //验证码
    async captcha() {
        const { ctx } = this;
        const captcha = await ctx.service.tools.captcha()
        ctx.response.type = 'image/svg+xml'; // 返回的类型
        return captcha.data
    }
    //token授权
    async auth(params){
        const { ctx, app } = this;
        const { username } = ctx.state.user
        const secret = app.config.jwt.secret
        const token = ctx.helper.getToken({ username }, secret);
        return {
            code: 200,
            token
        }
    }
    //获取用户角色
    


   //获取用户信息，需要登录授权成功才能获取用户信息
   async getUserInfo() {
    const { ctx, app } = this;
    const { id } = ctx.state.user
    // console.log(ctx.state.user)
    const sqlStr = 'SELECT * FROM users WHERE id = "' + id + '"'
    let result 
    await app.mysql.query(sqlStr).then(res => {
            const str = res[0].avatar //获取头像的二进制流数据
            const buffer = Buffer.from(str, 'utf8') //转换为buffer对象
            const base64Str = buffer.toString('base64') //根据base64编码转换为base64字符串
            const userInfo = {
                avatar: base64Str,
                username: res[0].username,
                id: res[0].id
            }
            result = {
                message: '获取数据成功',
                userInfo: userInfo
            }
        })
        .catch(err => {
            result = {
                message: '获取数据失败',
                error: err
            }
        })
    return result
}
}

module.exports = UserService