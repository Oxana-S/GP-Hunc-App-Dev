"use client";

import Button from '@/components/Button';
import Modal from '@/components/Modal';
import { Table } from '@/components/Table/Table';
import { TextInput, Title } from '@mantine/core';
import React, { useState } from 'react';

import styles from './CallersScreen.module.scss';

interface ITableItem {
    phone: string;
    agent: string;
    type: string;
}

const CallersScreen: React.FC = ({

}) => {
    const [twilioImportModal, setTwilioImportModal] = useState(false);

    return (
      <div>
        <Modal
          isOpen={twilioImportModal}
          onClose={() => setTwilioImportModal(false)}
          title="Twilio Integration"
        >
          <div className={styles.modal__content}>
            <div className={styles.modal__fields}>
              <TextInput
                variant="filled"
                size="lg"
                label="Enter Account SID"
                withAsterisk
                placeholder="SID here"
                className={styles.modal__fieldWrapper}
                classNames={{
                  input: styles.modal__field
                }}
              />
  
              <TextInput
                variant="filled"
                size="lg"
                label="Enter Authentication Token"
                type="password"
                withAsterisk
                autoComplete="new-password"
                placeholder="Here"
                className={styles.modal__fieldWrapper}
                classNames={{
                  input: styles.modal__field
                }}
              />
            </div>
  
            <Button
              variant="fill"
              className="w-fit mx-auto"
            >
              Authenticate
            </Button>
          </div>
        </Modal>
  
        <div className="px-7 pt-6 pb-10 bg-white border border-[#EAEAEA] mb-2">
          <div className="flex justify-between w-full">
            <Title order={1} size={36} c="#161616" mb="lg">
              Callers IDs
            </Title>
  
            <Button
              onClick={() => setTwilioImportModal(true)}
              variant="fill"
              icon='/images/twilio-import.svg'
            >
              Import From Twilio
            </Button>
          </div>
  
          <Table
            columns={[
              {
                label: "Phone Number",
                field: "phone",
              },
              {
                label: "Assigned Agent",
                field: "agent",
              },
              {
                label: "Type",
                field: "type",
              },
            ]}
            data={[...new Array(12)].map(
              () =>
                ({
                  phone: "+4314420194",
                  agent: "Cell",
                  type: "Outbound Call",
                } as ITableItem)
            )}
          />
        </div>
      </div>
    );
}

export default CallersScreen;