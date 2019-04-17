import React from 'react';
import AsideMenu from '../../common/asideMenu';


class JavaScript extends React.Component{
    render(){
        return (
            <div>
                <aside>
                    <AsideMenu
                        title={this.props.location.state}
                    />
                </aside>
                <div className='main'>
                    <h1>JavaScript</h1>
                    <h2>数据结构和算法</h2>
                </div>
            </div>
        )
    }
}
export default JavaScript;