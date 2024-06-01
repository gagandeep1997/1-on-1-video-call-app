import { RemoteUser, useRemoteUsers } from "agora-rtc-react";
import React from "react";

export default function RemoteVideo() {
  const remoteUsers = useRemoteUsers();
  console.log(remoteUsers);
  return (
    <>
      {remoteUsers?.map((remoteUser) => (
        <div className="vid w-64 h-48 sm:w-96 sm:h-48 lg:w-[600px] lg:h-[300px]" key={remoteUser.uid}>
          <RemoteUser user={remoteUser} playAudio={true} playVideo={true} />
        </div>
      ))}
    </>
  );
}
