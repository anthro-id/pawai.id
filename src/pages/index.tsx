import { Fragment, lazy, type FC } from "react";

import type { InferGetServerSidePropsType, GetServerSidePropsResult } from "next";

import { BarongContext } from "@/config";

const Components = {
  Header: lazy(() => import("../components/Header")),
  Hero: lazy(() => import("../components/frontpage/Hero")),
  Body: lazy(() => import("../components/frontpage/Body"))
};

const [barongTicketSalesMinUnix, barongTicketSalesMaxUnix]: [number, number] = [
  1772200800, 1772298000
];

const Frontpage: FC<InferGetServerSidePropsType<typeof getServerSideProps>> = (props) => {
  return (
    <Fragment>
      <BarongContext value={props.barongRedirectUrl}>
        <Components.Header />
      </BarongContext>

      <Components.Hero />

      <Components.Body />
    </Fragment>
  );
};

export function getServerSideProps(): GetServerSidePropsResult<{ barongRedirectUrl: string | null }> {
  const currentUnix = Math.floor(Date.now() / 1000);

  const isInSales = (
    (currentUnix >= barongTicketSalesMinUnix) && (currentUnix <= barongTicketSalesMaxUnix)
  );

  return {
    props: {
      barongRedirectUrl: isInSales ? (process.env.BARONG_REG_URL as string) : null
    }
  };
};

export default Frontpage;