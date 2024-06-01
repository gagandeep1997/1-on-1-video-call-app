import Button from "@/components/buttons/Button";

export const ButtonWrapper = ({ playVideo, stopVideo, joinVideo }) => {
  return (
    <div className="flex">
      <Button
        text="Click here to start the Camera"
        className="block border border-red-400 p-2"
        customClass="mr-5"
        onClickFunction={playVideo}
      />
      <Button
        text="Click here to stop the Camera"
        className="block border border-red-400 p-2"
        customClass="mr-5"
        onClickFunction={stopVideo}
      />
      <Button
        text="Join"
        className="block border border-red-400 p-2"
        onClickFunction={joinVideo}
      />
    </div>
  );
};
