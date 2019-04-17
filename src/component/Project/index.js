import React from 'react';
import AsideMenu from '../../common/asideMenu';

class Project extends React.Component{
    render(){
        return (
            <div>
                <aside>
                    <AsideMenu
                        title={this.props.location.state}
                    />
                </aside>
                <div className='main'>
                    <h1>项目能力</h1>
                </div>
            </div>
        )
    }
}
export default Project;