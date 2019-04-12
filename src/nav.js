import React from 'react';
import {Link} from 'react-router-dom';

class Nav extends React.Component{
    render(){
        return (
            <nav>
                <ul className='navList'>
                    <li><Link to='/weng'>首页</Link></li>
                    <li><Link to='/weng/html'>HTML</Link></li>
                    <li><Link to='/weng/css'>CSS</Link></li>
                    <li><Link to='/weng/js'>JavaScript</Link></li>
                    <li><Link to='/weng/browser'>浏览器</Link></li>
                    <li><Link to='/weng/internet'>网络协议</Link></li>
                    <li><Link to='/weng/framework'>框架和库</Link></li>
                    <li><Link to='/weng/project'>项目能力</Link></li>
                    <li><Link to='/weng/modular'>模块化和组件化</Link></li>
                    <li><Link to='/weng/idea'>编程思想</Link></li>
                    <li><Link to='/weng/design'>设计模式</Link></li>
                    <li><Link to='/weng/node'>Node</Link></li>
                </ul>
            </nav>
        )
    }
}
export default Nav;