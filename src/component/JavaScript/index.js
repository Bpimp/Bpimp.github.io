import React from 'react';
import Aside from '../../common/aside';


class JavaScript extends React.Component{
    render(){
        return (
            <div>
                <Aside/>
                <main className='main'>
                    <h1>JavaScript</h1>
                    <h2>数据结构和算法</h2>
                </main>
            </div>
        )
    }
}
export default JavaScript;