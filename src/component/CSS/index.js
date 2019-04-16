import React from 'react';
import Aside from '../../common/aside';

class CSS extends React.Component{
    render(){
        return (
            <div>
                <Aside/>
                <main className='main'>
                    <h1>css</h1>
                </main>
            </div>
        )
    }
}
export default CSS;