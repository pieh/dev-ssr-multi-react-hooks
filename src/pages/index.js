import React, { useState } from "react";
import useEdgeCase from "../hooks/custom";

export default function Home() {
  const [b, setB] = useState(`wat`);
  const [e, setE] = useEdgeCase();

  if (typeof window !== `undefined`) {
    window.setB = setB;
    window.setE = setE;
  }

  console.log({ e, b, setB, setE });
  return (
    <div>
      hello
      <pre>{JSON.stringify({ e, b, setB, setE }, null, 2)}</pre>
    </div>
  );
}
