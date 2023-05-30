import React, {Component} from "react";
import "./Button.scss";
class Button extends Component {

    render() {
        const {text, backgroundColor, onClick} = this.props;
        return (
            <button
                type="button"
                className="button"
                style={{backgroundColor: backgroundColor}}
                onClick={onClick}>{text}
            </button>
        )
    }
}

export default Button;