import Header from "@/components/header/Header";
import VideoCall from "@/components/video/VideoCall";

export default function Home() {
  return (
    <main className="flex gap-4 min-h-screen flex-col items-center mt-2">
      <Header
        title="Welcome to Gagan's meet"
        subHeading1="This app lets you do a 1-on-1 video call with anyone and anywhere"
        subHeading2="Stay connected and collaborate with friends, family and colleagues no
        matter where you are."
      />
      <VideoCall />
    </main>
  );
}
