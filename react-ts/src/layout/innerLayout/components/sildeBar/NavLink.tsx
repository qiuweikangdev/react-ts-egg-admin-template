import React from 'react'
import { Link } from 'react-router-dom';
import {
    AreaChartOutlined
  } from '@ant-design/icons';
interface IProps {
    path: string;
    icon?: string;
    title: string;
}
const NavLink: React.FC<IProps> = ({ path, icon, title }) => {
    return (
        <Link to={path}>
            <span><AreaChartOutlined /></span>
            <span>{title}</span>
        </Link>
    )
}
export default NavLink;