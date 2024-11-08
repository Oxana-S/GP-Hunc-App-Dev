import React from 'react';
import { Title } from '@mantine/core';

interface IProps {
    title?: string;
    right?: React.ReactNode;
}

const PageContentCard: React.FC<React.PropsWithChildren<IProps>> = ({
    title,
    right,
    children
}) => {
    return (
        <div className='pageCard'>
            <div className="flex justify-between w-full mb-4 empty:hidden">
                {title && <Title order={1} size={36} className='text-onyx'>
                    {title}
                </Title>}

                {right}
            </div>

            {children}
        </div>
    )
}

export default PageContentCard;