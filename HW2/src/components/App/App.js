import React, {Component} from 'react';
import sendRequest from '../../services/sendRequest';
import Header from "../Header/Header";
import ProductList from "../ProductList/ProductList";
import Footer from "../Footer/Footer";
import Button from "../utilits/Button/Button";
import Modal from "../utilits/Modal/Modal";
import styles from './App.module.css';
import {logDOM} from "@testing-library/react";

class App extends Component {

    // state = {
    //     currentModalData: null,
    //     modalIsOpen: false,
    //     modalData: [
    //         {
    //             id: 1,
    //             header: "Do you want to delete this file?",
    //             closeButton: true,
    //             text: "Once you delete this file, it won't be possible to undo this action. Are you sure you want to delete it?",
    //             actions: [
    //                 {
    //                     id: 1,
    //                     backgroundColor: "#b3382c",
    //                     text: "Ok"
    //                 },
    //                 {
    //                     id: 2,
    //                     backgroundColor: "#b3382c",
    //                     text: "Cancel"
    //                 }
    //             ]
    //         },
    //         {
    //             id: 2,
    //             header: "Do you like React.js?",
    //             closeButton: false,
    //             text: "Tell me, do you like studying & React.js?",
    //             actions: [
    //                 {
    //                     id: 1,
    //                     backgroundColor: "#666666",
    //                     text: "Yes"
    //                 },
    //                 {
    //                     id: 2,
    //                     backgroundColor: "#333333",
    //                     text: "Yes, I like!"
    //                 }
    //             ]
    //         }
    //     ]
    // }


    // showModalHandler = (id) => {
    //     const modalData = this.state.modalData;
    //     const currentModalData = modalData.find(modal => modal.id === id);
    //
    //     if (currentModalData) {
    //         this.setState({
    //             currentModalData,
    //             modalIsOpen: true
    //         })
    //     }
    // }

    // closeModalHandler = () => {
    //     this.setState({
    //         modalIsOpen: false
    //     })
    // }

    // componentDidMount() {
        // fetch('/data/data.json').then(res => res.json()).then(res => this.setState({productsList: res}))
        // fetch('data.json')
        //     .then(res => res.json())
        //     .then(res => console.log(res))
        // return result;
    // }

    state = {
        items: [],
    }

    componentDidMount() {
        sendRequest('data.json')
            .then(data => {
                this.setState({
                    items: data
                })
            })
    }


    render() {
        const products = this.state.items

        return (
            //     <div className={styles.container}>
            //         <Button
            //             backgroundColor="#e74c3c"
            //             text="Open first modal"
            //             onClick={() => this.showModalHandler(1)}/>
            //
            //         <Button
            //             backgroundColor="#ffa500"
            //             text="Open second modal"
            //             onClick={() => this.showModalHandler(2)}/>
            //
            //         {this.state.modalIsOpen && <Modal
            //             header={this.state.currentModalData.header}
            //             closeButton={this.state.currentModalData.closeButton}
            //             text={this.state.currentModalData.text}
            //             closeModal={this.closeModalHandler}
            //             isOpen={this.state.modalIsOpen}
            //             actions={
            //                 <>
            //                     {this.state.currentModalData.actions.map(button => {
            //                         return <Button
            //                             key={button.id}
            //                             backgroundColor={button.backgroundColor}
            //                             text={button.text}
            //                             onClick={() => this.closeModalHandler()}/>
            //                     })}
            //                 </>
            //             }
            //         />}
            //     </div>
            <>
                <Header/>
                <ProductList products={products}/>
                <Footer/>
            </>
        )
    }
}

export default App;