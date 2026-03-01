import { lazy, Fragment } from "react";

import { Parallax } from "react-scroll-parallax";

import { Flex, Title, Box } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";

import { filterDropShadowValue } from "@/config";

import Venue from "./Venue";
const GuestOfHonor = lazy(() => import("./GuestOfHonor"));
const Footer = lazy(() => import("../../Footer"));
const Maps = lazy(() => import("../Body/Maps"));

const eventDates: string[] = [
  "3 - 4 October 2026",
  "Grand Istana Rama Hotel Kuta",
  "Bali, Indonesia"
];

export default function FrontpageBody() {
  const { width: windowWidth } = useViewportSize();

  const isTablet = windowWidth < 992;

  return (
    <Fragment>
      {/* event date */}
      {
        isTablet !== true && (
          <Parallax speed={5}>
            <Flex styles={{ root: { zIndex: 5 } }} direction={"column"} align={"center"} pos={"absolute"} m={"0 auto"} w={"100%"} top={-33}>
              {
                eventDates.map((text, index) => (
                  <Box px={"sm"} py={"0.325rem"} key={`event-dates_"${text}"`} style={{ filter: filterDropShadowValue }} bg={index !== 1 ? "dark.6" : "var(--light01)"}>
                    <Title lh={1} size={"2.5em"} order={1} tt={"uppercase"} c={index === 1 ? "dark.6" : "var(--light01)"}>
                      {text}
                    </Title>
                  </Box>
                ))
              }
            </Flex>
          </Parallax>
        )
      }

      <Flex direction={"column"} bg={"dark.3"}>
        {/* venue details */}
        <Venue />

        {/* google maps */}
        <Maps />

        {/* guest of honor section */}
        <GuestOfHonor />

        {/* footer */}
        <Footer />
      </Flex>
    </Fragment>
  );
};