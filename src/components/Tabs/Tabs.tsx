'use client';

import React, { useCallback, useMemo } from 'react';
import Icon from '../Icon';
import { motion } from 'framer-motion';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import classNames from 'classnames';

import styles from './Tabs.module.scss';

export interface ITabItem {
    slug: string;
    label: string;
    icon?: string;
    content?: React.ReactNode;
}

interface IProps {
    items: ITabItem[];
    defaultTab?: string;
    searchKey?: string;
    className?: string;
}

const Tabs: React.FC<IProps> = ({
    items,
    defaultTab,
    className,
    searchKey = 'tab'
}) => {
    const searchParams = useSearchParams();

    const selected = useMemo(() => {
        return searchParams.get(searchKey) || defaultTab;
    }, [searchParams, defaultTab, searchKey])

    const activeTab = useMemo(() => {
        return items.find((el) => el.slug === selected);
    }, [items, selected])

    const getParamsString = useCallback((val: string) => {
        const nextParams = new URLSearchParams(searchParams)

        nextParams.set(searchKey, val)

        return nextParams.toString()
    }, [searchParams, searchKey])

    return (
        <div className={classNames(className, 'flex flex-col gap-6')}>
            <div className='w-fit flex relative rounded-full overflow-hidden bg-[#F8F8F8]'>
                {items.map((item) => (
                    <Link
                        key={item.slug}
                        className={classNames('relative h-12 px-5 flex justify-center items-center')}
                        href={`?${getParamsString(item.slug)}`}
                    >
                        <div
                            className={classNames('relative z-10', styles.tabs__text, {
                                'text-primary': item.slug !== selected,
                                'text-white': item.slug === selected
                            })}
                        >
                            {item.icon && (
                                <Icon
                                    src={item.icon}
                                />
                            )}

                            <span className='text-lg font-medium'>
                                {item.label}
                            </span>
                        </div>

                        {item.slug === selected && (
                            <motion.div
                                layoutId={searchKey}
                                className='absolute top-0 right-0 bottom-0 left-0 bg-primary rounded-full'
                            />
                        )}
                    </Link>
                ))}
            </div>

            {activeTab?.content}
        </div>
    )
}

export default Tabs;