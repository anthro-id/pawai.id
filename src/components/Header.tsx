import { useContext, useRef, type MouseEvent } from "react";

import dayjs from "dayjs";

import { Button, Box, Flex, Image, Text, Menu } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";

import Link from "next/link";

import { logoURL, textShadow, HotelReservationContext } from "@/config";

export default function Header() {
  const currentTime = useRef(dayjs());

  const { width: windowWidth } = useViewportSize();
  const isMobile = windowWidth <= 512;

  const hotelReservationUrl = useContext(HotelReservationContext);

  const menuList: Array<[string, string, boolean?]> = [
    ["Barong Registration", "https://anthro.id", true],
    ["Code of Conduct", "https://link.anthro.id/3QtdDQ"],
    ["Hotel Reservation", "https://anthro.id", true],
    ["Dealers Registration", "https://link.anthro.id/fD_SsA", currentTime.current.isAfter(dayjs("July 31 2026"))],
    ["Art Submissions", "https://link.anthro.id/QztdKw", currentTime.current.isAfter(dayjs("August 10 2026"))],
    ["Talent Show Registration", "https://link.anthro.id/zFzItw", currentTime.current.isAfter(dayjs("July 31 2026"))],
  ];

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
                const isHotelReservation = index === 2;

                const redirectUrl = (isHotelReservation ? hotelReservationUrl : value) || "#";
                const isDisabled = disabledValue === true || redirectUrl === "#";

                return (
                  <Menu.Item opacity={isDisabled ? 0.375 : undefined} onClick={event => isDisabled ? handlePrevent(event) : undefined} disabled={isDisabled} component={isDisabled ? undefined : Link} href={redirectUrl} target={"_blank"} key={`menu-item_${label}`} px={"0.5rem"} py={"sm"} color={"dark.2"}>
                    <Text size={"lg"} fw={600} lh={1} c={index === 0 ? "red.8" : "var(--dark03)"}>
                      { label }
                    </Text>
                  </Menu.Item>
                );
              })
            }
          </Menu.Dropdown>
        </Menu>

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
    </Box>
  );
};