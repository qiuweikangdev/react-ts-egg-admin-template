import React,{useState,useEffect,memo} from 'react'
import { Link, useLocation} from 'react-router-dom';
import { Menu, Button } from 'antd';
import NavLink from './NavLink';
import IRoute from '@/router/innerRouter/IRoute'
import Logo from '@/assets/images/logo.png'
import { 
  Scrollbars
 } from 'react-custom-scrollbars';
import './index.less'
import {
  AreaChartOutlined
} from '@ant-design/icons';
const { SubMenu } = Menu;
interface IProps {
  routeMap: IRoute[];
  // selectedKey:string
}
//渲染滚动条
const renderThumb = (props: any) => {
  const { style, ...rest } = props;
  //滚动条颜色
  const thumbStyle: React.CSSProperties = {
    backgroundColor: 'rgba(255,255,255,.2)',
    borderRadius: '3px',
    cursor: 'pointer'
  };
  return (<div style={{ ...style, ...thumbStyle }}  {...rest} />);
}

const SiderBar:React.FC<IProps>= ({ routeMap})=>{
   //使用递归根据路由配置生成菜单  
   const location = useLocation()
   const keyName = React.useMemo(()=>{
    const regex = /(^\/)(\w*)/
        //返回一个数组，总的结果为一组,其余小括号单独为一组
        const arr = regex.exec(location.pathname)
        const pathname =arr?arr[2].replace(/^\w/,(str:string)=>{
            return str[0].toUpperCase()
        }):'Dashboard'
    return pathname
  },[location.pathname])
   

   //获取菜单
    const getMenuItem = (route: IRoute) => {
      const { name, title, path, icon, children } = route;
      if (children) {
        return (
          <Menu.SubMenu
            key={name}
            title={
              <span>
                <AreaChartOutlined />
                {/* <Icon type={icon} /> */}
                <span>{title}</span>
              </span>
            }
          >
            {children.map((route: IRoute) => getMenuItem(route))}
          </Menu.SubMenu>
        )
      }
      return (
        <Menu.Item key={name}>
          <NavLink path={path + ''} icon={icon} title={title} />
        </Menu.Item>
      )
    }

    return (
      <Scrollbars
        universal
        renderThumbHorizontal={renderThumb}
        renderThumbVertical={renderThumb}
      >
      <div className="side-bar">
        <div className="side-bar-logo">
          <Link to='/dashboard'>
            <img className="image" src={Logo} alt="" />
            <span className="title">admin</span>
          </Link>
        </div>

        {/* 侧边栏 */}
        <Menu theme="dark" mode="vertical" defaultSelectedKeys={['Dashboard']} selectedKeys={[keyName]}>
           {routeMap.map(route => getMenuItem(route))}
        </Menu>
      </div>
      </Scrollbars>
    )
}
export default memo(SiderBar);