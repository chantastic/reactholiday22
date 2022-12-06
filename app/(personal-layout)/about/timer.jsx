"use client";

import * as React from "react";

export default function Timer() {
  let [seconds, updateSeconds] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      updateSeconds(seconds + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [seconds]);

  return <>{seconds}</>;
}
