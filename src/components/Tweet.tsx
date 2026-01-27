import { Fragment } from "react";
import Script from "next/script";

export default function Tweet() {
  return (
    <Fragment>
      <blockquote className={"twitter-tweet"} data-lang="en" data-dnt="true" data-theme="dark">
        <a href="https://twitter.com/PAWAI_ID/status/1910651794948334036">PAWAI Trailer Tweet</a>
      </blockquote>

      <Script async src={"https://platform.twitter.com/widgets.js"} />
    </Fragment>
  );
};