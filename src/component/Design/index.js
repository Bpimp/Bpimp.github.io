import React from 'react';
import AsideMenu from '../../common/asideMenu';

class Design extends React.Component{
    render(){
        return (
            <div>
                <aside>
                    <AsideMenu
                        title={this.props.location.state}
                    />
                </aside>
                <div className='main'>
                    <h1>设计模式</h1>
                </div>
            </div>
        )
    }
}
export default Design;
