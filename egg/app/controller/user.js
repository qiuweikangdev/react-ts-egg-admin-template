 /*
 * @Descripttion: 用户相关
 * @version: 
 * @Author: sueRimn
 * @Date: 2019-11-29 16:20:03
 * @LastEditors  : qqqiu
 * @LastEditTime : 2020-01-27 19:07:25
 */

"use strict"
const Controller = require('egg').Controller;
class UserController extends Controller{
    async register(){
        this.ctx.body =await this.ctx.service.user.register(this.ctx.params)
    }
    async login(){
        this.ctx.body =await this.ctx.service.user.login(this.ctx.params)
    }
    async auth(){
        this.ctx.body =await this.ctx.service.user.auth(this.ctx.params)
    }
    async getUserInfo(){
        this.ctx.body =await this.ctx.service.user.getUserInfo(this.ctx.params)
    }
    async captcha(){
        this.ctx.body =await this.ctx.service.user.captcha(this.ctx.params)
    }
}
module.exports = UserController;