import React from "react";
import { Switch } from "@mantine/core";

import styles from './SwitchRow.module.scss';

interface IProps {
    label: string;
}

const SwitchRow: React.FC<IProps> = ({
    label
}) => {
  return (
    <Switch
        className={styles.switchRow}
      label={label}
      size="md"
      labelPosition="left"
      classNames={{
        body: "justify-between",
      }}
    />
  );
};

export default SwitchRow;
