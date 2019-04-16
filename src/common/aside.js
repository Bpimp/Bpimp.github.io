import React from 'react';
import {Menu} from 'antd';

const SubMenu = Menu.SubMenu;

class Aside extends React.Component{
    render(){
        return (
            <aside>
                <Menu
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                >
                    <SubMenu key="sub1" title={<span>主标题(待定)</span>}>
                        <Menu.Item key="1">副标题 1</Menu.Item>
                        <Menu.Item key="2">副标题 2</Menu.Item>
                        <Menu.Item key="3">副标题 3</Menu.Item>
                        <Menu.Item key="4">副标题 4</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" title={<span>主标题2</span>}>
                        <Menu.Item key="5">副标题 5</Menu.Item>
                        <Menu.Item key="6">副标题 6</Menu.Item>
                        <SubMenu key="sub3" title="Submenu">
                            <Menu.Item key="7">副副标题 1</Menu.Item>
                            <Menu.Item key="8">副副标题 2</Menu.Item>
                        </SubMenu>
                    </SubMenu>
                    <SubMenu key="sub4" title={<span>Navigation Three</span>}>
                        <Menu.Item key="9">Option 9</Menu.Item>
                        <Menu.Item key="10">Option 10</Menu.Item>
                        <Menu.Item key="11">Option 11</Menu.Item>
                        <Menu.Item key="12">Option 12</Menu.Item>
                    </SubMenu>
                </Menu>
            </aside>
        )
    }
}
export default Aside;