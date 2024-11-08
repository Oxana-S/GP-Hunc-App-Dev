import React from 'react';

import styles from './Button.module.scss';

import { Button as Btn, DefaultMantineColor } from "@mantine/core";
import classNames from 'classnames';
import Icon from '../Icon';

interface IProps {
    variant?: 'fill' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    leftSection?: React.ReactNode;
    rightSection?: React.ReactNode;
    round?: boolean;
    color?: DefaultMantineColor;
    height?: number;
    onClick?: () => void;
    className?: string;
    icon?: string;
    w?: number;
}

const Button: React.FC<React.PropsWithChildren<IProps>> = ({
    children,
    icon,
    variant = 'fill',
    size = 'md',
    leftSection,
    rightSection,
    onClick,
    className,
    w
}) => {
    return (
        <Btn
            variant={variant}
            leftSection={leftSection}
            rightSection={rightSection}
            className={classNames(className, styles.button, styles[`button_${variant}`], styles[`button_${size}`])}
            onClick={onClick}
            w={w}
        >
            <div className={styles.button__content}>
                {icon && <Icon
                    src={icon}
                    className={styles.button__icon}
                />}

                {children}
            </div>
        </Btn>
    )
}

export default Button;