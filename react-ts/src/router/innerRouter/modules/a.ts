/*
 * @Descripttion: 
 * @version: 
 * @Author: qqqiu
 * @Date: 2020-03-08 23:41:28
 * @LastEditors: qqqiu
 * @LastEditTime: 2020-03-14 22:20:33
 */
import { lazy } from 'react';
import IRoute from '../IRoute';
import SuspenseCom from '../../../utils/SuspenseCom';
const A = lazy(() => import('@/pages/a'));
const route: IRoute = {
  name: 'A',
  title: '空白页A',
  icon: 'border',
  path: '/a',
  exact: true,
  component: SuspenseCom(A)
}

export default route;