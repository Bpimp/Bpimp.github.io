import React from 'react';
import AsideMenu from '../../common/asideMenu';

class Node extends React.Component{
    render(){
        return (
            <div>
                <aside>
                    <AsideMenu
                        title={this.props.location.state}
                    />
                </aside>
                <div className='main'>
                    <h1>node.js</h1>
                </div>
            </div>
        )
    }
}
export default Node;