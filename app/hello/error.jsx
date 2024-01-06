"use client";

import React from "react";

export default function HellorError({ error, reset }) {
  React.useEffect(() => {
    // some reporting service
    console.log("wat?", error);
  }, [error]);
  return (
    <>
      <p>Something went wrong!</p>
      <pre>{JSON.stringify(error, null, 2)}</pre>
      <button onClick={reset}>Reset</button>
    </>
  );
}
