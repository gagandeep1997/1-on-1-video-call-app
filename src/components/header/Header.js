export default function Header({ title, subHeading1, subHeading2 }) {
  return (
    <>
      <h1 className="font-bold text-xl lg:text-5xl mb-1">{title}</h1>
      <h6 className="font-medium text-base lg:font-semibold lg:text-xl text-center">{subHeading1}</h6>
      <p className="text-center">{subHeading2}</p>
    </>
  );
}
