import React from 'react';
import Aside from '../../common/aside';


class Node extends React.Component{
    render(){
        return (
            <div>
                <Aside/>
                <main className='main'>
                    <h1>node.js</h1>
                </main>
            </div>
        )
    }
}
export default Node;