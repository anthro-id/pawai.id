import { Fragment } from "react/jsx-runtime";

import { Image, Flex, Title, Text, Box, type FlexProps } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";

import { Parallax } from "react-scroll-parallax";

import { textShadow, pawaiCompressedLogo } from "@/config";

const imageUrls = {
  background: "https://canine.cdn.anthro.id/handled-by-anthroid-team/27-02-26/091c0158-5309-469d-97e8-1dc5f870fb20",
  mobileBackground: "https://canine.cdn.anthro.id/handled-by-anthroid-team/27-02-26/77922ab6-4be1-4915-bae2-66008505ea9b",
  mergedCharacters: "https://canine.cdn.anthro.id/handled-by-anthroid-team/27-02-26/fabad73a-725a-47a2-a5b1-800c0c319a3b",
  bengisCharacter: "https://canine.cdn.anthro.id/handled-by-anthroid-team/27-02-26/46159048-aabf-4cc0-9448-c23819c9aefb",
  welcomeScript: "https://canine.cdn.anthro.id/handled-by-anthroid-team/25-02-26/5f218576-2ebd-4921-a265-355501d888a0",
  pawaiFullCompressedLogo: "https://canine.cdn.anthro.id/handled-by-anthroid-team/25-02-26/2c34588d-e656-4c2a-8356-27bf476c1b9f"
};

export default function FrontpageHero() {
  const { width: windowWidth } = useViewportSize();

  const windowRate = {
    nonFHD: windowWidth < 1920,
    nonHD: windowWidth < 1280,
    nonQHD: windowWidth < 992,
    nonSVGA: windowWidth < 800,
  };

  const greetingMessageProps: FlexProps = {
    gap: windowRate.nonFHD ? "2.5rem" : "3.75rem",
    align: windowRate.nonFHD ? "flex-start" : "center",
    px: windowRate.nonFHD ? "2.5rem" : "3.75rem",
    py: "2.5rem",
    pos: "absolute",
    top: 0, left: 0
  };

  const greetingMessageMobileProps: FlexProps = {
    direction: "column",
    justify: "center",
    align: "center"
  };

  return (
    <Box pos={"relative"} mih={"100dvh"} style={{ overflow: "hidden" }}>
      {/* background */}
      <Box style={{ zIndex: -1 }} pos={"absolute"} top={0} left={0} data-anthro-prevention>
        <Box
          component={"span"}
          style={{ zIndex: 1, background: "linear-gradient(to bottom, rgba(27, 27, 27, 0.375) 0%, transparent 100%)" }}
          pos={"absolute"}
          top={0} left={0}
          h={"100%"} w={"100%"}
        />

        <Parallax speed={windowRate.nonQHD ? -12.5 : -50}>
          <Image fit={"cover"} src={imageUrls.background} mih={"100dvh"} h={"100%"} />
        </Parallax>
      </Box>

      {/* greeting message */}
      <Flex style={{ zIndex: 2 }} {...(windowRate.nonQHD !== true ? greetingMessageProps : greetingMessageMobileProps)}>
        {
          windowRate.nonQHD !== true && (
            <Image src={pawaiCompressedLogo} w={96} />
          )
        }

        <Flex pt={windowRate.nonQHD ? "7.5rem" : undefined} align={windowRate.nonQHD ? "center" : undefined} ta={windowRate.nonQHD ? "center" : undefined} direction={"column"} gap={"md"} data-anthro-prevention>
          <Image src={imageUrls.welcomeScript} maw={192} />

          <Title c={"#FFF"} size={48} order={1} lh={1} styles={{ root: { textShadow } }}>
            Om Swasiastu <br />
            A hum from Nature
          </Title>

          <Text c={"#FFF"} lh={1.35} fw={600} size={"xl"} styles={{ root: { textShadow } }}>
            A long-awaited furry event, <br />
            nestled in the island paradise <br />
            of Bali, Indonesia.
          </Text>
        </Flex>

        {
          windowRate.nonQHD === true && (
            <Flex direction={"column"} align={"center"} h={"100%"} w={"100%"}>
              <Image
                src={imageUrls.mobileBackground}
                fit={"contain"}
                h={"100%"} w={"100%"}
              />
            </Flex>
          )
        }
      </Flex>

      {
        (windowRate.nonQHD !== true) && (
          <Fragment>
            {/* merged characters */}
            <Flex align={windowRate.nonFHD ? "flex-end" : "center"} direction={"column"} justify={"flex-end"} pos={"absolute"} w={"100%"} bottom={0} left={windowRate.nonSVGA ? -25 : -50}>
              {/* "Bengis" character */}
              <Flex justify={"center"} w={"100%"}>
                <Flex justify={"center"} pos={"absolute"} bottom={-82.5} styles={{ root: { transform: "scale(1.075)" } }}>
                  <Parallax speed={-50}>
                    <Image
                      src={imageUrls.bengisCharacter}
                      fit={"contain"}
                      maw={1152}
                      styles={{ root: { transform: "translateX(40px)" } }}
                    />
                  </Parallax>
                </Flex>

                {/* Friends character */}
                <Parallax translateY={["-25%", "50%"]}>
                  <Image
                    src={imageUrls.mergedCharacters}
                    pos={"relative"}
                    w={"100%"}
                    styles={{ root: { zIndex: 2 } }}
                  />
                </Parallax>
              </Flex>
            </Flex>

            {/* pawai (full) logo */}
            <Flex justify={"center"} pos={"absolute"} bottom={windowRate.nonHD ? -12.5 : 25} w={"100%"}>
              <Parallax speed={-5}>
                <Image
                  src={imageUrls.pawaiFullCompressedLogo}
                  maw={windowRate.nonHD ? 360 : 500}
                  styles={{ root: { filter: "drop-shadow(10px 10px 15px #000)" } }}
                />
              </Parallax>
            </Flex>
          </Fragment>
        )
      }
    </Box>
  );
};