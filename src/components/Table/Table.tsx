'use client';

import classNames from "classnames";
import React from "react";

import styles from './Table.module.scss';

interface IColumn<T> {
    label: string;
    field?: keyof T;
    className?: string;
    component?: (item: T) => React.ReactNode;
}

interface IProps <T>{
    columns: IColumn<T>[];
    className?: string;
    placeholder?: string | React.ReactNode;
    bodyClassName?: string;

    data: T[];
    onItemClick?: (item: T) => void;
    itemKey?: (item: T) => string;
}

export const Table = <T extends object>({
    data,
    columns,
    className,
    onItemClick,
    placeholder = 'Нет содержимого',
    bodyClassName = '',
    itemKey
}: IProps<T>) => {
    return (
        <div className={classNames(
            className,
            styles.table
        )}>
            <div className={styles.table__header}>
                {columns.map((field, index) => (
                    <div
                        key={index}
                        className={classNames(
                            field.className,
                            styles.table__cell
                        )}
                    >
                        {field.label}
                    </div>
                ))}
            </div>

            <div className={bodyClassName}>
                {data.map((el, index) => (
                    <div
                        key={itemKey ? itemKey(el) : index}
                        className={styles.table__row}
                        onClick={() => onItemClick?.(el)}
                    >
                        {columns.map((col, index) => (
                            <div
                                key={index}
                                className={classNames(
                                    col.className,
                                    styles.table__cell,
                                )}
                            >
                                {!col.component && col.field && (
                                    (el as any)[col.field]
                                )}

                                {col.component && (
                                    col.component(el)
                                )}
                            </div>
                        ))}
                    </div>
                ))}
            </div>

            {data.length == 0 && (
                <div className="h-20 flex justify-center items-center">
                    <span className="text-gray-500">
                        {placeholder}
                    </span>
                </div>
            )}
        </div>
    )
}