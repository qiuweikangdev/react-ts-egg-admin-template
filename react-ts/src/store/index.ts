/*
 * @Descripttion: 
 * @version: 
 * @Author: qqqiu
 * @Date: 2020-03-08 18:54:05
 * @LastEditors: qqqiu
 * @LastEditTime: 2020-03-08 18:54:06
 */
import {createStore,applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducer'
const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(logger,thunk)))
export default store;