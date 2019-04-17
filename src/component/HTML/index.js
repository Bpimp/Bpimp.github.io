import React from 'react';
import AsideMenu from '../../common/asideMenu';

class HTML extends React.Component{
    render(){
        return (
            <div>
                <aside>
                    <AsideMenu
                        title={this.props.location.state}
                    />
                </aside>
                <div className='main'>
                    <h1>html</h1>
                </div>
            </div>
        )
    }
}
export default HTML;