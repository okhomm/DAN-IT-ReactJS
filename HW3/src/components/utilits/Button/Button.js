import PropTypes from "prop-types";
import styles from "./Button.module.css";

const Button = (props) => {
    const {text, backgroundColor, onClick} = props;

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

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    backgroundColor: PropTypes.string,
    text: PropTypes.string
}

Button.defaultProps = {
    backgroundColor: '#ccc',
    text: 'Button text'
}

export default Button;