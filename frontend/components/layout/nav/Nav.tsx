import NavItem from './NavItem';
export interface INav {}

const Nav: React.FC<INav> = ({}) => {
  return (
    <nav className="bg-gray-200 fixed bottom-0 lg:bottom-auto lg:top-0 w-full text-gray-800 lg:opacity-75 z-10">
      <div className="container">
        <div className="flex justify-around lg:justify-end py-2">
          <NavItem href="/login" text="Login" icon="LoginIcon" />
          <NavItem href="/" text="Home" icon="HomeIcon" />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
