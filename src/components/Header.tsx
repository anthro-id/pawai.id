import { useState } from "react";

import { Button, Box, Flex, Image, Text } from "@mantine/core";
import { useViewportSize, useClickOutside } from "@mantine/hooks";

import Link from "next/link";

import { logoURL, textShadow } from "@/config";

import HeaderRoot from "./header/index";
import { ToggleHeaderContext } from "./header/config";

export default function Header() {
  const [headerToggle, setHeaderToggle] = useState<boolean>(false);

  const clickOutsideRef = useClickOutside(() => setHeaderToggle(false));

  const { width: windowWidth } = useViewportSize();
  const isMobile = windowWidth <= 512;

  return (
    <Box ref={clickOutsideRef} pos={"fixed"} top={0} right={0} px={isMobile ? "1rem" : "2.5rem"} py={isMobile ? "md" : "xl"} style={{ zIndex: 10 }}>
      <Flex justify={"flex-end"} gap={"md"}>
        <Button styles={{ root: { transition: "background-color 250ms, color 250ms" } }} bg={headerToggle ? "var(--dark03)" : undefined} color={headerToggle ? "var(--light01)" : undefined} onClick={() => setHeaderToggle(prev => !prev)}>
          Menu
        </Button>

        <Flex direction={"column"} gap={isMobile ? "0.25rem" : "xs"}>
          <Button component={Link} href={"https://anthro.id/pawai"} target={"_blank"} rightSection={<Image data-anthro-prevention src={logoURL} w={24} />}>
            Get Ticket
          </Button>

          <Flex justify={"flex-end"}>
            <Text size={"xs"} fw={600} styles={{ root: { textShadow } }}>
              via anthro.id
            </Text>
          </Flex>
        </Flex>
      </Flex>

      <ToggleHeaderContext.Provider value={headerToggle}>
        <HeaderRoot />
      </ToggleHeaderContext.Provider>
    </Box>
  );
};