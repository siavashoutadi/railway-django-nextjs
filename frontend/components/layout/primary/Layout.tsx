import Nav from '../nav/Nav';

export interface ILayout extends React.ComponentPropsWithoutRef<'div'> {}

const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <div className="h-full bg-zinc-50 text-slate-800 dark:bg-slate-900 dark:text-zinc-300">
      <Nav />
      <main className="container mx-auto py-16">
        <div>{children}</div>
      </main>
    </div>
  );
};

export default Layout;
