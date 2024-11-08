import React from 'react';

import Link from 'next/link';

import styles from './TextLink.module.scss';

interface IProps {
    href: string;   
}

const TextLink: React.FC<React.PropsWithChildren<IProps>> = ({
    children,
    href
}) => {
    return (
        <Link href={href}>
            <span className={styles.textLink}>
                {children}
            </span>
        </Link>
    )
}

export default TextLink;