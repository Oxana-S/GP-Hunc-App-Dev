import React, { Suspense } from 'react';
import classnames from 'classnames';

import styles from './PaymentPlan.module.scss';
import Button from '@/components/Button';
import Icon from '@/components/Icon';
import Image from '@/components/Image';
import Tabs from '@/components/Tabs';

interface IProps {

}

const PaymentPlan: React.FC<IProps> = ({

}) => {
    return (
        <div className={styles.paymentPlan}>
            <div className={styles.paymentPlan__title}>
                Your Current Plan
            </div>

            <div className={styles.paymentPlan__current}>
                <div>
                    <div className={styles.paymentPlan__currentTitle}>
                        Starter
                    </div>
                    <div className={styles.paymentPlan__currentText}>
                        Ideal for AI voice assistant testing
                    </div>
                    <Button
                        variant='outline'
                    >
                        $20 / USD month
                    </Button>
                </div>

                <div className={classnames(styles.paymentPlan__currentPlan, 'bg-primary bg-opacity-10')}>
                    <div className={styles.paymentPlan__currentPlanTitle}>
                        Include
                    </div>

                    <div className={styles.paymentPlan__currentPlanList}>
                        <div className={styles.paymentPlan__currentPlanItem}>
                            <Icon
                                src='/images/icon-check-circle.svg'
                                className='w-6 h-6 mr-2'
                            />

                            <span>
                                1 Workspace
                            </span>
                        </div>

                        <div className={styles.paymentPlan__currentPlanItem}>
                            <Icon
                                src='/images/icon-check-circle.svg'
                                className='w-6 h-6 mr-2'
                            />

                            <span>
                                1 Active assistant
                            </span>
                        </div>

                        <div className={styles.paymentPlan__currentPlanItem}>
                            <Icon
                                src='/images/icon-check-circle.svg'
                                className='w-6 h-6 mr-2'
                            />

                            <span>
                                Custom Actions
                            </span>
                        </div>
                    </div>
                </div>

                <Button
                    variant='fill'
                >
                    Upgrade
                </Button>
            </div>

            <hr className='my-8'/>

            <div className={styles.paymentPlan__title}>
                Our Pricing Plans
            </div>

            <div className={styles.paymentPlan__plan}>
                <div className={styles.paymentPlan__planRow}>
                    <div className={styles.paymentPlan__planCol}>
                        <div className='text-2xl max-w-[240px]'>
                            Streamline Your HR with the Right Plan
                        </div>

                        <Suspense>
                            <Tabs
                                className='mt-2'
                                searchKey='plan_period'
                                defaultTab='monthly'
                                items={[
                                    {
                                        label: 'Monthly',
                                        slug: 'monthly'
                                    },
                                    {
                                        label: 'Annually',
                                        slug: 'anually'
                                    }
                                ]}
                            />
                        </Suspense>
                    </div>

                    <div className={styles.paymentPlan__planCol}>
                        <div>
                            <div className='text-base'>
                                Starter
                            </div>

                            <div className='flex gap-1 items-end mb-2'>
                                <span className='text-3xl'>
                                    $20
                                </span>
                                <span className='text-lg opacity-60'>
                                    /month
                                </span>
                            </div>

                            <Button
                                variant='fill'
                            >
                                Subscribe Now
                            </Button>
                        </div>
                    </div>

                    <div className={styles.paymentPlan__planCol}>
                        <div>
                            <div className='text-base'>
                                Starter
                            </div>

                            <div className='flex gap-1 items-end mb-2'>
                                <span className='text-3xl'>
                                    $120
                                </span>
                                <span className='text-lg opacity-60'>
                                    /month
                                </span>
                            </div>

                            <Button
                                variant='fill'
                            >
                                Subscribe Now
                            </Button>
                        </div>
                    </div>

                    <div className={styles.paymentPlan__planCol}>
                        <div>
                            <div className='text-base'>
                                Starter
                            </div>

                            <div className='flex gap-1 items-end mb-2'>
                                <span className='text-3xl'>
                                    $150
                                </span>
                                <span className='text-lg opacity-60'>
                                    /month
                                </span>
                            </div>

                            <Button
                                variant='fill'
                            >
                                Subscribe Now
                            </Button>
                        </div>
                    </div>
                </div>

                <div className={styles.paymentPlan__planRow}>
                    <div className={styles.paymentPlan__planCol}>
                        <div className='text-xl max-w-[240px]'>
                            Minutes Included
                        </div>
                    </div>

                    <div className={styles.paymentPlan__planCol}>
                        <Image
                            src='/images/icon-check-green.svg'
                            alt=''
                            className='w-10 h-10'
                        />
                    </div>

                    <div className={styles.paymentPlan__planCol}>
                        <Image
                            src='/images/icon-check-green.svg'
                            alt=''
                            className='w-10 h-10'
                        />
                    </div>

                    <div className={styles.paymentPlan__planCol}>
                        <Image
                            src='/images/icon-check-green.svg'
                            alt=''
                            className='w-10 h-10'
                        />
                    </div>
                </div>

                <div className={styles.paymentPlan__planRow}>
                    <div className={styles.paymentPlan__planCol}>
                        <div className='text-xl max-w-[240px]'>
                            White Label
                        </div>
                    </div>

                    <div className={styles.paymentPlan__planCol}>
                        <Image
                            src='/images/icon-check-green.svg'
                            alt=''
                            className='w-10 h-10'
                        />
                    </div>

                    <div className={styles.paymentPlan__planCol}>
                        <Image
                            src='/images/icon-check-green.svg'
                            alt=''
                            className='w-10 h-10'
                        />
                    </div>

                    <div className={styles.paymentPlan__planCol}>
                        <Image
                            src='/images/icon-check-green.svg'
                            alt=''
                            className='w-10 h-10'
                        />
                    </div>
                </div>

                <div className={styles.paymentPlan__planRow}>
                    <div className={styles.paymentPlan__planCol}>
                        <div className='text-xl max-w-[240px]'>
                            Rebilling
                        </div>
                    </div>

                    <div className={styles.paymentPlan__planCol}>
                    </div>

                    <div className={styles.paymentPlan__planCol}>
                        <Image
                            src='/images/icon-check-green.svg'
                            alt=''
                            className='w-10 h-10'
                        />
                    </div>

                    <div className={styles.paymentPlan__planCol}>
                        <Image
                            src='/images/icon-check-green.svg'
                            alt=''
                            className='w-10 h-10'
                        />
                    </div>
                </div>

                <div className={styles.paymentPlan__planRow}>
                    <div className={styles.paymentPlan__planCol}>
                        <div className='text-xl max-w-[240px]'>
                            Workspaces
                        </div>
                    </div>

                    <div className={styles.paymentPlan__planCol}>
                    </div>

                    <div className={styles.paymentPlan__planCol}>
                        <Image
                            src='/images/icon-check-green.svg'
                            alt=''
                            className='w-10 h-10'
                        />
                    </div>

                    <div className={styles.paymentPlan__planCol}>
                        <Image
                            src='/images/icon-check-green.svg'
                            alt=''
                            className='w-10 h-10'
                        />
                    </div>
                </div>

                <div className={styles.paymentPlan__planRow}>
                    <div className={styles.paymentPlan__planCol}>
                        <div className='text-xl max-w-[240px]'>
                            Assistants
                        </div>
                    </div>

                    <div className={styles.paymentPlan__planCol}>
                        1
                    </div>

                    <div className={styles.paymentPlan__planCol}>
                        5
                    </div>

                    <div className={styles.paymentPlan__planCol}>
                        Unlimited
                    </div>
                </div>

                <div className={styles.paymentPlan__planRow}>
                    <div className={styles.paymentPlan__planCol}>
                        <div className='text-xl max-w-[240px]'>
                            Workspaces
                        </div>
                    </div>

                    <div className={styles.paymentPlan__planCol}>
                    </div>

                    <div className={styles.paymentPlan__planCol}>
                    </div>

                    <div className={styles.paymentPlan__planCol}>
                        <Image
                            src='/images/icon-check-green.svg'
                            alt=''
                            className='w-10 h-10'
                        />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default PaymentPlan;