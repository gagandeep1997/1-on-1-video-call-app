"use client";

import { AgoraRTCProvider, useRTCClient } from "agora-rtc-react";

import AgoraRTC from "agora-rtc-sdk-ng";
import VideoWrapper from "./VideoWrapper";
import { useState } from "react";

export default function AgoraWrapper({ localUserJoined }) {
  const [agoraEngine] = useState(
    useRTCClient(AgoraRTC.createClient({ codec: "vp8", mode: "rtc" }))
  );

  return (
    <AgoraRTCProvider client={agoraEngine}>
      {localUserJoined && <VideoWrapper />}
    </AgoraRTCProvider>
  );
}
