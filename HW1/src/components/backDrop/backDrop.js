import React, {Component} from 'react';
import './backDrop.scss'
class BackDrop extends Component {
    render() {
        return (
            <div className="backDrop" onClick={this.props.onClick}/>
        )
    }
}

export default BackDrop;