import styles from './Footer.module.css';

const Footer = () => {
    return (
            <footer className={styles.container}>
                <div className={styles.bg}>
                    <p className={styles.text}>LaptopStore. All right reserved &copy;</p>
                </div>

            </footer>
        )
}

export default Footer;