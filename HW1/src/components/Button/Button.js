import React from "react";
import styles from './Button.module.scss';
class Button extends React.Component {

    render() {
        const {text, backgroundColor, onClick} = this.props;
        return (
            <button
                type="button"
                style={{backgroundColor: backgroundColor}}
                className={styles.button}
                onClick={onClick}>{text}
            </button>
        )
    }
}

export default Button;