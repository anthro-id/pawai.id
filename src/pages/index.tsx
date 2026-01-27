import { lazy, Suspense } from "react";

import { Flex, Text, Image as MantineImage } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";

import Link from "next/link";

import Loading from "@/components/Loading";
const TrailerTweet = lazy(() => import("@/components/Tweet"));

const currentYear = new Date().getFullYear();

export default function Home() {
  const { width } = useViewportSize();
  const isTablet = width <= 640;

  return (
    <Flex direction={"column"} gap={"md"} align={"center"} px={"md"} py={"lg"}>
      <MantineImage
        src={"https://canine.cdn.anthro.id/handled-by-anthroid-team/27-01-26/33a3834a-66d6-4f43-8685-87597d79005e"}
        w={isTablet ? 192 : 256}
      />

      <Flex direction={"column"} gap={"md"} c={"var(--light01)"} align={"center"}>
        <Text size={isTablet ? "md" : "xl"} fw={600} lh={1.375} ta={"center"}>
          A long-awaited furry gathering event, <br />
          nestled in the island paradise of Bali, Indonesia.
        </Text>

        <Flex align={"center"} gap={"0.5rem"}>
          <Text size={"sm"} fw={500} lts={0.25} c={"dark.1"}>
            More contents coming soon, here and on
          </Text>

          <Link href={"https://anthro.id"} referrerPolicy={"no-referrer"} target={"_blank"}>
            <MantineImage
              src={"https://canine.cdn.anthro.id/handled-by-anthroid-team/27-01-26/4946f98f-b134-4c30-83a1-4118eeb8b3a4"}
              w={18}
            />
          </Link>
        </Flex>
      </Flex>

      <Suspense fallback={<Loading />}>
        <TrailerTweet />
      </Suspense>

      <Text size={"0.625em"} c={"dark.3"} fw={500} lh={1.5} ta={"center"}>
        &copy; 2024-{currentYear} <Link href={"https://anthro.id"} target={"_blank"}>Anthro Indonesia Consortium</Link> & 2026 PAWAI (Party Along with Anthro Indonesia) <br />
        All rights reserved.
      </Text>
    </Flex>
  );
};