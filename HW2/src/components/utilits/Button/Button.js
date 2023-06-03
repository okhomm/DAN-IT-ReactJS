import React, {Component} from "react";
import styles from "./Button.module.css";

class Button extends Component {

    render() {
        const {text, backgroundColor, onClick} = this.props;
        return (
            <button
                type="button"
                className={styles.button}
                style={{backgroundColor: backgroundColor}}
                onClick={onClick}>
                {text}
            </button>
        )
    }
}

export default Button;