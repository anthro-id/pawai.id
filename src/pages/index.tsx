import { Fragment, lazy } from "react";

import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
dayjs.extend(isBetween);

const Components = {
  Header: lazy(() => import("../components/Header")),
  Hero: lazy(() => import("../components/frontpage/Hero")),
  Body: lazy(() => import("../components/frontpage/Body"))
};

export default function Frontpage(){
  return (
    <Fragment>
      <Components.Header />

      <Components.Hero />

      <Components.Body />
    </Fragment>
  );
};