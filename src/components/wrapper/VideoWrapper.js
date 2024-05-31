"use client";

import {
  useJoin,
  useLocalCameraTrack,
  useLocalMicrophoneTrack,
  LocalUser,
  useRemoteUsers,
  RemoteUser,
  usePublish,
} from "agora-rtc-react";

export default function VideoWrapper() {
  useJoin(async function fetchRTCToken() {
    if (process.env.serverUrl !== "") {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_serverUrl}/getToken`, {
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
        });
        const data = await response.json();
        console.log("RTC token fetched from server: ", data);
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

  const { localCameraTrack } = useLocalCameraTrack();
  const { localMicrophoneTrack } = useLocalMicrophoneTrack(true, {
    ANS: true,
    AEC: true,
  });

  usePublish(
    [localCameraTrack, localMicrophoneTrack],
    localCameraTrack & localMicrophoneTrack
  );
  const remoteUsers = useRemoteUsers();
  return (
    <>
      <div className="vid" style={{ height: 300, width: 600 }}>
        <LocalUser
          audioTrack={localMicrophoneTrack}
          cameraOn
          micOn
          playAudio
          playVideo
          videoTrack={localCameraTrack}
        />
      </div>
      {remoteUsers?.map((remoteUser) => (
        <div
          className="vid"
          style={{ height: 300, width: 600 }}
          key={remoteUser.uid}
        >
          <RemoteUser user={remoteUser} playVideo={true} playAudio={true} />
        </div>
      ))}
    </>
  );
}
