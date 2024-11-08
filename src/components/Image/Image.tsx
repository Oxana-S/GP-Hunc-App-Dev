/* eslint-disable @next/next/no-img-element */

import React, { FC } from 'react'

import classNames from 'classnames';

interface IProps {
    src: string;
    alt: string;
    className?: string;
}

const Image: FC<IProps> = ({
    src,
    alt,
    className
}) => {
    return (
        <img
            className={classNames(className, 'block')}
            alt={alt}
            src={src}
        />
    )
}

export default Image;