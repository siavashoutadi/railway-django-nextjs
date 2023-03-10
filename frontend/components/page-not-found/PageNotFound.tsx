export interface IPageNotFound {}

const PageNotFound: React.FC<IPageNotFound> = () => {
  return (
    <div className="theme-base absolute left-0 top-0 -z-10 flex h-screen w-full flex-col justify-center px-3 text-center align-middle">
      <p className="text-8xl font-bold text-brand-500">404</p>
      <h1 className="mt-2 text-xl font-semibold tracking-tight sm:text-5xl">
        This page does not exist.
      </h1>
      <p className="mt-2 text-sm sm:text-lg">
        The page you are looking for could not be found.
      </p>
    </div>
  );
};

export default PageNotFound;
