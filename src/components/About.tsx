export function About() {
  return (
    <div className="flex justify-between">
      <div>
        <h1 className="text-5xl font-semibold">About</h1>
        <p className="max-w-[500px] py-4 text-lg">
          Building is something I've always been passionate about. From building
          Legos to theory-crafting a Path of Exile build to designing a web app,
          it's been my primary drive for becoming a software developer.
        </p>
      </div>
      <div className="h-[300px] w-[400px] rounded-md bg-red-400" />
    </div>
  );
}
