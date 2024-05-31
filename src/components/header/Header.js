export default function Header({ title }) {
  return (
    <>
      <h1 className="font-bold text-5xl mb-1">{title}</h1>
      <h6 className="font-semibold text-lg">
        This app lets you do a 1-on-1 video call with anyone and anywhere
      </h6>
      <p>
        Stay connected and collaborate with friends, family and colleagues no
        matter where you are. Sign in below to get Started
      </p>
    </>
  );
}
