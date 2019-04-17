import React from 'react';
import AsideMenu from '../../common/asideMenu';


class Modular extends React.Component{
    render(){
        return (
            <div>
                <aside>
                    <AsideMenu
                        title={this.props.location.state}
                    />
                </aside>
                <div className='main'>
                    <h1>模块化和组件化开发</h1>
                </div>
            </div>
        )
    }
}
export default Modular;