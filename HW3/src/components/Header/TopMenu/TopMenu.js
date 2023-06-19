import {AiOutlineMenu} from "react-icons/ai";
import {HiPhone} from "react-icons/hi";
import {FaUser} from "react-icons/fa";
import styled from "./TopMenu.module.css";

const TopMenu = () => {
    return (
        <div className={styled.bg}>
            <div className={styled.container}>
                <div className={styled.leftBox}>
                    <nav className={styled.catalog}>
                        <AiOutlineMenu className={styled.catalogIcon}/>
                        <span className={styled.catalogText}>Catalog</span>
                    </nav>
                    <span className={styled.item}>Information</span>
                    <span className={styled.itemPhone}>
                            <HiPhone className={styled.itemIcon}/>
                            0 800 33-96-91
                         </span>
                </div>
                <div className={styled.rightBox}>
                        <span className={styled.item}>
                            <FaUser className={styled.itemIcon}/>
                            Cabinet
                        </span>
                </div>
            </div>
        </div>
    )
}

export default TopMenu;