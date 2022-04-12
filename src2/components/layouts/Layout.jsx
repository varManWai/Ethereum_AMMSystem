import MainNavigation from './MainNavigation';
import classes from './Layout.module.css';

const Layout = (props) => {
    return (
        <div>
            <h1>sdfkd</h1>
            <MainNavigation />
            <main className={classes.main} >{props.children}</main>
        </div>
    );
}

export default Layout;