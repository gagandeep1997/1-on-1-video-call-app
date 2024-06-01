"use client";

import { AgoraRTCProvider, useRTCClient } from "agora-rtc-react";

import AgoraRTC from "agora-rtc-sdk-ng";
import VideoWrapper from "./VideoWrapper";
import { useState } from "react";
import RemoteVideo from "../video/RemoteVideo";

export default function AgoraWrapper({ localUserJoined, joinVideo }) {
  const [agoraEngine] = useState(
    useRTCClient(AgoraRTC.createClient({ codec: "vp8", mode: "rtc" }))
  );

  return (
    <AgoraRTCProvider client={agoraEngine}>
      {localUserJoined && <VideoWrapper />}
      {joinVideo && <RemoteVideo />}
    </AgoraRTCProvider>
  );
}
