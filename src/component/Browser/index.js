import React from 'react';
import Aside from "../../common/aside";

class Browser extends React.Component{
    render(){
        return (
            <div>
                <Aside/>
                <main className='main'>
                    <h1>浏览器</h1>
                </main>
            </div>
        )
    }
}
export default Browser;