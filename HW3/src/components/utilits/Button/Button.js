import React, {Component} from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.css";

class Button extends Component {

    static propTypes = {
        onClick: PropTypes.func.isRequired,
        backgroundColor: PropTypes.string,
        text: PropTypes.string
    }

    static defaultProps = {
        backgroundColor: '#ccc',
        text: 'Button text'
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