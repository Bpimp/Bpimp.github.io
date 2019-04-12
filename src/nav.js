import React from 'react';
import {Link} from 'react-router-dom';

class Nav extends React.Component{
    render(){
        return (
            <nav>
                <ul className='navList'>
                    <li><Link to='/'>首页</Link></li>
                    <li><Link to='/html'>HTML</Link></li>
                    <li><Link to='/css'>CSS</Link></li>
                    <li><Link to='/js'>JavaScript</Link></li>
                    <li><Link to='/browser'>浏览器</Link></li>
                    <li><Link to='/internet'>网络协议</Link></li>
                    <li><Link to='/framework'>框架和库</Link></li>
                    <li><Link to='/project'>项目能力</Link></li>
                    <li><Link to='/modular'>模块化和组件化</Link></li>
                    <li><Link to='/idea'>编程思想</Link></li>
                    <li><Link to='/design'>设计模式</Link></li>
                    <li><Link to='/node'>Node</Link></li>
                </ul>
            </nav>
        )
    }
}
export default Nav;