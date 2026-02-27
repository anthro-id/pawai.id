import Link from "next/link";

import { Flex, Text, Box, SimpleGrid, Image, type TextProps } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";

const placeholderUrl: string =
  "https://canine.cdn.anthro.id/handled-by-anthroid-team/25-02-26/a4bec86c-52ef-41a5-bec8-dbae9dbae043";

const middleSectionTextUrl: string =
  "https://canine.cdn.anthro.id/handled-by-anthroid-team/25-02-26/4583bc05-1e3a-46e3-a079-22f43e39ff5a";

const pawaiAlternativeBannerLogoUrl: string =
  "https://canine.cdn.anthro.id/handled-by-anthroid-team/25-02-26/b66270ce-e65f-44b0-84d4-2c3947a38e77";

const socialMediaUrls = Object.entries({
  "Facebook": "https://facebook.com/pawai.id",
  "Twitter/X": "https://x.com/pawai_id",
  "Bluesky": "https://bsky.app/profile/pawai.bsky.social",
  "Telegram": "https://t.me/pawai_info"
});

const firstTextSectionProps: TextProps = {
  size: "md",
  fw: 600,
  lh: 1.25,
  c: "var(--light02)"
};

const currentYear = new Date().getFullYear();

export default function Footer() {
  const { width: windowWidth } = useViewportSize();
  const isTabletish = windowWidth <= 992;

  return (
    <Flex direction={"column"} pos={"relative"} styles={{ root: { zIndex: 4 } }}>
      <Box
        h={128}
        style={{
          backgroundImage: `url(${placeholderUrl})`,
          backgroundRepeat: "repeat"
        }}
      />

      <Box px={"xl"} py={"7.5rem"} bg={"#e7e7e7"}>
        <SimpleGrid cols={isTabletish ? 1 : 3} maw={1280} m={"0 auto"}>
          {/* left section */}
          <Flex align={isTabletish ? "center" : undefined} ta={isTabletish ? "center" : undefined} direction={"column"} gap={"sm"}>
            <Image
              src={pawaiAlternativeBannerLogoUrl}
              maw={128}
            />

            <Flex direction={"column"} gap={"xs"}>
              <Text {...firstTextSectionProps}>
                PAWAI 2026: Gods Paradise <br />
                3rd & 4th October 2026
              </Text>

              <Text size={"md"} lh={1.25} c={"var(--light03)"}>
                Hotel Grand Istana Rama <br />
                Kuta, Bali, Indonesia
              </Text>
            </Flex>
          </Flex>

          {/* middle section */}
          <Flex mt={isTabletish ? "xl" : undefined} justify={"center"} align={"center"} direction={"column"} c={"dark"}>
            <Image
              maw={224}
              src={middleSectionTextUrl}
            />
          </Flex>

          {/* right section */}
          <Flex mt={isTabletish ? "xl" : undefined} align={isTabletish ? "center" : "flex-end"} ta={isTabletish ? "center" : undefined} justify={"center"} direction={"column"} gap={"xl"}>
            {/* social media */}
            <Flex direction={"column"}>
              {
                socialMediaUrls.map(([name, url]) => (
                  <Text data-hover tt={"uppercase"} ta={isTabletish ? undefined : "right"} component={Link} href={url} target={"_blank"} {...firstTextSectionProps} lh={2} size={"sm"} key={`social-media-footer_${name}`}>
                    { name }
                  </Text>
                ))
              }
            </Flex>

            <Text size={"xs"} c={"var(--light03)"} fw={600} maw={isTabletish ? undefined : "67%"} ta={isTabletish ? undefined : "right"}>
              &copy; { currentYear } PAWAI Indonesia <br />
              <br />
              &copy; 2024 - { currentYear } PT Anthro Indonesia Consortium
            </Text>
          </Flex>
        </SimpleGrid>
      </Box>
    </Flex>
  )
};