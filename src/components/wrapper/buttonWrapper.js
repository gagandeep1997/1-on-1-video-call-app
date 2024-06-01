import Button from "@/components/buttons/Button";

export const ButtonWrapper = ({ playVideo, stopVideo, joinVideo }) => {
  return (
    <div className="flex flex-col gap-2 mb-3 sm:flex-row">
      <Button
        text="Click here to start the Camera"
        className="block border border-red-400 p-2"
        customClass=""
        onClickFunction={playVideo}
      />
      <Button
        text="Click here to stop the Camera"
        className="block border border-red-400 p-2"
        customClass=""
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
