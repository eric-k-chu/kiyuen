export function SectionHeader({ text }: { text: string }) {
  return (
    <h1 className="text-center font-nova text-4xl font-semibold uppercase md:text-5xl">
      {text}
    </h1>
  );
}
