import React, {Component} from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.css";

class Button extends Component {

    static propTypes = {
        text: PropTypes.string,
        backgroundColor: PropTypes.string,
        onClick: PropTypes.func
    }

    static defaultProps = {
        // prop1: defaultValue1,
        // prop2: defaultValue2,
    }

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