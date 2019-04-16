import React from 'react';
import HTML from "../component/HTML/index";
import CSS from "../component/CSS/index";
import JavaScript from "../component/JavaScript/index";
import Internet from "../component/Internet/index";
import Browser from "../component/Browser/index";
import Project from "../component/Project/index";
import Modular from "../component/Modular/index";
import Idea from "../component/Idea/index";
import Design from "../component/Design/index";
import Node from "../component/Node/index";
import Index from "../component/index/index";
import {Route,Switch} from 'react-router-dom';


class RouterIndex extends React.Component{
    render(){
        return(
            <Switch>
                <Route path='/' exact component={Index}/>
                <Route path='/html' component={HTML}/>
                <Route path='/css' component={CSS}/>
                <Route path='/js' component={JavaScript}/>
                <Route path='/browser' component={Browser}/>
                <Route path='/internet' component={Internet}/>
                <Route path='/project' component={Project}/>
                <Route path='/modular' component={Modular}/>
                <Route path='/idea' component={Idea}/>
                <Route path='/design' component={Design}/>
                <Route path='/node' component={Node}/>
            </Switch>
        )
    }
}
export default RouterIndex;
