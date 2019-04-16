import React from 'react';
import Aside from '../../common/aside';


class Modular extends React.Component{
    render(){
        return (
            <div>
                <Aside/>
                <main className='main'>
                    <h1>模块化和组件化开发</h1>
                </main>
            </div>
        )
    }
}
export default Modular;