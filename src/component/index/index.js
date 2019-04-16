import React from 'react';
import Aside from '../../common/aside';

class Index extends React.Component{
    render(){
        return (
            <div>
                <Aside/>
                <main className='main'>
                    <h1>前端简介</h1>
                </main>
            </div>
        )
    }
}
export default Index;