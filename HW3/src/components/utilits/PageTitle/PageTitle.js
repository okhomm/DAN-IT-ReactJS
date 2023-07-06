import PropTypes from 'prop-types';
import styled from './PageTitle.module.css';
const PageTitle = (props) => {
    const {title} = props;
    return (
        <div className={styled.container}>
            <h2>{title}</h2>
            <hr/>
        </div>
    )
}

PageTitle.propTypes = {
    title: PropTypes.string
}

PageTitle.defaultProps = {
    title: 'Page title'
}

export default PageTitle;