import React from 'react';

import styles from './AppBar.module.scss';
import Logo from '../Logo';
import UserAuth from './components/UserAuth';

const AppBar: React.FC = ({

}) => {
    return (
        <div className={styles.appBar}>
            <Logo className={styles.appBar__logo}/>

            <UserAuth/>
        </div>
    )
}

export default AppBar;