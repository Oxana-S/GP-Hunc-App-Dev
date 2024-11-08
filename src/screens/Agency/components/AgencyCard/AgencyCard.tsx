'use client';

import React from 'react';
import { IAgencyInfo } from '../../interfaces';
import Icon from '@/components/Icon';

interface IProps {
    agencyInfo: IAgencyInfo;
}

const AgencyCard: React.FC<IProps> = ({
    agencyInfo
}) => {
    return (
        <div className='border border-[#809FB8] rounded-xl w-[380px] shrink-0 grow-0 min-h-[450px] flex flex-col justify-center items-center self-start'>
                <div className='w-[100px] h-[100px] rounded-full bg-slate-700 mb-4'>
                    
                </div>

                <span className='text-2xl font-semibold mb-9'>
                    {agencyInfo.name}
                </span>

                <div className='flex flex-col gap-6'>
                    {agencyInfo.contacts.map((item, index) => (
                        <div
                            key={index}
                            className='flex gap-3 items-center'
                        >
                            <Icon
                                src={`'/images/icon-contact-${item.type}.svg'`}
                                className='w-6 h-6'
                            />

                            <span className='text-lg opacity-50'>
                                {item.value}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
    )
}

export default AgencyCard;