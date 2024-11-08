'use client';

import React, { useState } from 'react';
import Button from '@/components/Button';
import { TextInput } from '@mantine/core';
import { IAgencyInfo } from '../interfaces';

interface IProps {
    initial: IAgencyInfo;
}

const CustomDomainForm: React.FC<IProps> = ({
    initial
}) => {
    const [editable, setEditable] = useState(false);

    console.log(initial)

    return (
        <div>
            <div className='flex justify-between items-center mb-5'>
                <span className='text-2xl font-semibold'>
                    Agency Information
                </span>

                <Button
                    variant='outline'
                    onClick={() => setEditable(prev => !prev)}
                    icon={'/images/icon-edit.svg'}
                >
                    {editable ? 'Save' : 'Edit'}
                </Button>
            </div>

            <div className='flex flex-col gap-5'>
                <TextInput
                    variant="filled"
                    size="lg"
                    withAsterisk
                    label="Domain Name"
                    placeholder="Name here"
                    readOnly={!editable}
                    disabled={!editable}
                />

                <TextInput
                    variant="filled"
                    size="lg"
                    label="DNS Record Configuration"
                    placeholder=""
                    readOnly={!editable}
                    disabled={!editable}
                />

                <TextInput
                    variant="filled"
                    size="lg"
                    label="Meta Tags"
                    placeholder="Enter tags here"
                    readOnly={!editable}
                    disabled={!editable}
                />
            </div>
        </div>
    )
}

export default CustomDomainForm;