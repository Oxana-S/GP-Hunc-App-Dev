'use client';

import React from 'react';
import { IAgencyInfo } from '../interfaces';
import CustomDomainForm from './CustomDomainForm';
import AgencyCard from '../components/AgencyCard';

interface IProps {
    agencyInfo: IAgencyInfo;
}

const CustomDomain: React.FC<IProps> = ({
    agencyInfo
}) => {   
    return (
        <div className='flex gap-12'>
            <AgencyCard
                agencyInfo={agencyInfo}
            />

            <div className='flex-1'>
                <CustomDomainForm
                    initial={agencyInfo}
                />
            </div>
        </div>
    );
}

export default CustomDomain;