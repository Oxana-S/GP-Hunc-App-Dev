'use client';

import React, { useMemo, useState } from 'react';
import classnames from 'classnames';
import { Avatar } from '@mantine/core';

import { AnimatePresence, motion } from 'framer-motion';

import styles from './UserAuth.module.scss';
import Icon from '@/components/Icon';
import Link from 'next/link';

interface IProps {

}

const UserAuth: React.FC<IProps> = ({

}) => {
    const [opened, setOpened] = useState(false);

    const userInfo = useMemo(() => {
        return {
            name: 'John Reads',
            group: 'Administrator',
            email: 'marvin.mckinn@ymail.com'
        }
    }, [])

    return (
        <div className={styles.userAuth}>
            <div className='flex items-center' onClick={() => setOpened(prev => !prev)}>
                <Avatar size={42} name={userInfo.name} color="initials" className={styles.userAuth__avatar}/>
                
                <div className={styles.userAuth__info}>
                    <span className={styles.userAuth__name}>
                        {userInfo.name}
                    </span>

                    <span className={styles.userAuth__group}>
                        {userInfo.group}
                    </span>
                </div>

                <Icon
                    src='/images/icon-chevron-down.svg'
                    className={classnames(
                        styles.userAuth__icon,
                        'transition-all',
                        {
                            'rotate-180': opened
                        }
                    )}
                />
            </div>
            
            <AnimatePresence>
                {opened && (
                    <motion.div
                        className={styles.userAuth__dropdown}
                        initial={{
                            y: '95%',
                            opacity: 0
                        }}
                        animate={{
                            y: '100%',
                            opacity: 1
                        }}
                        exit={{
                            y: '95%',
                            opacity: 0
                        }}
                    >
                        <div className={styles.userAuth__userInfo}>
                            <Avatar size={42} name={userInfo.name} color="initials" className={styles.userAuth__avatar}/>
                    
                            <div className={styles.userAuth__info}>
                                <span className={styles.userAuth__name}>
                                    {userInfo.name}
                                </span>

                                <span className={styles.userAuth__email}>
                                    {userInfo.email}
                                </span>
                            </div>
                        </div>

                        <div className={styles.userAuth__divider}/>

                        <Link href='/user' className={styles.userAuth__dropItem}>
                            <Icon
                                src='/images/icon-user.svg'
                                className={styles.userAuth__dropItemIcon}
                            />

                            <span>
                                Profile
                            </span>
                        </Link>

                        <div className={styles.userAuth__dropItem}>
                            <Icon
                                src='/images/icon-settings.svg'
                                className={styles.userAuth__dropItemIcon}
                            />

                            <span>
                                Payment Plan
                            </span>
                        </div>

                        <div className={styles.userAuth__dropItem}>
                            <Icon
                                src='/images/icon-question.svg'
                                className={styles.userAuth__dropItemIcon}
                            />

                            <span>
                                Affiliate
                            </span>
                        </div>

                        <div className={styles.userAuth__divider}/>

                        <div className={styles.userAuth__dropItem}>
                            <Icon
                                src='/images/icon-sign-out.svg'
                                className={styles.userAuth__dropItemIcon}
                            />

                            <span>
                                Sign Out
                            </span>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default UserAuth;