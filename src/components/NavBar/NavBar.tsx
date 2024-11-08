import React from 'react';

import styles from './NavBar.module.scss';
import NavItem from './components/NavItem';

const NavBar: React.FC<React.PropsWithChildren> = ({
    children
}) => {
    return (
        <div className={styles.navbar__wrapper}>
            <div className={styles.navbar}>
                <div className={styles.navbar__items}>
                    <NavItem
                        label='Dashboard'
                        icon='/images/nav/dashboard.svg'
                        href='/dashboard'
                    />

                    <NavItem
                        label='Agents'
                        icon='/images/nav/agents.svg'
                        href='/agents'
                    />

                    <NavItem
                        label='Callers IDs'
                        icon='/images/nav/callers.svg'
                        href='/callers'
                    />

                    <NavItem
                        label='Integration'
                        icon='/images/nav/integration.svg'
                        href='/integration'
                    />

                    <NavItem
                        label='Team'
                        icon='/images/nav/team.svg'
                        href='/team'
                    />

                    <NavItem
                        label='Agency'
                        icon='/images/nav/agency.svg'
                        href='/agency'
                        subRoutes={[
                            {
                                label: 'Profile Setup',
                                href: '/agency/profile'
                            },
                            {
                                label: 'Accounts',
                                href: '/agency/accounts'
                            }
                        ]}
                    />

                    <NavItem
                        label='Settings'
                        icon='/images/nav/settings.svg'
                        href='/settings'
                    />
                </div>
            </div>
            <main className={styles.navbar__content}>
                {children}
            </main>

            <div className={styles.navbar__overlay} id='modalContainer'/>
        </div>
    )
}

export default NavBar;