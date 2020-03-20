/*
 * @Descripttion: 
 * @version: 
 * @Author: qqqiu
 * @Date: 2020-03-08 23:41:28
 * @LastEditors: qqqiu
 * @LastEditTime: 2020-03-14 16:39:53
 */
import { lazy } from 'react';
import IRoute from '../IRoute';
import SuspenseCom from '@/utils/SuspenseCom';
const C = lazy(() => import('@/pages/c'));
const route: IRoute = {
  name: 'C',
  title: '空白页C',
  icon: 'border',
  path: '/c',
  exact: true,
  component:SuspenseCom(C)
}

export default route;
