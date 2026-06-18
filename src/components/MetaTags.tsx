import { Fragment } from "react";

export default function MetaTags(props: Props) {
  return (
    <Fragment>
      <meta content={props.title} property="og:title" />
      <meta content={props.description} property="og:description" />
      <meta content={props.color || "#FFF"} name="theme-color" />
      
      {
        typeof props.url === "string" && (
          <meta content={props.url} property="og:url" />
        )
      }

      {
        typeof props.imageUrl === "string" && (
          <Fragment>
            <meta content={props.imageUrl} property="og:image" />
            <meta name="twitter:card" content="summary_large_image" />
          </Fragment>
        )
      }
    </Fragment>
  );
};

export interface Props {
  title: string;
  description: string;
  url?: string;
  imageUrl?: string;
  color?: string;
};