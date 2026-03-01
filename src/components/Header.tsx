import { useContext, type MouseEvent } from "react";

import { Button, Box, Flex, Image, Text, Menu } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";

import Link from "next/link";

import { logoURL, textShadow, BarongContext } from "@/config";

const menuList: Array<[string, string, boolean?]> = [
  ["Barong Registration", "https://anthro.id"],
  ["Code of Conduct", "https://anthro.id", true],
  ["Hotel Reservation", "https://anthro.id", true],
  ["Dealers Registration", "https://anthro.id", true],
  ["Talent Show Registration", "https://anthro.id", true],
];

const generalTicketSellingMinEpoch: number = 1772366400;

export default function Header() {
  const { width: windowWidth } = useViewportSize();
  const barongUrl = useContext(BarongContext);

  const isMobile = windowWidth <= 512;
  const isInSales = Math.floor(Date.now() / 1000) >= generalTicketSellingMinEpoch;

  const handlePrevent = (event: MouseEvent) =>
    event?.preventDefault();

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
              menuList.map(([label, value, disabledValue], index) => {
                const isBarong = index === 0;
                const isDisabled = isBarong ? (typeof barongUrl !== "string") : (disabledValue === true);

                return (
                  <Menu.Item opacity={isDisabled ? 0.375 : undefined} onClick={event => isDisabled ? handlePrevent(event) : undefined} disabled={isDisabled} component={isDisabled ? undefined : Link} href={isBarong ? (barongUrl || "#") : value} target={"_blank"} key={`menu-item_${label}`} px={"0.5rem"} py={"sm"} color={"dark.2"}>
                    <Text size={"lg"} fw={600} lh={1} c={isBarong ? "red.8" : "var(--dark03)"}>
                      { label }
                    </Text>
                  </Menu.Item>
                );
              })
            }
          </Menu.Dropdown>
        </Menu>

        <Flex direction={"column"} gap={isMobile ? "0.25rem" : "xs"}>
          <Button onClick={event => !isInSales ? handlePrevent(event) : undefined} disabled={!isInSales} component={Link} href={"https://anthro.id/pawai"} target={"_blank"} rightSection={<Image data-anthro-prevention src={logoURL} w={24} />}>
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