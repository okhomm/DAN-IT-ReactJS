import React, {Component} from 'react';
import './backDrop.module.css'
import styles from './backDrop.module.css'
class BackDrop extends Component {
    render() {
        return (
            <div className={styles.backDrop} onClick={this.props.onClick}/>
        )
    }
}

export default BackDrop;