import React from 'react';
import classnames from 'classnames';
import { Pagination as PGCmp } from '@mantine/core'

import styles from './Pagination.module.scss'

interface IProps {
    total: number;
    current: number;
    onChange?: (val: number) => void;
    className?: string;
}

const Pagination: React.FC<IProps> = ({
    total,
    current,
    onChange,
    className
}) => {
    return (
        <PGCmp total={total} onChange={onChange} value={current} withEdges className={classnames(styles.pagination, className)} siblings={1} />
    )
}

export default Pagination;