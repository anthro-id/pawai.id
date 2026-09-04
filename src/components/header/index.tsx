import { useRef, useContext, useEffect } from "react";

import { Flex, Text, Image, Box, Transition, ActionIcon } from "@mantine/core";
import { useDrag, useScroller, useMergedRef, useViewportSize } from "@mantine/hooks";

import Link from "next/link";

import headerItems, { ToggleHeaderContext } from "./config";
import { IconArrowLeft, IconArrowRight } from "../Icons";

import styles from "@/styles/components/header.module.css";

export default function HeaderRoot() {
  const isEnabled = useContext(ToggleHeaderContext);

  const itemScroller = useScroller({ draggable: false });
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const { width: windowWidth } = useViewportSize();
  const isMobile = windowWidth <= 720;

  const { ref, active } = useDrag(
    (state) => {
      if (!scrollRef.current) {
        return;
      };

      scrollRef.current.scrollLeft -= state.delta[0];
    },
    { axis: 'x', filterTaps: true, threshold: 5 }
  );

  const assignRef = (node: HTMLDivElement | null) => {
    scrollRef.current = node;
    ref(node);
  };

  const itemRef = useMergedRef(assignRef, itemScroller.ref);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.body.style.overflow = isEnabled ? "hidden" : "";
    };
  }, [isEnabled]);

  if (isMobile) {
    return (
      <HeaderMobileRoot />
    );
  };

  return (
    <Box className={styles["header-container"]} data-state={isEnabled}>
      <Flex direction={"column"} className={styles.header} data-state={isEnabled} justify={"flex-end"}>
        <Flex className={styles["header-items"]} data-hide-scrollbar ref={itemRef} styles={{ root: { cursor: `${active ? "grabbing" : "grab"}`, overflow: "auto" } }}>
          {
            headerItems.map((item, i) => (
              <Transition mounted={isEnabled} enterDelay={(100 * i) + (i === 0 ? 25 : 125)} duration={375} transition={"fade-up"} timingFunction={"var(--expoOut)"}>
                {transitionStyles => (
                  <Box className={styles["header-item"]} key={`header-item/"${item.name}"`} style={{ ...transitionStyles, pointerEvents: active ? "none" : undefined }} draggable={false} flex={"0 0 auto"} pos={"relative"} component={Link} href={item.url} target={item.url.startsWith("https://") ? "_blank" : undefined}>
                    <Box pos={"absolute"} p={"lg"} data-anthro-prevention>
                      <Text size={"xl"} fw={500} lh={1} c={"var(--light01)"}>
                        {item.name}
                      </Text>
                    </Box>

                    <Image data-anthro-prevention src={item.imageUrl} loading={"lazy"} />
                  </Box>
                )}
              </Transition>
            ))
          }
        </Flex>

        <Flex justify={"flex-end"} mt={"xl"} gap={"md"} align={"center"}>
          <ActionIcon variant={"transparent"} color={"gray"} onClick={itemScroller.scrollStart}>
            <IconArrowLeft w={20} h={20} />
          </ActionIcon>

          <ActionIcon variant={"transparent"} color={"gray"} onClick={itemScroller.scrollEnd}>
            <IconArrowRight w={20} h={20} />
          </ActionIcon>
        </Flex>
      </Flex>
    </Box>
  );
};

export function HeaderMobileRoot() {
  const isEnabled = useContext(ToggleHeaderContext);

  return (
    <Flex className={styles.header} data-state={isEnabled}>
      <Flex direction={"column"} className={styles["header-items"]}>
        {
          headerItems.map((item, i) => (
            <Transition mounted={isEnabled} enterDelay={(100 * i) + 75} duration={500} transition={"fade-up"} timingFunction={"var(--expoOut)"}>
              {transitionStyles => (
                <Box component={Link} href={item.url} target={item.url.startsWith("https://") ? "_blank" : undefined} style={transitionStyles} key={`header-item/"${item.name}"`} pos={"relative"} className={styles["header-item"]}>
                  <Box bdrs={"0 0 3px 0"} bg={"var(--dark02)"} pos={"absolute"} top={0} left={0} p={"xs"}>
                    <Text c={"var(--light01)"} size={"sm"} fw={500} lh={1}>
                      { item.name }
                    </Text>
                  </Box>

                  <Image
                    className={styles["header-item-image"]}
                    data-anthro-prevention
                    src={item.imageUrl}
                    loading={"lazy"}
                  />
                </Box>
              )}
            </Transition>
          ))
        }
      </Flex>
    </Flex>
  );
};