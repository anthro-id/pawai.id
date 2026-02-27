import { createTheme, Button, Anchor, Text } from '@mantine/core';

import '@mantine/core/styles/baseline.css';
import '@mantine/core/styles/default-css-variables.css';
import '@mantine/core/styles/global.css';

import "@mantine/core/styles/Flex.css";
import "@mantine/core/styles/SimpleGrid.css";
import "@mantine/core/styles/Text.css";
import "@mantine/core/styles/Image.css";
import "@mantine/core/styles/Title.css";
import "@mantine/core/styles/UnstyledButton.css";
import "@mantine/core/styles/Button.css";
import "@mantine/core/styles/Menu.css";
import "@mantine/core/styles/Popover.css";
import "@mantine/core/styles/ActionIcon.css";

export const mantineTheme = createTheme({
  headings: {
    fontFamily: "'Rocky Ryder', Arial",
    fontWeight: "lighter"
  },

  fontFamily: "'General Sans', Helvetica, sans-serif",

  components: {
    // custom button
    Button: Button.extend({
      defaultProps: {
        ff: "heading",
        radius: 0,
        variant: "white",
        color: "#242424",
        px: "xs",
        lh: 1,
        fw: "lighter",
        size: "2rem",
        tt: "uppercase",
        h: "2.5rem"
      }
    }),

    // anchor
    Anchor: Anchor.extend({
      defaultProps: {
        c: "inherit",
        td: "unset"
      }
    }),

    // text
    Text: Text.extend({
      defaultProps: {
        lts: 0.375
      }
    })
  }
});