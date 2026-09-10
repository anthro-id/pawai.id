import { Fragment, useEffect, useRef, useState } from "react";

import { Vibrant } from "node-vibrant/browser";

import shuffle from "lodash.shuffle";
import _chunk from "lodash.chunk";

import { Flex, Text, Box, Image, SimpleGrid, Transition, Button, ActionIcon, Tooltip, Select, type ComboboxItem } from "@mantine/core";
import { useWindowEvent, useClickOutside, useCounter, useHotkeys } from "@mantine/hooks";

import dynamic from "next/dynamic";
import Link from "next/link";

const SectionHeader = dynamic(() => import("@/components/SectionHeader"), { ssr: false });
const Header = dynamic(() => import("@/components/Header"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });

import MetaTags from "@/components/MetaTags";
import { IconExternalLink, IconFilter, IconX, IconMaximize, IconArrowLeft, IconArrowRight } from "@/components/Icons";
import submissions, { endpoint, type SubmissionsProps } from "@/components/art-submissions";

import styles from "@/styles/components/art-commissions.module.css";

const frontiers: Record<SubmissionsProps["theme"], string> = {
  balinese: "Indonesia/Balinese",
  tropical: "Tropical/Others"
};

const frontiersSelection = Object
  .entries(frontiers)
  .map(([value, label]) => ({ value, label } satisfies ComboboxItem));

const shuffledSubmissions = shuffle(submissions);
const chunk = (array: SubmissionsProps[]) => _chunk(array, 6);

