import React from "react";
import { Button, Text } from "@mantine/core";
import Image from "@/components/Image";

import styles from "./GoogleAuthButton.module.scss";

const GoogleAuthButton: React.FC = ({}) => {
  return (
    <Button
      className={styles.googleAuthButton}
      color={"#000"}
      size="xl"
      leftSection={
        <Image alt="" className="w-6 h-6" src="/images/google.svg" />
      }
    >
      <Text size="lg">Sign In with Google</Text>
    </Button>
  );
};

export default GoogleAuthButton;
