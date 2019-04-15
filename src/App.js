import React, { Component } from 'react';
import Nav from "./nav";
import RouterIndex from "./router";
import Aside from './aside';

let nav=[{name:'HTML', path:'/html'},{name:'CSS', path:'/css'},{name:'JavaScript', path:'/js'},{name:'浏览器', path:'/browser'},{name:'网络协议', path:'/internet'},{name:'框架和库', path:'/framework'},{name:'项目能力',path:'project'},{name:'模块化和组件化',path:'modular'},{name:'编程思想',path:'idea'},{name:'设计模式',path:'design'},{name:'Node',path:'node'}];

class App extends Component {
  render() {
    return (
      <div className="App">
          <header>
              <Nav
                nav={nav}
              />
          </header>
          <Aside/>
          <main className="main">
              <RouterIndex/>
          </main>
          <footer>

          </footer>
      </div>
    );
  }
}

export default App;