export default function ArtSubmissionsPage() {
  // submissions list is shuffled every render to avoid a potential bias
  const cachedSubmissions = useRef({
    base: chunk(shuffledSubmissions),
    filtered: {
      balinese: chunk(shuffledSubmissions.filter(({ theme }) => theme === "balinese")),
      tropical: chunk(shuffledSubmissions.filter(({ theme }) => theme === "tropical"))
    }
  });

  const [chunkSet, setChunkSet] = useState<number>(-1);

  const [list, setList] = useState<typeof submissions>([]);
  const [filterType, setFilterType] = useState<SubmissionsProps["theme"] | null>(null);
  const [selectedImageId, setImageId] = useState<string | null>(null);

  const [vibColor, setVibColor] = useState<Record<string, string>>({});

  const loadBatchUrls = async (imageIds: string[]) => {
    await Promise.all(imageIds.map(async id => {
      const color = await Vibrant.from(endpoint + id).getPalette();

      const hex = color.Muted?.hex;
      if (!hex || typeof hex !== "string") {
        return;
      };

      return setVibColor(prev => ({ ...prev, [id]: hex }));
    }));

    return;
  };

  useEffect(() => {
    if (chunkSet === -1) {
      return;
    };

    setChunkSet(-2);
    setList([]);

    setTimeout(() => setChunkSet(0), 25);

    return;
  }, [filterType]);

  useEffect(() => {
    if (chunkSet === -2) {
      return;
    };

    const selectedSubmission =
      filterType !== null ? cachedSubmissions.current.filtered[filterType] : cachedSubmissions.current.base;

    const selectedSubmissionsChunk = selectedSubmission[chunkSet];

    if (!selectedSubmissionsChunk) {
      return setChunkSet(-2);
    };

    loadBatchUrls(selectedSubmissionsChunk.map(item => item.frontImageId));

    setList(prev => prev.concat(selectedSubmissionsChunk));

    if (typeof document !== "undefined") {
      setTimeout(() => {
        const items = document.querySelectorAll("*[data-hide]");

        items.forEach((item, i) => {
          setTimeout(() => item.removeAttribute("data-hide"), (125 * i));
          return;
        });
      }, 250);
    };

    const nextBatch = selectedSubmission[chunkSet + 1];
    if (!nextBatch || nextBatch.length <= 0) {
      return setChunkSet(-2);
    };
  }, [chunkSet]);

  useWindowEvent("post-loading", () => {
    console.log("post-loading launched");
    setChunkSet(0);
  });

  return (
    <Fragment>
      <style global>
        {
          `body { background-color: var(--light04) }`
        }
      </style>

      <MetaTags
        title={"Art Submissions"}
        description={"An exhaustive list of PAWAI 2026 art submissions."}
        url={"https://pawai.id/art-submissions"}
        color={"#ff9f82"}
        imageUrl={"https://canine.cdn.anthro.id/internal/08-09-26/bcad3154-fd50-4970-9dcd-9299d2444405"}
      />

      <Header theme={"dark"} />

      <Transition mounted={selectedImageId !== null} transition={"fade"} duration={150} timingFunction={"ease-in-out"}>
        {transitionStyles => (
          <Flex className={styles["preview-container"]} justify={"center"} align={"center"} style={transitionStyles}>
            <Preview onExit={() => setImageId(null)} id={selectedImageId as string} />
          </Flex>
        )}
      </Transition>

      <Box className={styles["header-title"]} data-hide>
        <SectionHeader>
          ART SUBMISSIONS
        </SectionHeader>
      </Box>

      <Flex gap={"xl"} direction={"column"}>
        <Flex justify={"flex-end"} data-hide className={styles["filter-input-container"]}>
          <Select
            styles={{ root: { fontWeight: 500 }, dropdown: { fontWeight: 500 } }}
            placeholder={"Filter by..."}
            leftSection={<IconFilter />}
            leftSectionProps={{ style: { pointerEvents: "none" } }}
            data={frontiersSelection}
            onChange={value => setFilterType(value as typeof filterType)}
          />
        </Flex>

        <Flex direction={"column"} gap={"5rem"} className={styles["grid-container"]}>
          <SimpleGrid cols={3} spacing={"xl"} className={styles["grid"]}>
            {
              list.map(item => {
                const vibrantColor = vibColor[item.frontImageId];
                const isVibrantPresent = (typeof vibrantColor === "string" && vibrantColor.length > 0);

                return (
                  <Flex draggable={false} onClick={() => setImageId(item.frontImageId)} className={styles["item"]} data-hide key={`submission-item/${item.authorName}/${item.frontImageId}`} justify={"center"}>
                    <Flex w={"100%"} direction={"column"} styles={{ root: { overflow: "hidden" } }} pos={"relative"}>
                      <Flex className={styles["author-section"]} styles={{ root: { transition: "background-color 375ms" } }} direction={"column"} bdrs={"3px 3px 0 0"} bg={vibrantColor || "dark"}>
                        <Flex justify={"space-between"} align={"flex-start"} c={"var(--light01)"}>
                          <Flex align={"flex-end"} gap={"xs"}>
                            <Text className={styles["author-name"]} lh={1} fw={500} data-anthro-prevention>
                              {item.authorName}
                            </Text>

                            {
                              typeof item.authorUrl === "string" && (
                                <Tooltip withArrow label={<Text size={"sm"} lts={0.25} fw={500}>Visit the artist profile</Text>} color={"dark"}>
                                  <ActionIcon className={styles["author-icon"]} component={Link} href={item.authorUrl} target={"_blank"} size={"md"} variant={"transparent"}>
                                    <IconExternalLink />
                                  </ActionIcon>
                                </Tooltip>
                              )
                            }
                          </Flex>

                          {
                            Array.isArray(item.imageIds) && (
                              <Text size={"sm"} fw={600}>
                                +{item.imageIds.length} more
                              </Text>
                            )
                          }
                        </Flex>

                        <Text size={"xs"} fw={400} c={"var(--light01)"} lh={2} opacity={0.825} data-anthro-prevention>
                          {frontiers[item.theme]}
                        </Text>
                      </Flex>

                      <Box pos={"relative"}>
                        <Box
                          component={"span"}
                          bg={isVibrantPresent ? `linear-gradient(to bottom, ${vibrantColor} 0%, transparent 25%)` : undefined}
                          style={{ transition: "opacity 375ms" }}
                          pos={"absolute"}
                          top={0} left={0}
                          w={"100%"} h={"100%"}
                          opacity={isVibrantPresent ? 1 : 0}
                        />

                        <Image
                          className={styles["comms-image"]}
                          bdrs={3} w={"100%"}
                          src={endpoint + item.frontImageId}
                          loading={"lazy"}
                          crossOrigin={"anonymous"}
                          styles={{
                            root: {
                              objectPosition: item.objectPosition || "top"
                            }
                          }}
                        />
                      </Box>

                      <Box p={"xl"} className={styles["arrow"]} pos={"absolute"} right={0} bottom={0}>
                        <IconArrowRight w={24} h={24} />
                      </Box>
                    </Flex>
                  </Flex>
                );
              })
            }
          </SimpleGrid>

          {
            chunkSet !== -2 && (
              <Flex px={"2.5rem"} justify={"center"}>
                <Button px={"xl"} bg={"var(--dark01)"} c={"var(--light01)"} onClick={() => setChunkSet(prev => prev + 1)}>
                  Load More
                </Button>
              </Flex>
            )
          }

          <Flex justify={"center"} mx={"1rem"}>
            <Text size={"sm"} c={"dimmed"} ta={"center"} fw={500}>
              All artwork submitted to this page remains the property of its respective artist(s) and is shared here with PAWAI's permission.

              <br /><br />

              Unauthorized downloading, reproduction, or redistribution of these images is <b><u>strictly prohibited</u></b>.
            </Text>
          </Flex>
        </Flex>
      </Flex>

      <Footer />
    </Fragment>
  );
};

