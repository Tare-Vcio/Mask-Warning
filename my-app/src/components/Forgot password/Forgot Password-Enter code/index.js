import React from "react";
import styles from "./EnterCode.module.css";
import { Link } from "react-router-dom";
import Header from "../../Header";
const EnterCode = () => {
    return (
        <section >
            <Header/>
            <img src="../icons/line.png" className={styles.lineAll}></img>
            <div className={styles.header}>
                <h1 className={styles.headerString}>Forgot Password</h1>
                <img src="../img/lock.png" className={styles.imageLock} ></img>
            </div>

            <form className={styles.form}>
                <h3 className={styles.formHeader}>Reset your password</h3>
                <img src="../icons/line.png" className={styles.line}></img>
                <div>
                    <h4>Enter the code here</h4>
                    <input className={styles.formControl} id="inputCode" placeholder="Enter code"/>
                    
                </div>
                
                <div className={styles.formButton}>
    
                    <button className={styles.buttonCancel} type="re-send" >Re-send</button>
                    <button className={styles.buttonSend} type="ok" >Ok</button>
                </div>
                
            </form>
            <img className={styles.imageForgot} src="../img/forgot-pass.png"></img>
        </section> 
    )
}

export default EnterCode

