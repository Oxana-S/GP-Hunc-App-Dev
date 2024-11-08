"use client";

import { createTheme, Input } from "@mantine/core";
import { BalooFont } from "./fonts";

import styles from '@/styles/theme.module.scss';

export const theme = createTheme({
  headings: {
    fontFamily: BalooFont.style.fontFamily,
  },
  fontFamily: BalooFont.style.fontFamily,
  fontSmoothing: true,
  components: {
    Input: Input.extend({
      classNames: {
        input: styles.input,
      },
    }),

    InputWrapper: Input.Wrapper.extend({
      classNames: {
        label: styles.input__label,
      },
    }),
  },
});
