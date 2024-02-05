export function SectionHeader({
  text,
  black = false,
}: {
  text: string;
  black?: boolean;
}) {
  return (
    <h1
      className={`text-center font-nova text-4xl font-semibold uppercase md:text-5xl ${black ? "text-black" : "text-white"}`}
    >
      {text}
    </h1>
  );
}
