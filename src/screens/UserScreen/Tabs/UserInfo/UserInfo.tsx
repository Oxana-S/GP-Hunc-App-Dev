'use client';

import React from 'react';
import AgencyInfoForm from './UserInfoForm';
import UserCard from '../../components/UserCard';
import { IUserInfo } from '@/interfaces/user';

interface IProps {
    info: IUserInfo;
}

const UserInfo: React.FC<IProps> = ({
    info
}) => {
    
    return (
        <div className='flex gap-12'>
            <UserCard
                info={info}
            />

            <div className='flex-1'>
                <AgencyInfoForm
                    initial={info}
                />
            </div>
        </div>
    )
}

export default UserInfo;