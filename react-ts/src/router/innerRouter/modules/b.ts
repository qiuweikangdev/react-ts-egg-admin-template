
/*
 * @Descripttion: 
 * @version: 
 * @Author: qqqiu
 * @Date: 2020-03-08 23:41:28
 * @LastEditors: qqqiu
 * @LastEditTime: 2020-03-14 16:02:59
 */
import { lazy } from 'react';
import IRoute from '../IRoute';
import SuspenseCom from '../../../utils/SuspenseCom';
const List = lazy(() => import( '@/pages/b/components/list'));
const Artcle = lazy(() => import( '@/pages/b/components/article'));
const route: IRoute = {
  name: 'B',
  title: '空白页B',
  icon: 'border',
  children: [{
    name: 'ArticleList',
    title: '文章列表',
    path: '/article/list',
    exact: true,
    component: SuspenseCom(List)
  },{
    name: 'ArticleContent',
    title: '文章内容',
    path: '/article/content',
    exact: true,
    component: SuspenseCom(Artcle)
  }]

}

export default route;
