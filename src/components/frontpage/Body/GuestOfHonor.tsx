import { useState } from "react";

import { Box, Flex, Image, Title, Text, SimpleGrid, Button, ActionIcon, Transition, type TransitionProps } from "@mantine/core";
import { useViewportSize, useDebouncedValue } from "@mantine/hooks";

import Link from "next/link";

import { Parallax } from "react-scroll-parallax";

import { IconPatreon, IconArrowLeft, IconArrowRight } from "@/components/Icons";
import { lighterTextShadow as textShadow } from "@/config";

const gohPalaceBackgroundUrl: string =
  "https://canine.cdn.anthro.id/handled-by-anthroid-team/26-02-26/2530c389-4110-4311-bcf3-ba92df20e60d";

const guestsOfHonorContentUrls: string[] = [
  "https://canine.cdn.anthro.id/handled-by-anthroid-team/26-02-26/2f5efeeb-cf86-4c21-a81c-da1289a359b0",
  "https://canine.cdn.anthro.id/handled-by-anthroid-team/26-02-26/3429cce3-63a7-4d5b-9bd7-9398715b28d9",
];

const guestsOfHonorBannerUrls: string[] = [
  "https://canine.cdn.anthro.id/handled-by-anthroid-team/26-02-26/1f32bd84-4b76-4042-aaa0-cc76f3d4ba70",
  "https://canine.cdn.anthro.id/handled-by-anthroid-team/26-02-26/2a47c46d-fd16-4dae-ae91-31fa624bc740"
];

const guestsOfHonorBiodataTexts: Array<[string, string, string]> = [
  [
    "Dedicated digital anthro artist from Thailand.",
    "Has led the creation of customized VRChat avatar projects such as \"DRACHETYPE\" and \"PROTOTYPE\". And a part of concept art team of the Netflix anime series, \"My Daemon.\"",
    "https://link.anthro.id/gVaozg"
  ],
  [
    "An Indonesian-born furry musician, artist, and animator has been writing and performing expressive original singles with animated music videos.",
    "Has been known for the songs such as \"You'll Be Gone\", \"Circus Hop\", \"You're Just Like Pop Music\", and more.",
    "https://link.anthro.id/t76Hhw"
  ]
];

const gohSwitchTransitionProps: Omit<TransitionProps, "mounted" | "children"> = {
  keepMounted: false,
  transition: "fade-up", 
  duration: 1000,
  timingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
  exitDuration: 5
};

