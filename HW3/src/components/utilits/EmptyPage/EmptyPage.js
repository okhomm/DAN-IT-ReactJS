import {GiShoppingCart} from "react-icons/gi";
import { MdFavoriteBorder } from "react-icons/md";
import { BiErrorAlt } from "react-icons/bi";
import styles from './EmptyPage.module.css';
const EmptyPage = (props) => {
    const {pageTitle, pageName} = props;
    let icon = null;

    if (pageName === 'cart') {
        icon = <GiShoppingCart/>
    }
    if (pageName === 'favorite') {
        icon = <MdFavoriteBorder/>
    }
    if (pageName === '404') {
        icon = <BiErrorAlt/>
    }


    return (
        <div className={styles.container}>
            {icon}
            <h2 className={styles.title}>{pageTitle}</h2>
        </div>

    )
}

export default EmptyPage