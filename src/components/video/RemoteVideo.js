import { RemoteUser, useRemoteUsers } from "agora-rtc-react";
import React from "react";

export default function RemoteVideo() {
  const remoteUsers = useRemoteUsers();
  console.log(remoteUsers);
  return (
    <>
      {remoteUsers?.map((remoteUser) => (
        <div
          className="vid"
          style={{ height: 300, width: 600 }}
          key={remoteUser.uid}
        >
          <RemoteUser user={remoteUser} playAudio={true} playVideo={true} />
        </div>
      ))}
    </>
  );
}