export default function FrontpageBodyGoH() {
  const { width: windowWidth } = useViewportSize();
  
  const [page, setPage] = useState<number>(0);

  const [debouncedPageValue] = useDebouncedValue(page, 25);
  const [delayDebouncedPageValue] = useDebouncedValue(page, 125);

  const isLaptopish = windowWidth < 1366;
  const isTablet = windowWidth < 992;
  const isMobileish = windowWidth < 600;

  const arrowPreferrableSize = isMobileish ? 32 : 64;

  const changeGoH = (dir: "L" | "R") => 
    setPage(previousValue => {
      if (dir === "L") {
        return previousValue <= 0 ? 1 : 0;
      } else {
        return previousValue >= 1 ? 0 : 1;
      }
    });

  return (
    <Flex direction={"column"}>
      <Box pos={"relative"} mih={isMobileish ? 800 : (isTablet ? 1024 : (isLaptopish ? 800 : 960))} style={{ overflow: "hidden" }}>
        {/* palace background image */}
        <Parallax speed={-12.5}>
          <Image fit={"cover"} top={-125} pos={"absolute"} src={gohPalaceBackgroundUrl} h={1440} />
        </Parallax>

        {/* heading */}
        <Flex gap={"0.425rem"} direction={"column"} align={"center"} pos={"absolute"} top={0} w={"100%"} c={"var(--light01)"} py={"3.75rem"}>
          <Title styles={{ root: { textShadow } }} size={isMobileish ? "2em" : "2.75em"} lh={1} order={2} tt={"uppercase"}>
            Say hello to our
          </Title>

          <Title styles={{ root: { textShadow } }} size={isMobileish ? "5em" : "7.5em"} lh={0.825} order={1} ta={"center"}>
            GUEST of <br /> HONOR
          </Title>
        </Flex>

        {/* guest of honor character */}
        {
          isTablet !== true ? (
            <SimpleGrid cols={2} pos={"absolute"} bottom={isLaptopish ? -100 : -50} w={"100%"}>
              {
                guestsOfHonorContentUrls.map(characterUrl => (
                  <Parallax speed={isLaptopish ? 3.75 : 2.5} key={`guest-of-honour_${characterUrl}`}>
                    <Image pos={"relative"} style={{ zIndex: -1 }} src={characterUrl} mah={isLaptopish ? 600 : 768} fit={"contain"} />
                  </Parallax>
                ))
              }
            </SimpleGrid>
          ) : (
            <Box>
              {/* arrow */}
              <SimpleGrid px={isMobileish ? "md" : "xl"} cols={2} pos={"absolute"} bottom={0} h={"75%"} w={"100%"} styles={{ root: { zIndex: 6 } }}>
                <Flex align={"center"} onClick={() => changeGoH("L")}>
                  <ActionIcon variant={"subtle"} radius={"xl"} color={"var(--dark02)"} size={"xl"}>
                    <IconArrowLeft w={arrowPreferrableSize} h={arrowPreferrableSize} />
                  </ActionIcon>
                </Flex>

                <Flex align={"center"} justify={"flex-end"} onClick={() => changeGoH("R")}>
                  <ActionIcon variant={"subtle"} radius={"xl"} color={"var(--dark02)"} size={"xl"}>
                    <IconArrowRight w={arrowPreferrableSize} h={arrowPreferrableSize} />
                  </ActionIcon>
                </Flex>
              </SimpleGrid>

              <Transition {...gohSwitchTransitionProps} mounted={debouncedPageValue === page}>
                {(style) => (
                  <Box style={style} pos={"absolute"} bottom={-50} w={"100%"}>
                    <Parallax speed={-5}>
                      <Image
                        pos={"relative"}
                        style={{ zIndex: -1 }}
                        src={guestsOfHonorContentUrls[page]}
                        mah={isMobileish ? 600 : 720} miw={480}
                        fit={"contain"}
                      />
                    </Parallax>
                  </Box>
                )}
              </Transition>
            </Box>
          )
        }
      </Box>

      {/* guest of honor roles */}
      <Box pos={"relative"} bg={"dark"} style={{ zIndex: 6 }}>
        <SimpleGrid cols={isTablet ? 1 : 2} pos={"absolute"} top={"-7.25rem"} w={"100%"}>
          {
            (isTablet !== true) ? guestsOfHonorBannerUrls.map(cardUrl => (
              <Parallax speed={-7.5} key={`guest-of-honour-roles_${cardUrl}`}>
                <Flex justify={"center"} align={"center"}>
                  <Image src={cardUrl} maw={384} mah={160} fit={"contain"} />
                </Flex>
              </Parallax>
            )) : (
              <Transition {...gohSwitchTransitionProps} mounted={delayDebouncedPageValue === page}>
                {root => (
                  <Parallax speed={isMobileish ? -3.75 : -7.5}>
                    <Flex justify={"center"} align={"center"} styles={{ root }}>
                      <Image src={guestsOfHonorBannerUrls[page]} maw={384} mah={160} fit={"contain"} />
                    </Flex>
                  </Parallax>
                )}
              </Transition>
            )
          }
        </SimpleGrid>

        {/* guests of honor (biodata) */}
        <SimpleGrid cols={isTablet ? 1 : 2} mih={isTablet ? 448 : 512} py={isTablet ? "3.75rem" : "5rem"}>
          {
            (isTablet ? [guestsOfHonorBiodataTexts[page]] : guestsOfHonorBiodataTexts).map(([heading, subtext, gohUrl], index) => (
              <Flex px={isMobileish ? "md" : undefined} key={`guest-of-honour-text_${gohUrl}`} gap={"xl"} pos={"relative"} align={"center"} direction={"column"}>
                {/* text */}
                <Flex h={"100%"} gap={"xl"} direction={"column"} maw={384} c={"var(--light01)"} justify={"flex-end"}>
                  <Text size={"md"} fw={600} ta={"center"}>
                    {heading}
                  </Text>

                  <Text size={"md"} fw={600} ta={"center"}>
                    {subtext}
                  </Text>
                </Flex>

                {/* button */}
                {
                  (isTablet ? page === 0 : index === 0) && (
                    <Button component={Link} target={"_blank"} href={gohUrl} mih={64} miw={256} px={"lg"} size={"xl"} radius={"xl"} variant={"filled"} color={"#000"} leftSection={<IconPatreon w={36} h={36} />} tt={"unset"}>
                      <Text size={"1.25em"} fw={600} ff={"text"}>
                        Agitype01
                      </Text>
                    </Button>
                  )
                }

                {
                  (isTablet ? page === 1 : index === 1) && (
                    <Button component={Link} target={"_blank"} href={gohUrl} mih={64} miw={256} radius={"xl"} size={"xl"} variant={"filled"} color={"black"}>
                      <Image
                        maw={256}
                        src={"https://canine.cdn.anthro.id/handled-by-anthroid-team/26-02-26/db68c5ed-3e95-435a-88c4-7b616ca8cc4d"}
                      />
                    </Button>
                  )
                }
              </Flex>
            ))
          }
        </SimpleGrid>
      </Box>
    </Flex>
  );
};