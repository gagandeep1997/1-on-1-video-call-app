export default function Button({
  text,
  className,
  customClass = "",
  onClickFunction,
}) {
  return (
    <button className={`${className} ${customClass}`} onClick={onClickFunction}>
      {text}
    </button>
  );
}
