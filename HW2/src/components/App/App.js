import React from "react";
import Header from "../Header/Header";
import styles from "./App.module.css"
class App extends React.Component {
    render() {
        return (
            <div className={styles.wrapper}>
                <div>
                    <Header/>
                </div>
            </div>
            )
    }
}

export default App;