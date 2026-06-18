import { useEffect, useState, Fragment, createContext, useContext } from "react";
import ms from "ms";

import { Flex, Title } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";

import MetaTags from "@/components/MetaTags";

import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
[duration, utc, timezone].forEach(dayjs.extend);

const properties = {
  duration: 750,
  offset: 125,
  eventTime: dayjs("3 October 2026 09:00 AM").tz("Asia/Makassar", true),
  oneDay: ms("1d")
};

// Oil Black
const bgColor: string = "#0C0C0C";

const styles = `
  body {
    overflow: hidden;
    background-color: ${bgColor};
  }

  @keyframes slideIn {
    from {
      transform: translateY(-${properties.offset}px);
      opacity: 0;
    }

    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes slideOut {
    from {
      transform: translateY(0);
      opacity: 1;
    }
    
    to {
      transform: translateY(${properties.offset}px);
      opacity: 0;
    }
  }

  .slide-in  {
    animation: slideIn ${properties.duration}ms var(--expoOut) forwards;
  }

  .slide-out {
    animation: slideOut ${properties.duration - 250}ms var(--expoOut) forwards;
  }
`;

const ViewportWidthContext = createContext<number>(0);

function FlipDigit({ digit }: { digit: string }) {
  const [curr, setCurr] = useState(digit);
  const [prev, setPrev] = useState<string | null>(null);
  const [flip, setFlip] = useState(false);

  const width = useContext(ViewportWidthContext);
  const isTablet = width <= 800;

  useEffect(() => {
    if (digit === curr) {
      return;
    };

    setPrev(curr);
    setCurr(digit);
    setFlip(true);

    const t = setTimeout(() => {
      setPrev(null);
      setFlip(false);
    }, properties.duration);

    return () => {
      clearTimeout(t);
    };
  }, [digit]);

  return (
    <Fragment>
      <style jsx global>
        {styles}
      </style>
      
      <Flex styles={{ root: { overflow: "hidden" } }} pos={"relative"} miw={isTablet ? "2.125em" : "4.25em"}>
        {
          (prev !== null) && (
            <Title pos={"absolute"} order={1} size={isTablet ? "5rem" : "10rem"} top={0} left={0} w={"100%"} className={"slide-out"}>
              {prev}
            </Title>
          )
        }

        <Title order={1} size={isTablet ? "5rem" : "10rem"} className={flip ? "slide-in" : undefined}>
          {curr}
        </Title>
      </Flex>
    </Fragment>
  );
};

function DigitGroup({ value, digits }: { value: number; digits: number }) {
  return value.toString().padStart(digits, "0").split("").map((d, i) => (
    <FlipDigit key={i} digit={d} />
  ));
};

function Separator() {
  const width = useContext(ViewportWidthContext);
  const isTablet = width <= 800;

  return (
    <Title c={"dark.3"} lh={1} mx={isTablet ? "0.25rem" : "xs"} order={1} size={isTablet ? "2.5rem" : "6rem"} style={{ alignSelf: "center" }}>
      {":"}
    </Title>
  );
};

export default function SlidingCountdown() {
  const [numbers, setNumbers] = useState<[number, number, number, number] | null>(null);

  const { width } = useViewportSize();

  useEffect(() => {
    const countdown = setInterval(() => {
      if (numbers !== null && numbers.every(num => (num <= 0))) {
        return clearInterval(countdown);
      };

      const diff = properties.eventTime.diff(dayjs.utc());
      
      // I can't believe we have to go through this again.
      const totalSecs  = Math.floor(diff / 1000);
      const totalMins  = Math.floor(totalSecs / 60);
      const totalHours = Math.floor(totalMins / 60);

      return setNumbers([
        Math.floor(totalHours / 24),
        totalHours % 24,
        totalMins % 60,
        totalSecs % 60
      ]);
    }, 1000);

    return () => {
      clearInterval(countdown);
    };
  }, []);

  return (
    <Fragment>
      <MetaTags
        title={"PAWAI 2026: Countdown"}
        description={"View a real-time countdown of PAWAI 2026: Gods Paradise here. Proposed motions by Itchii Huski."}
        color={bgColor}
        imageUrl={"https://canine.cdn.anthro.id/internal/18-06-26/a288e386-b737-4d69-a95d-e61927b0b230"}
        url={"https://pawai.id/countdown"}
      />

      <ViewportWidthContext.Provider value={width}>
        <Flex px={"md"} justify="center" align="center" h={"100dvh"} styles={{ root: { userSelect: "none", pointerEvents: "none" } }}>
          <DigitGroup value={numbers?.[0] || 0} digits={3} />
          <Separator />

          <DigitGroup value={numbers?.[1] || 0} digits={2} />
          <Separator />

          <DigitGroup value={numbers?.[2] || 0} digits={2} />
          <Separator />

          <DigitGroup value={numbers?.[3] || 0} digits={2} />
        </Flex>
      </ViewportWidthContext.Provider>
    </Fragment>
  );
};