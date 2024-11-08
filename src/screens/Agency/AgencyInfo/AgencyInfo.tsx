'use client';

import React from 'react';
import AgencyInfoForm from './AgencyInfoForm';
import { IAgencyInfo } from '../interfaces';
import AgencyCard from '../components/AgencyCard';

interface IProps {
    agencyInfo: IAgencyInfo;
}

const AgencyInfo: React.FC<IProps> = ({
    agencyInfo
}) => {
    
    return (
        <div className='flex gap-12'>
            <AgencyCard
                agencyInfo={agencyInfo}
            />

            <div className='flex-1'>
                <AgencyInfoForm
                    initial={agencyInfo}
                />
            </div>
        </div>
    )
}

export default AgencyInfo;