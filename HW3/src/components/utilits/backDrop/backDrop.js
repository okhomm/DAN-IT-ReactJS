import './backDrop.module.css'
import styles from './backDrop.module.css'

const BackDrop = (props) => {
    const {onClick} = props;
    return (
        <div className={styles.backDrop} onClick={onClick}/>
    )
}

export default BackDrop;