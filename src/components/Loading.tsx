import { useState, useEffect, type CSSProperties } from "react";

import { Box, Image, Flex } from "@mantine/core";
import { useDebouncedValue } from "@mantine/hooks";

const whiteLogoURL: string =
  "https://canine.cdn.anthro.id/internal/17-06-26/93594715-a09b-45c3-8acd-18820f470683";

const transitionDuration: number = 750;

export default function LoadingScreen() {
  const [state, setState] = useState<boolean>(true);
  const [debouncedState] = useDebouncedValue(state, transitionDuration + 50);

  const style: CSSProperties = {
    width: "100%",
    height: "100%",
    zIndex: 926,
    transition: `clip-path ${transitionDuration}ms var(--expoInOut)`,
    clipPath: `inset(${state ? 0 : 100}% 0 0 0)`,
    display: (state === true ? state : debouncedState) ? "block" : "none"
  };

  useEffect(() => {
    const onLoad = () => {
      setTimeout(() => {
        setState(false);
        document.body.style.overflow = "";
      }, transitionDuration + 75);

      return;
    };

    if (typeof window !== "undefined") {
      setTimeout(() => window.dispatchEvent(new CustomEvent("post-loading")), 1000);
    };

    if (typeof document !== "undefined" && document.readyState === "complete") {
      return onLoad();
    };

    if (typeof window !== "undefined") {
      window.addEventListener("load", onLoad);
    };
  }, []);

  return (
    <Box bg={"var(--dark01)"} pos={"fixed"} top={0} left={0} style={style}>
      <Flex styles={{ root: { userSelect: "none", pointerEvents: "none" } }} justify={"center"} align={"center"} h={"inherit"}>
        <Image maw={96} src={whiteLogoURL} loading={"eager"} />
      </Flex>
    </Box>
  );
};