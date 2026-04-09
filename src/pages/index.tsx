import { Fragment, lazy, type FC } from "react";

import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
dayjs.extend(isBetween);

import type { InferGetServerSidePropsType, GetServerSidePropsResult } from "next";

import { HotelReservationContext } from "@/config";

const Components = {
  Header: lazy(() => import("../components/Header")),
  // BarongPopup: lazy(() => import("../components/frontpage/BarongPopup")),
  Hero: lazy(() => import("../components/frontpage/Hero")),
  Body: lazy(() => import("../components/frontpage/Body"))
};

const Frontpage: FC<InferGetServerSidePropsType<typeof getServerSideProps>> = (props) => {
  return (
    <Fragment>
      <HotelReservationContext value={props.hotelReservationUrl}>
        <Components.Header />
      </HotelReservationContext>

      <Components.Hero />

      <Components.Body />
    </Fragment>
  );
};

export function getServerSideProps(): GetServerSidePropsResult<{ hotelReservationUrl: string | null }> {
  // "Date 2026 [] Date 2026 [] https://..."
  const [minDateString, maxDateString, redirectUrl] =
    (process.env.HOTEL_RESERVE_CONTENT as string).split(" [] ") as [string, string, string];

  const isReservationOpen = dayjs().isBetween(dayjs(minDateString), dayjs(maxDateString));

  return {
    props: {
      hotelReservationUrl: isReservationOpen ? redirectUrl : null
    }
  };
};

export default Frontpage;