import React from 'react';
import {Link} from 'react-router-dom';
import {Menu} from 'antd';

const SubMenu=Menu.SubMenu;
class Nav extends React.Component{
    render(){
        let submenu=this.props.nav.map((item,i)=>{
            return (
                <SubMenu key={i} title={<span className="submenu-title-wrapper"><Link to={item.path}>{item.name}</Link></span>}>
                </SubMenu>
            )
        });
        return (
            <Menu
                mode="horizontal"
            >
                <Menu.Item key="mail">
                    <Link to='/'>首页</Link>
                </Menu.Item>
                {submenu}
            </Menu>
        )
    }
}
export default Nav;