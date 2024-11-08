'use client';

import React from 'react';
import { Accordion, Text } from '@mantine/core';
import Image from '../Image';
import Icon from '../Icon';

interface IProps {
    label: string;
    image?: string;
}

const SingleAccordion: React.FC<React.PropsWithChildren<IProps>> = ({
    label,
    children,
    image
}) => {
    return (
        <Accordion
            variant="filled"
            chevron={<div className='flex justify-center items-center'><Icon src='/images/icon-drop.svg' className='w-6 h-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' /></div>}
            w={'100%'}
            bg={'#F7F7F7'}
            className='rounded-lg overflow-hidden'
        >
            <Accordion.Item value="default">
            <Accordion.Control>
                <div className='flex justify-between items-center gap-5'>
                    {image && (
                        <div>
                            <Image
                                src={image}
                                alt=''
                            />
                        </div>
                    )}
                    
                    <Text size='24px' fw={600} c={'#2F2F2F'} className='flex-1'>
                        {label}
                    </Text>
                </div>
            </Accordion.Control>
            <Accordion.Panel pl={70} pr={50}>{children}</Accordion.Panel>
            </Accordion.Item>
        </Accordion>
    )
}

export default SingleAccordion;