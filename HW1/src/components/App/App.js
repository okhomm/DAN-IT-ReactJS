import React, {Component} from 'react';
import Button from "../Button/Button";
import Modal from "../Modal/Modal";

import './App.scss';

class App extends Component {

    state = {
        showFirstModal: false,
        showSecondModal: false
    }

    showFirstModalHandler = () => {
        this.setState({showFirstModal: true})
    }

    closeFirstModalHandler = () => {
        this.setState({showFirstModal: false})
    }

    closeFirstModalFromBgHandler = (e) => {
        e.preventDefault();
        if (e.target.classList.contains('close')) {
            this.closeFirstModalHandler();
        }
    }

    showSecondModalHandler = () => {
        this.setState({showSecondModal: true})
    }

    closeSecondModalHandler = () => {
        this.setState({showSecondModal: false})
    }

    closeSecondModalFromBgHandler = (e) => {
        e.preventDefault();
        if (e.target.classList.contains('close')) {
            this.closeSecondModalHandler();
        }
    }

    render() {

        return (
            <div className="container">
                <Button
                    backgroundColor="#e74c3c"
                    text="Open first modal"
                    onClick={() => this.showFirstModalHandler()}/>

                <Button
                    backgroundColor="#ffa500"
                    text="Open second modal"
                    onClick={() => this.showSecondModalHandler()}/>

                {this.state.showFirstModal && <Modal
                    header="Do you want to delete this file?"
                    closeButton={true}
                    text="Once you delete this file, it won't be possible to undo this action. Are you sure you want to delete it?"
                    closeModal={this.closeFirstModalHandler}
                    closeModalFromBg={this.closeFirstModalFromBgHandler}
                    actions={
                        <>
                            <Button backgroundColor="#b3382c" text="Ok" onClick={() => this.closeFirstModalHandler()}/>
                            <Button backgroundColor="#b3382c" text="Cancel"
                                    onClick={() => this.closeFirstModalHandler()}/>
                        </>
                    }
                />}

                {this.state.showSecondModal && <Modal
                    header="Do you like React.js?"
                    closeButton={false}
                    text="Tell me, do you like studying & React.js?"
                    closeModal={this.closeSecondModalHandler}
                    closeModalFromBg={this.closeSecondModalFromBgHandler}
                    actions={
                        <>
                            <Button backgroundColor="#666666" text="Yes"
                                    onClick={() => this.closeSecondModalHandler()}/>
                            <Button backgroundColor="#333333" text="Yes, I like!"
                                    onClick={() => this.closeSecondModalHandler()}/>
                        </>
                    }
                />}
            </div>
        )
    }
}

export default App;