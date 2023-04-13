import React from 'react';
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import data from "../../data";

class App extends React.Component {

    state = {
        showModal: false,
        modalName: null
    }

    closeModalHandler = () => {
        this.setState({showModal:false})
    }
    render() {
        const [firstModal,
            secondModal] = data;
        const modalName = this.state.modalName;

        return (
            <div>
                <Button
                    id="1"
                    backgroundColor="red"
                    text="Open first modal"
                    onClick={() => this.setState({modalName: firstModal, showModal: true})}/>

                <Button
                    id="2"
                    backgroundColor="blue"
                    text="Open second modal"
                    onClick={() => this.setState({modalName: secondModal, showModal: true})}/>

                {this.state.showModal && <Modal
                    header={modalName.header}
                    closeButton={modalName.closeButton}
                    text={modalName.text}
                    closeModal={this.closeModalHandler}
                    actions={
                        modalName.actions.map(item => {
                            return <Button key={item.id} {...item} onClick={() => this.setState({showModal: false})}/>
                        })
                    }/>}
            </div>
        )
    }
}

export default App;