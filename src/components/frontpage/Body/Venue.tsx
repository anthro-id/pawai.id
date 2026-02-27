import type { JSX } from "react";

import Link from "next/link";

import { Button, Flex, Image, Text } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";

import { Parallax } from "react-scroll-parallax";

import { IconPin, IconGlobe, IconPhone, IconArrowRight } from "@/components/Icons";

import { filterDropShadowValue } from "@/config";

const venueHeroImageUrl: string =
  "https://canine.cdn.anthro.id/handled-by-anthroid-team/25-02-26/0df19c78-c93f-4035-9788-87fc40672d30";

const venuePicturesImageUrl: string =
  "https://canine.cdn.anthro.id/handled-by-anthroid-team/25-02-26/5270ff1a-4385-48ec-b6a2-32c6ac7b2fa5";

const mobileVenuePicturesImageUrl: string =
  "https://canine.cdn.anthro.id/handled-by-anthroid-team/27-02-26/d54ca9b5-6a24-4322-8d4a-1ee4217ef9da";

const hotelDetails: Array<[() => JSX.Element, string, string?]> = [
  [IconPin, "Jl. Pantai Kuta, Kec. Kuta, \nKab. Badung, Bali, 80361", undefined],
  [IconGlobe, "grandistanarama.com", "https://grandistanarama.com"],
  [IconPhone, "(0361) 752208", "tel:+62361752208"],
];

export default function FrontpageBodyVenue() {
  const { width: windowWidth } = useViewportSize();

  const isLaptopish = windowWidth < 1152;
  const isTablet = windowWidth < 992;
  const isMobileish = windowWidth <= 720;
  const isMobile = windowWidth <= 512;

  return (
    <Flex direction={"column"}>
      <Image
        h={isTablet ? 360 : 640} fit={"cover"}
        src={venueHeroImageUrl}
      />

      <Flex direction={isMobileish ? "column" : undefined} justify={"space-around"} py={isMobileish ? "xl" : undefined} px={isMobileish ? undefined : "lg"} bg={"#EBEBF2"} pos={"relative"}>
        <Flex justify={"center"} pos={"relative"} style={{ zIndex: 6 }} h={isLaptopish ? 384 : 512} flex={1}>
          <Parallax translateY={isMobileish ? ["-50%", "17.5%"] : ["25%", "-75%"]}>
            <Image
              src={isMobileish ? mobileVenuePicturesImageUrl : venuePicturesImageUrl}
              w={isMobileish ? undefined : (isLaptopish ? 384 : 512)}
              mr={isMobileish ? undefined : (isTablet ? "md" : undefined)}
            />
          </Parallax>
        </Flex>

        <Flex px={isMobileish ? "md" : undefined} gap={isMobileish ? "xl" : "md"} direction={"column"} justify={"center"} align={isMobileish ? "center" : undefined} flex={isMobileish ? undefined : 1}>
          {/* subtext */}
          <Text ta={isMobileish ? "center" : undefined} size={isMobile ? "md" : (isTablet ? "1.125em" : "1.5em")} fw={600} c={"var(--dark03)"} lh={1.33}>
            The Venue with the essence of <br />
            Balinese culture and tropical paradise <br />
            best fit for Gods Paradise
          </Text>

          {/* hotel/venue details */}
          <Flex direction={"column"} gap={"xs"} miw={isMobileish ? "66%" : undefined}>
            {
              hotelDetails.map(([Icon, displayValue, value]) => (
                <Flex gap={"xs"} align={"center"} key={`venue-details_${displayValue || value}`} c={"var(--dark03)"}>
                  <Icon />

                  {
                    typeof value === "string" ? (
                      <Text flex={1} data-hover fw={500} size={isMobile ? "sm" : (isTablet ? "md" : "xl")} component={Link} href={value} target={"_blank"}>
                        { displayValue }
                      </Text>
                    ) : (
                      <Text flex={1} fw={500} size={isMobile ? "sm" : (isTablet ? "md" : "xl")} lh={1.25}>
                        { displayValue }
                      </Text>
                    )
                  }
                </Flex>
              ))
            }
          </Flex>

          <Button disabled w={"max-content"} styles={{ root: { filter: filterDropShadowValue } }} rightSection={<IconArrowRight w={24} h={24} />}>
            <Text size={"1.0em"}>
              Purchase Room
            </Text>
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};