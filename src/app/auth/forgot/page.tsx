import Icon from "@/components/Icon";
import Image from "@/components/Image";
import { Button, TextInput, Title } from "@mantine/core";

import styles from "../styles.module.scss";
import Logo from "@/components/Logo";

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen">
      <div className={styles.cover}>
        <Icon
          src="/images/img-placeholder.svg"
          className="w-24 h-24 text-white"
        />

        <Image
          className="absolute right-0 bottom-0"
          src="/images/auth-overlay.svg"
          alt=""
        />
      </div>

      <div className={styles.panel}>
        <Logo
          className={styles.logo}
        />

        <Title order={1} size={48} className={styles.title}>
          Forgot Password!
        </Title>

        <div className={styles.fields}>
          <TextInput
            variant="filled"
            size="md"
            label="Email Address"
            withAsterisk
            placeholder="Your email"
            rightSection={
              <Icon
                src="/images/icon-mail.svg"
                className="w-6 h-6 text-[#212529]"
              />
            }
          />
        </div>

        <div className={styles.submitGroup}>
          <Button size="lg" w={230}>
            Send
          </Button>
        </div>
      </div>
    </div>
  );
}
