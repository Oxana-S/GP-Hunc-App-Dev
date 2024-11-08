import Icon from "@/components/Icon";
import Image from "@/components/Image";
import TextLink from "@/components/TextLink";
import {
  Button,
  Divider,
  Text,
  TextInput,
  Title,
} from "@mantine/core";

import styles from "../styles.module.scss";
import GoogleAuthButton from "@/components/GoogleAuthButton";
import Logo from "@/components/Logo";

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen">
      <div className={styles.panel}>
        <Logo
          className={styles.logo}
        />

        <Title order={1} size={48} className={styles.title}>
          Welcome!
        </Title>

        <div className={styles.altAuth}>
          <GoogleAuthButton />

          <Divider
            labelPosition="center"
            w={"320px"}
            label={<Text size="lg">OR</Text>}
          />
        </div>

        <div className={styles.fields}>
          <TextInput
            variant="filled"
            size="md"
            label="Name"
            withAsterisk
            placeholder="Your name"
            rightSection={
              <Icon
                src="/images/icon-user.svg"
                className="w-6 h-6 text-[#212529]"
              />
            }
          />

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

          <TextInput
            variant="filled"
            size="md"
            label="Password"
            withAsterisk
            placeholder="Your password here"
            type="password"
            rightSection={
              <Icon
                src="/images/icon-lock.svg"
                className="w-6 h-6 text-[#212529]"
              />
            }
            autoComplete="new-password"
          />
        </div>

        <div className={styles.submitGroup}>
          <Button size="xl" color="#000" w={230}>
            Sign up
          </Button>

          <div>
            <span>Already a member?&nbsp;</span>
            <TextLink href="/auth/login">Login</TextLink>
          </div>
        </div>
      </div>

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
    </div>
  );
}
