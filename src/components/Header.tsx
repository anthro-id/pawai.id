import { Button, Box, Flex, Image, Text, Menu } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";

import Link from "next/link";

import { logoURL, textShadow } from "@/config";

const menuList: Array<[string, string, boolean?]> = [
  ["Barong Registration", "https://link.anthro.id/oJSI7A"],
  ["Code of Conduct", "https://anthro.id"],
  ["Hotel Reservation", "https://anthro.id", true],
  ["Dealers Registration", "https://anthro.id", true],
  ["Talent Show Registration", "https://anthro.id", true],
];

export default function Header() {
  const { width: windowWidth } = useViewportSize();

  const isMobile = windowWidth <= 512;

  return (
    <Box pos={"fixed"} top={0} right={0} px={isMobile ? "1rem" : "2.5rem"} py={isMobile ? "md" : "xl"} style={{ zIndex: 10 }}>
      <Flex justify={"flex-end"} gap={"md"}>
        <Menu offset={0} width={"max-content"} position={isMobile ? "bottom" : "bottom-end"} radius={0} transitionProps={{ duration: 175, transition: "scale-y" }}>
          <Menu.Target>
            <Button>
              Menu
            </Button>
          </Menu.Target>

          <Menu.Dropdown bg={"white"} bd={"unset"}>
            {
              menuList.map(([label, value, isDisabled], index) => (
                <Menu.Item opacity={isDisabled ? 0.375 : undefined} disabled={isDisabled} component={isDisabled ? undefined : Link} href={value} target={"_blank"} key={`menu-item_${label}`} px={"0.5rem"} py={"sm"} color={"dark.2"}>
                  <Text size={"lg"} fw={600} lh={1} c={index === 0 ? "red.8" : "var(--dark03)"}>
                    { label }
                  </Text>
                </Menu.Item>
              ))
            }
          </Menu.Dropdown>
        </Menu>

        <Flex direction={"column"} gap={isMobile ? "0.25rem" : "xs"}>
          <Button component={Link} href={"https://anthro.id/pawai"} target={"_blank"} rightSection={<Image data-anthro-prevention src={logoURL} w={24} />}>
            Get Tickets
          </Button>

          <Flex justify={"flex-end"}>
            <Text size={"xs"} fw={600} styles={{ root: { textShadow } }}>
              via anthro.id
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};