export function Preview(props: { id: string; onExit: () => void; }) {
  const clickOutsideRef = useClickOutside(props.onExit);

  const [index, { increment, decrement, reset }] = useCounter(0, { min: 0 });
  const [state, setState] = useState<"L" | "R">("R");

  const leftRef = useRef<HTMLButtonElement | null>(null);
  const rightRef = useRef<HTMLButtonElement | null>(null);

  useHotkeys([
    ["escape", props.onExit],
    ["arrowleft", () => leftRef.current?.click()],
    ["arrowright", () => rightRef.current?.click()]
  ]);

  useEffect(() => {
    return () => {
      reset();
    };
  }, []);

  const setIndex = (reverse?: boolean) => {
    setState(reverse ? "L" : "R");
    return reverse ? decrement() : increment();
  };

  const submission = submissions.find(item => item.frontImageId === props.id);
  if (!submission) return null;

  const imageIds = (submission.imageIds || []);
  const submissionIds = [props.id, ...imageIds];

  const currentSubmission = submissionIds[Math.min(index, submissionIds.length - 1)];
  const currentSubmissionImageId = typeof currentSubmission === "string" ? currentSubmission : currentSubmission.imageId;

  return (
    <Flex className={styles["preview-insider"]} ref={clickOutsideRef} direction={"column"} gap={"xs"}>
      <SimpleGrid cols={3}>
        <Flex align={"center"}>
          <Text size={"sm"} fw={500} lh={1}>
            {
              (typeof currentSubmission !== "string" && "proposedName" in (currentSubmission || {})) ? currentSubmission.proposedName : submission.authorName
            }
          </Text>
        </Flex>

        {
          submissionIds.length > 1 ? (
            <Flex justify={"center"} align={"center"} gap={"md"}>
              <ActionIcon ref={leftRef} bdrs={"xs"} disabled={index <= 0} onClick={() => setIndex(true)} variant={"transparent"} size={"md"}>
                <IconArrowLeft w={16} h={16} />
              </ActionIcon>

              <Text size={"xs"}>
                {(index + 1)}/{submissionIds.length}
              </Text>

              <ActionIcon ref={rightRef} bdrs={"xs"} disabled={index >= (submissionIds.length - 1)} onClick={() => setIndex()} variant={"transparent"} size={"md"}>
                <IconArrowRight w={16} h={16} />
              </ActionIcon>
            </Flex>
          ) : (
            <Box component={"span"} />
          )
        }

        <Flex align={"center"} justify={"flex-end"} gap={"xs"}>
          <ActionIcon className={styles["redirect-button"]} component={"a"} target={"_blank"} href={endpoint + currentSubmissionImageId} variant={"transparent"} size={"sm"}>
            <IconMaximize />
          </ActionIcon>

          <ActionIcon onClick={props.onExit} variant={"transparent"} size={"md"}>
            <IconX />
          </ActionIcon>
        </Flex>
      </SimpleGrid>

      <Box pos={"relative"} className={styles["preview-image-container"]}>
        {
          submissionIds.map((image, mapIndex) => {
            const imageId = typeof image === "string" ? image : image.imageId;
            const url = endpoint + imageId;

            return (
              <Transition key={`image-preview/${imageId}`} timingFunction={"var(--expoOut)"} duration={750} exitDuration={2.5} mounted={mapIndex === index} transition={state === "L" ? "fade-right" : "fade-left"}>
                {root => {
                  if (typeof image !== "string" && image.type === "video") {
                    return (
                      <Box
                        component={"video"}
                        src={url}
                        style={root}
                        className={styles["preview-image"]}
                        autoPlay controls muted loop
                        disablePictureInPicture disableRemotePlayback
                      />
                    )
                  };

                  return (
                    <Image
                      data-anthro-prevention
                      draggable={false}
                      loading={"lazy"}
                      src={url}
                      style={root}
                      className={styles["preview-image"]}
                    />
                  );
                }}
              </Transition>
            );
          })
        }
      </Box>
    </Flex>
  );
};