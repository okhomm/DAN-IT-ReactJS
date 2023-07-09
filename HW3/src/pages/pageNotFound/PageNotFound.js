import PageTitle from "../../components/utilits/PageTitle/PageTitle";
import EmptyPage from '../../components/utilits/EmptyPage/EmptyPage';

import styles from './PageNotFound.module.css';
const PageNotFound = () => {
    return (
        <>
            <PageTitle title="Page not found"/>
            <EmptyPage pageTitle="404 Page not found" pageName="404"/>
        </>
    )
}

export default PageNotFound