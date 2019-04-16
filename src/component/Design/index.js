import React from 'react';
import Aside from '../../common/aside';

class Design extends React.Component{
    render(){
        return (
            <div>
                <Aside/>
                <main className='main'>
                    <h1>设计模式</h1>
                </main>
            </div>
        )
    }
}
export default Design;
