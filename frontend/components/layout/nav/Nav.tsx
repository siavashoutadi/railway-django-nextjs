import NavItem from './NavItem';
export interface INav {}

const Nav: React.FC<INav> = ({}) => {
  return (
    <nav className="fixed bottom-0 z-10 w-full bg-gray-200 text-gray-800 lg:bottom-auto lg:top-0 lg:opacity-75">
      <div className="container">
        <div className="flex justify-around py-2 lg:justify-end">
          <NavItem href="/login" text="Login" icon="LoginIcon" />
          <NavItem href="/" text="Home" icon="HomeIcon" />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
