// import { useContext } from 'react';
import { Link } from 'react-router-dom';

import classes from './MainNavigation.module.css';

function MainNavigation() {

    return (
        <header className={classes.header}>
            <div className={classes.logo}>SwapSwap</div>
            <nav>

                <ul>
                    <li >
                        <Link to='/'>Swap</Link>
                    </li>
                    <li>
                        <Link to='/pools'>Pool</Link>
                    </li>
                </ul>
            </nav>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Connect</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;
