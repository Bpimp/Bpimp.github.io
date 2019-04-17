import React from 'react';
import AsideMenu from '../../common/asideMenu';

class Index extends React.Component{
    render(){
        return (
            <div>
                <aside>
                    <AsideMenu
                        title={this.props.location.state}
                    />
                </aside>
                <div className='main'>
                    <h1>前端简介</h1>
                </div>
            </div>
        )
    }
}
export default Index;