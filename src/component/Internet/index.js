import React from 'react';
import AsideMenu from '../../common/asideMenu';

class Internet extends React.Component{
    render(){
        return (
            <div>
                <aside>
                    <AsideMenu
                        title={this.props.location.state}
                    />
                </aside>
                <div className='main'>
                    <h1>网络协议</h1>
                </div>
            </div>
        )
    }
}
export default Internet;