import Header from "@/components/header/Header";
import VideoCall from "@/components/video/VideoCall";

export default function Home() {
  return (
    <main className="flex gap-6 min-h-screen flex-col items-center p-24">
      <Header title="Welcome to Gagan's meet" />
      <VideoCall />
    </main>
  );
}
