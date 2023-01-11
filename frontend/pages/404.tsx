export default function Custom404() {
  return (
    <div className="flex h-screen w-full flex-col justify-center text-center align-middle">
      <p className="text-base font-semibold">404</p>
      <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
        This page does not exist.
      </h1>
      <p className="mt-2 text-lg text-gray-500">
        The page you are looking for could not be found.
      </p>
    </div>
  );
}
