"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { ButtonWrapper } from "../wrapper/buttonWrapper";

const AgoraWrapperDynamic = dynamic(() => import("../wrapper/agoraWrapper"), {
  ssr: false,
});

export default function VideoCall() {
  const [localUserJoined, setLocalUserJoined] = useState(false);
  return (
    <>
      <AgoraWrapperDynamic localUserJoined={localUserJoined} />
      <ButtonWrapper
        playVideo={() => setLocalUserJoined(true)}
        stopVideo={() => setLocalUserJoined(false)}
      />
    </>
  );
}
