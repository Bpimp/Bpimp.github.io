import React from 'react';
import AsideMenu from '../../common/asideMenu';

class Idea extends React.Component{
    render(){
        return (
            <div>
                <aside>
                    <AsideMenu
                        title={this.props.location.state}
                    />
                </aside>
                <div className='main'>
                    <h1>编程思想</h1>
                </div>
            </div>
        )
    }
}
export default Idea;
