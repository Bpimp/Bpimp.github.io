import React from 'react';
import {Menu} from 'antd';

const SubMenu = Menu.SubMenu;

class AsideMenu extends React.Component{
    render(){
        let submenu=this.props.title.map((item,i)=>{
            return (
                <SubMenu
                    key={i}
                    title={<span>{item.f_title}</span>}
                >
                    <Menu.Item>副标题 5</Menu.Item>
                    <Menu.Item>副标题 6</Menu.Item>
                    <SubMenu title="Submenu">
                        <Menu.Item>副副标题 1</Menu.Item>
                        <Menu.Item>副副标题 2</Menu.Item>
                    </SubMenu>
                </SubMenu>
            )
        });
        return (
            <Menu
                defaultOpenKeys={['sub1']}
                mode="inline"
            >
                {submenu}
            </Menu>
        )
    }
}
export default AsideMenu;