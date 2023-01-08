import Nav from '../nav/Nav';

export interface ILayout extends React.ComponentPropsWithoutRef<'div'> {}

const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <>
      <Nav />
      <div className="container mx-auto">
        <div>{children}</div>
      </div>
    </>
  );
};

export default Layout;
