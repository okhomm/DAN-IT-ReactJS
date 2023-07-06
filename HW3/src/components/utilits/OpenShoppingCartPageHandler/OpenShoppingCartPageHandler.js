import { useNavigate } from 'react-router-dom';
import PropTypes from "prop-types";
import Button from "../Button/Button";

const OpenShoppingCartPageHandler = (props) => {
    const navigate = useNavigate();
    const {closeShoppingCart} = props;

    const openShoppingCartPageHandler = () => {
        closeShoppingCart();
        navigate('/cart');
    }

    return (
        <Button
            backgroundColor={'#f4cd88'}
            text="View cart"
            onClick={openShoppingCartPageHandler}
        />
    );
};

OpenShoppingCartPageHandler.propTypes = {
    closeShoppingCart: PropTypes.func.isRequired
}

export default OpenShoppingCartPageHandler;