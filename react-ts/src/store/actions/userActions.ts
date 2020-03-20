/*
 * @Descripttion: 登录action
 * @version: 
 * @Author: qqqiu
 * @Date: 2020-01-30 11:02:15
 * @LastEditors: qqqiu
 * @LastEditTime: 2020-03-16 19:12:08
 */
import { register,login,authorization } from '../../api/user'
// import { setLocalStore ,removeLocalStore } from '@/utils/global'
import { setToken ,removeToken } from '../../utils/auth'
import { USER_INFO,SET_TOKEN } from '../actionTypes'
import { Dispatch }  from 'redux'
import { ThunkAction,ThunkDispatch } from 'redux-thunk'

// import { setAlert } from './flashMessage'
export const setUserToken = (token:any)=>{
    return {
        type:SET_TOKEN,
        token
    }
}

export const setUserInfo = (user:any)=>{
    return {
        type:USER_INFO,
        user
    }
}

//注册
export const registerRequest = (data:any)=>{
    return (dispatch:Dispatch)=>{
        // return  register(data.username,data.password)
            
    }
}



//登录
export const loginRequest = (data:any)=>{
    return  (dispatch:Dispatch)=>{
        return   login(data.username,data.password).then(res=>{
            console.log(res,'res')
                    setToken(res.data.token)  //把token存储在cookie
                    // setLocalStore('userInfo',res.data.userInfo)   //登录成功之后本地化存储用户信息
                    dispatch(setUserInfo(res.data.userInfo)) //把用户信息存储在redux
                    dispatch(setUserToken(res.data.token))  //把token存储在redux
        })
            
    }
}

//退出登录
export const logout = ()=>{
    return (dispatch:Dispatch) =>{
        removeToken()
        // removeLocalStore('userInfo')   //清除本地用户信息
        //清除redux数据
        dispatch(setUserInfo({}))
        dispatch(setUserToken(''))
    }
}

//token验证
export const authToken = ()=>{
        return async (dispatch:Dispatch) => {
            return await authorization().then((res:{data:any})=>{
                    //当用户一直在操作，进行跳转路由
                    //我们希望延迟token的过期时间
                    //再设置token时间来延迟token的过期时间
                setToken(res.data.token)
            },(err)=>{
                // console.log(err.response.status)
                if(err.response.status === 401){
                    // console.log('token过期')
                    //token过期,清除数据
                    removeToken()
                    // removeLocalStore('userInfo')   
                    //清除redux数据
                    dispatch(setUserInfo({}))
                    dispatch(setUserToken(''))
                    // dispatch(setAlert({type:'fail',text:'登录过期,请重新登录'}))
                }
            })
        }
}

