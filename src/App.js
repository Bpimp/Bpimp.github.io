import React, { Component } from 'react';
import Nav from "./common/nav";
import Footer from './common/footer';
import RouterIndex from "./router";
import axios from 'axios';



class App extends Component {
    constructor(props){
        super(props);
        this.state={
            data:[]
        }
    }
    componentWillMount(){
        axios({
            method:'post',
            url:' https://www.easy-mock.com/mock/5cb567ca93eb412c8916b9ea/interview/note'
        })
            .then((response)=>{
                this.setState({
                    data:response.data.data
                })
            })
            .catch((error)=>{
                console.log(error)
            })
    }
  render() {
    return (
      <div className="App">
          <header>
              <Nav
                nav={this.state.data}
              />
          </header>
          <section className='clearfix'>
              <RouterIndex/>
          </section>
            <Footer/>

      </div>
    );
  }
}

export default App;
