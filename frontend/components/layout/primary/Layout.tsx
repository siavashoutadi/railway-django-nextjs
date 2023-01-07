import Nav from '../nav/Nav';

export interface ILayout extends React.ComponentPropsWithoutRef<'div'> {}

const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <>
      <Nav />
      <div className="container mx-auto my-10">
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
