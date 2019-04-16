import React from 'react';
import {Link} from 'react-router-dom';
import {Menu} from 'antd';

let SubMenu=Menu.SubMenu;
class Nav extends React.Component{
    render(){
        let menu=this.props.nav.map((item,i)=>{
            return (
                <SubMenu key={i} title={<span className="submenu-title-wrapper"><Link to={item.path}>{item.name}</Link></span>}>
                </SubMenu>
            )
        });
        return (
            <Menu
                mode="horizontal"
            >
                {menu}
            </Menu>
        )
    }
}
export default Nav;