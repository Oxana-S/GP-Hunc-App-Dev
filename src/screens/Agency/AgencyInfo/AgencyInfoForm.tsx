'use client';

import React, { useState } from 'react';
import Button from '@/components/Button';
import { TextInput } from '@mantine/core';
import { IAgencyInfo } from '../interfaces';

interface IProps {
    initial: IAgencyInfo;
}

const AgencyInfoForm: React.FC<IProps> = ({
    initial
}) => {
    const [editable, setEditable] = useState(false);

    console.log(initial);

    return (
        <div>
            <div className='flex justify-between items-center mb-5'>
                <span className='text-2xl font-semibold'>
                    Agency Information
                </span>

                <Button
                    variant='outline'
                    onClick={() => setEditable(prev => !prev)}
                    icon='/images/icon-edit.svg'
                >
                    {editable ? 'Save' : 'Edit'}
                </Button>
            </div>

            <div className='flex flex-col gap-5'>
                <TextInput
                    variant="filled"
                    size="lg"
                    withAsterisk
                    label="Agency Name"
                    placeholder="Name here"
                    readOnly={!editable}
                    disabled={!editable}
                />

                <TextInput
                    variant="filled"
                    size="lg"
                    withAsterisk
                    label="Email"
                    placeholder="Email here"
                    readOnly={!editable}
                    disabled={!editable}
                />

                <TextInput
                    variant="filled"
                    size="lg"
                    label="Phone Number"
                    placeholder="Enter number here"
                    readOnly={!editable}
                    disabled={!editable}
                />

                <TextInput
                    variant="filled"
                    size="lg"
                    label="Location"
                    placeholder="--select--"
                    readOnly={!editable}
                    disabled={!editable}
                />
                
                {editable && (
                    <Button
                    variant='fill'
                    className='w-fit'
                    icon='/images/icon-edit.svg'
                >
                    Custom Branding
                </Button>
                )}
            </div>
        </div>
    )
}

export default AgencyInfoForm;