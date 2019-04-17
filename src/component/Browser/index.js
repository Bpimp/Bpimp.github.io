import React from 'react';
import AsideMenu from '../../common/asideMenu';

class Browser extends React.Component{
    render(){
        return (
            <div>
                <aside>
                    <AsideMenu
                        title={this.props.location.state}
                    />
                </aside>
                <div className='main'>
                    <h1>浏览器</h1>
                </div>
            </div>
        )
    }
}
export default Browser;