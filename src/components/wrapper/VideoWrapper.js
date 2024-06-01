"use client";

import {
  useJoin,
  useLocalCameraTrack,
  useLocalMicrophoneTrack,
  LocalUser,
  usePublish,
} from "agora-rtc-react";

export default function VideoWrapper() {
  useJoin(async function fetchRTCToken() {
    if (process.env.serverUrl !== "") {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_serverUrl}/getToken`,
          {
            method: "POST",
            mode: "cors",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              tokenType: "rtc",
              channel: process.env.NEXT_PUBLIC_channelName,
              role: "publisher",
              uid: "0",
              expire: 3600,
            }),
          }
        );
        const data = await response.json();
        return {
          appid: process.env.NEXT_PUBLIC_appId,
          channel: process.env.NEXT_PUBLIC_channelName,
          token: data.token,
        };
      } catch (error) {
        console.error(error);
        throw error;
      }
    } else {
      return config;
    }
  }, true);

  const { localCameraTrack } = useLocalCameraTrack(true);
  const { localMicrophoneTrack } = useLocalMicrophoneTrack(true, {
    ANS: true,
    AEC: true,
  });

  let isPublish = false;
  if (localCameraTrack && localMicrophoneTrack) {
    isPublish = true;
  }

  usePublish([localCameraTrack, localMicrophoneTrack], isPublish);

  return (
    <>
      <div className="vid w-64 h-48 sm:w-96 sm:h-48 lg:w-[600px] lg:h-[300px]">
        <LocalUser
          audioTrack={localMicrophoneTrack}
          cameraOn={true}
          micOn={true}
          playAudio={true}
          playVideo={true}
          videoTrack={localCameraTrack}
        />
      </div>
    </>
  );
}
