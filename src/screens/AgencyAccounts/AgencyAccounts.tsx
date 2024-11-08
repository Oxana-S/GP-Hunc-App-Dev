"use client";

import Button from '@/components/Button';
import Modal from '@/components/Modal';
import { Table } from '@/components/Table/Table';
import { Avatar, TextInput } from '@mantine/core';
import React, { useState } from 'react';

import styles from './AgencyAccounts.module.scss';
import PageContentCard from '@/components/PageContentCard';
import Pagination from '@/components/Pagination';
import SwitchRow from '@/components/SwitchRow';

interface ITableItem {
  name: string;
  img?: string;
  email: string;
  type: 'AI' | 'Human';
  time: number;
}


const AgencyAccountsScreen: React.FC = ({

}) => {
    const [modalOpened, setModalOpened] = useState(false);

    return (
      <div>
        <Modal
          isOpen={modalOpened}
          onClose={() => setModalOpened(false)}
          title="Create SubAccount"
        >
          <div className={styles.modal__content}>
            <div className={styles.modal__fields}>
              <TextInput
                variant="filled"
                size="lg"
                label="Client Name"
                withAsterisk
                placeholder="Name here"
                className={styles.modal__fieldWrapper}
                classNames={{
                  input: styles.modal__field
                }}
              />
  
              <TextInput
                variant="filled"
                size="lg"
                label="Email Address"
                withAsterisk
                placeholder="Email here"
                className={styles.modal__fieldWrapper}
                classNames={{
                  input: styles.modal__field
                }}
              />

              <div className='flex flex-col gap-2 w-full'>
                <span className='text-lg font-semibold'>
                  Visibility
                </span>
                <SwitchRow label="Dashboard" />
                <SwitchRow label="Prompt" />
                <SwitchRow label="Configure" />
                <SwitchRow label="Deployment" />
                <SwitchRow label="Actions"/>
              </div>
            </div>
  
            <Button
              variant="fill"
              className="w-fit mx-auto"
            >
              Create
            </Button>
          </div>
        </Modal>
  
        
        <PageContentCard
          title="Agency / Subaccounts"
          right={(
            <Button
              variant='fill'
              onClick={() => setModalOpened(true)}
            >
              Create New Subaccount
            </Button>
          )}
        >
          <Table
            columns={[
              {
                label: "Customer Name",
                component: (item) => (
                  <>
                    <Avatar size={30} mr='sm' name={item.name} color="initials"/>
                    {item.name}
                  </>
                )
              },
              {
                label: "Email",
                field: "email",
              },
              {
                label: "Assistant",
                component: (item) => (
                  <div className="flex items-center justify-center bg-[#E76F51] text-[#E76F51] bg-opacity-20 h-6 w-1/2 rounded-full">
                    {item.type}
                  </div>
                )
              },
              {
                label: "Mins (last 30 days)",
                component: (item) => `${item.time} mins`
              },
            ]}
            data={[...new Array(12)].map(
              () =>
                ({
                  name: 'Annette Black',
                  email: 'curtis.weaver@example.com',
                  time: 20,
                  type: 'AI'
                } as ITableItem)
            )}
          />

          <div className="flex justify-end">
            <Pagination
              total={10}
              current={5}
              className="mt-5"
            />
          </div>
        </PageContentCard>
      </div>
    );
}

export default AgencyAccountsScreen;