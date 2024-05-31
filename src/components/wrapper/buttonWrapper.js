import Button from "@/components/buttons/Button";

export const ButtonWrapper = ({ playVideo, stopVideo }) => {
  return (
    <div className="flex">
      <Button
        text="Click here to start the Camera"
        className="block border border-red-400 p-1"
        customClass="mr-5"
        onClickFunction={playVideo}
      />
      <Button
        text="Click here to stop the Camera"
        className="block border border-red-400 p-1"
        onClickFunction={stopVideo}
      />
    </div>
  );
};
