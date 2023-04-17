import React from 'react';
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import data from "../../data";

import './App.scss';

class App extends React.Component {

    state = {
        showModal: false,
        modalName: null
    }

    closeModalHandler = () => {
        this.setState({showModal:false})
    }

    closeModalFromBgHandler = (e) => {
        e.preventDefault();
        if(e.target.classList.contains('close')) {
            this.closeModalHandler();
        }
    }
    render() {
        const [firstModal,
            secondModal] = data;
        const modalName = this.state.modalName;

        return (
            <div className="container">
                <Button
                    id="1"
                    backgroundColor="#e74c3c"
                    text="Open first modal"
                    onClick={() => this.setState({modalName: firstModal, showModal: true})}/>

                <Button
                    id="2"
                    backgroundColor="orange"
                    text="Open second modal"
                    onClick={() => this.setState({modalName: secondModal, showModal: true})}/>

                {this.state.showModal && <Modal
                    header={modalName.header}
                    closeButton={modalName.closeButton}
                    text={modalName.text}
                    modalBackground={modalName.background}
                    closeModal={this.closeModalHandler}
                    closeModalFromBg={this.closeModalFromBgHandler}
                    actions={
                        modalName.actions.map(item => {
                            return <Button
                                key={item.id}
                                {...item}
                                onClick={() => this.setState({showModal: false})}/>
                        })
                    }/>}
            </div>
        )
    }
}

export default App;