import { useContext, useState, useEffect } from "react";

import Link from "next/link";

import { Box, Flex, Image, Transition, CloseButton } from "@mantine/core";

import { BarongContext } from "@/config";

const popupImage: string =
  "https://canine.cdn.anthro.id/handled-by-anthroid-team/27-02-26/de6d8ceb-ba52-4aa9-9265-f2311f2f8f38";

const cacheKey: string =
  "pawai/barong-hidden-popup";

export default function FrontpageBarongPopup() {
  const [isDisplayed, setState] = useState<boolean>(false);
  const barongUrl = useContext(BarongContext);

  const handleExit = () => {
    document.documentElement.style.overflow = "";
    delete document.body.dataset.lenisPrevent;

    if (typeof sessionStorage !== "undefined") {
      sessionStorage.setItem(cacheKey, "1");
    };

    return setState(false);
  };

  useEffect(() => {
    if (
      !document || typeof document === "undefined" ||
      !sessionStorage || typeof sessionStorage === "undefined" ||
      !barongUrl
    ) {
      return;
    };

    const value = sessionStorage.getItem(cacheKey);
    if (value === "1") return;

    document.documentElement.style.overflow = "hidden";
    document.body.dataset.lenisPrevent = "true";
    setState(true);
  }, []);

  if (!barongUrl) return null;

  return (
    <Transition mounted={isDisplayed === true} transition={"fade"} duration={250}>
      {(styles) => (
        <Flex justify={"center"} align={"center"} p={"md"} styles={{ root: { ...styles, backgroundColor: "#000000e3", zIndex: 15 } }} pos={"fixed"} direction={"column"} w={"100%"} h={"100%"}>
          <Box pos={"relative"}>
            <CloseButton
              bg={"dark.6"}
              c={"dark.1"}
              radius={"xl"}
              size={"xl"}
              pos={"absolute"}
              top={-12.5} right={-12.5}
              onClick={handleExit}
            />

            <Link href={barongUrl || "#"} target={"_blank"} onClick={handleExit}>
              <Image
                src={popupImage}
                maw={992}
                fit={"contain"}
              />
            </Link>
          </Box>
        </Flex>
      )}
    </Transition>
  );
};