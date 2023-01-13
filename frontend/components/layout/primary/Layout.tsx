import Nav from '../nav/Nav';

export interface ILayout extends React.ComponentPropsWithoutRef<'div'> {}

const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <div className="theme-base h-full">
      <Nav />
      <main className="container mx-auto py-16">
        <div>{children}</div>
      </main>
    </div>
  );
};

export default Layout;
