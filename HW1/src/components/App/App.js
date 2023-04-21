import React from 'react';
import Button from "../Button/Button";
import Modal from "../Modal/Modal";

import './App.scss';

class App extends React.Component {

    state = {
        showFirstModal: false
    }

    showFirstModalHandler = () => {
        this.setState({showFirstModal: true})
    }

    closeFirstModalHandler = () => {
        this.setState({showFirstModal: false})
    }

    render() {

        return (
            <div className="container">
                <Button
                    backgroundColor="#e74c3c"
                    text="Open first modal"
                    onClick={() => this.showFirstModalHandler()}/>

                {this.state.showFirstModal && <Modal
                    header="Do you want to delete this file?"
                    closeButton={true}
                    text="Once you delete this file, it won't be possible to undo this action. Are you sure you want to delete it?"
                    closeModal={this.closeFirstModalHandler}
                    actions={
                        <>
                            <Button backgroundColor="#b3382c" text="Ok" onClick={() => this.closeFirstModalHandler()}/>
                            <Button backgroundColor="#b3382c" text="Cancel" onClick={() => this.closeFirstModalHandler()}/>
                        </>
                    }
                />}
            </div>
        )
    }
}

export default App;