import { Fragment, lazy } from "react";

import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
dayjs.extend(isBetween);

import MetaTags from "@/components/MetaTags";

const Components = {
  Header: lazy(() => import("../components/Header")),
  Hero: lazy(() => import("../components/frontpage/Hero")),
  Body: lazy(() => import("../components/frontpage/Body"))
};

export default function Frontpage() {
  return (
    <Fragment>
      <MetaTags
        title={"PAWAI 2026: Gods Paradise"}
        description={"A long-awaited furry gathering event, nestled in the island paradise of Bali, Indonesia."}
        url={"https://pawai.id"}
        imageUrl={"https://canine.cdn.anthro.id/handled-by-anthroid-team/27-01-26/ff2847e9-1470-4a8a-a228-fd9877440b0f"}
        color={"#FC5D01"}
      />

      <Components.Header withImprint />

      <Components.Hero />

      <Components.Body />
    </Fragment>
  );
};