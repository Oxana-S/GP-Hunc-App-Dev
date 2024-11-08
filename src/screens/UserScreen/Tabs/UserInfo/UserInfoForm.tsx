'use client';

import React, { useState } from 'react';
import Button from '@/components/Button';
import { TextInput } from '@mantine/core';
import { IUserInfo } from '@/interfaces/user';

interface IProps {
    initial: IUserInfo;
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
                    Profile Information
                </span>

                <div className='flex gap-2'>
                    <Button
                        variant='outline'
                        className='w-fit'
                    >
                        Delete profile
                    </Button>
                    
                    <Button
                        variant='outline'
                        onClick={() => setEditable(prev => !prev)}
                        icon='/images/icon-edit.svg'
                    >
                        {editable ? 'Save' : 'Edit'}
                    </Button>
                </div>
            </div>

            <div className='flex flex-col gap-5'>
                <TextInput
                    variant="filled"
                    size="lg"
                    withAsterisk
                    label="Full Name"
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
                    label="Language"
                    placeholder="select"
                    readOnly={!editable}
                    disabled={!editable}
                />

                <TextInput
                    variant="filled"
                    size="lg"
                    label="Time zone"
                    placeholder="select"
                    readOnly={!editable}
                    disabled={!editable}
                />
            </div>
        </div>
    )
}

export default AgencyInfoForm;