'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
    router.get('/', controller.home.index);
  
     //个人中心模块接口
     router.get('/captcha', controller.user.captcha); //验证码
     router.post('/user/login', controller.user.login); //登录
     router.post('/user/register', controller.user.register); //注册
     router.get('/user/authorization', app.jwt, controller.user.auth); //token授权
     router.get('/user/getUserInfo', app.jwt, controller.user.getUserInfo); //获取用户信息
};
