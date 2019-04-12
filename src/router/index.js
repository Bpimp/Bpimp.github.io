import React from 'react';
import HTML from "../component/HTML/index";
import CSS from "../component/CSS/index";
import JavaScript from "../component/JavaScript/index";
import Internet from "../component/Internet/index";
import Browser from "../component/Browser/index";
import Framework from "../component/Framework/index";
import Project from "../component/Project/index";
import Modular from "../component/Modular/index";
import Idea from "../component/Idea/index";
import Design from "../component/Design/index";
import Node from "../component/Node/index";
import Index from "../component/index/index";
import {Route,Switch,Redirect} from 'react-router-dom';


class RouterIndex extends React.Component{
    render(){
        return(<Switch>
                <Route path='/' exact render={()=>{
                    <Redirect to='/weng'/>
                }}/>
                <Route path='/weng/html' component={HTML}/>
                <Route path='/weng/css' component={CSS}/>
                <Route path='/weng/js' component={JavaScript}/>
                <Route path='/weng/browser' component={Browser}/>
                <Route path='/weng/internet' component={Internet}/>
                <Route path='/weng/framework' component={Framework}/>
                <Route path='/weng/project' component={Project}/>
                <Route path='/weng/modular' component={Modular}/>
                <Route path='/weng/idea' component={Idea}/>
                <Route path='/weng/design' component={Design}/>
                <Route path='/weng/node' component={Node}/>
            </Switch>
        )
    }
}
export default RouterIndex;
