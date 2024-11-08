import React, { Suspense } from 'react';
import PageContentCard from '@/components/PageContentCard';
import Tabs from '@/components/Tabs';
import UserInfo from './Tabs/UserInfo';
import { IUserInfo } from '@/interfaces/user';
import PaymentPlan from './Tabs/PaymentPlan';

interface IProps {

}

const UserScreen: React.FC<IProps> = ({

}) => {
    const userInfo: IUserInfo = {
        name: 'User Name',
        img: '#',
        contacts: [
            {
                type: 'mail',
                value: 'carliejohn@gmail.com'
            },
            {
                type: 'phone',
                value: '+12 3456 7890'
            },
            {
                type: 'loc',
                value: 'Toronto, California, 1234'
            }
        ]
    }

    return (
        <div>
            <PageContentCard>
                <Suspense>
                    <Tabs
                        defaultTab="profile"
                        items={[
                            {
                                label: 'Profile Info',
                                slug: 'profile',
                                content: <UserInfo info={userInfo}/>
                            },
                            {
                                label: 'Payment Plan',
                                slug: 'paymentplan',
                                content: <PaymentPlan/>
                            }
                        ]}
                    />
                </Suspense>
            </PageContentCard>
        </div>
    )
}

export default UserScreen;