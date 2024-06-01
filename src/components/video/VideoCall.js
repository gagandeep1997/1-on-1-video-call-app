"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { ButtonWrapper } from "../wrapper/buttonWrapper";

const AgoraWrapperDynamic = dynamic(() => import("../wrapper/agoraWrapper"), {
  ssr: false,
});

export default function VideoCall() {
  const [localUserJoined, setLocalUserJoined] = useState(false);
  const [joinVideo, setJoinVideo] = useState(false);

  const stopVideoHandler = () => {
    setLocalUserJoined(false);
    setJoinVideo(false);
  };
  return (
    <>
      <AgoraWrapperDynamic
        localUserJoined={localUserJoined}
        joinVideo={joinVideo}
      />
      <ButtonWrapper
        playVideo={() => setLocalUserJoined(true)}
        stopVideo={stopVideoHandler}
        joinVideo={() => setJoinVideo(true)}
      />
    </>
  );
}
