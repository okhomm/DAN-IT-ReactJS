import React from "react";

class Button extends React.Component {

    render() {
        const {text, backgroundColor, onClick} = this.props;
        return (
            <button
                type="button"
                style={{backgroundColor: backgroundColor}}
                onClick={onClick}>{text}
            </button>
        )
    }
}

export default Button;