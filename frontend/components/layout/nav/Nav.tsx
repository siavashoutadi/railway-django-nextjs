import NavItem from './NavItem';

export interface INav {}

function MoonIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="hidden h-6 w-6 stroke-brand-500 hover:stroke-brand-600 dark:block"
    >
      <path
        d="M17.25 16.22a6.937 6.937 0 0 1-9.47-9.47 7.451 7.451 0 1 0 9.47 9.47ZM12.75 7C17 7 17 2.75 17 2.75S17 7 21.25 7C17 7 17 11.25 17 11.25S17 7 12.75 7Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-6 w-6 fill-brand-100 stroke-brand-600 hover:fill-brand-200 hover:stroke-brand-700 dark:hidden"
    >
      <path d="M8 12.25A4.25 4.25 0 0 1 12.25 8v0a4.25 4.25 0 0 1 4.25 4.25v0a4.25 4.25 0 0 1-4.25 4.25v0A4.25 4.25 0 0 1 8 12.25v0Z" />
      <path
        d="M12.25 3v1.5M21.5 12.25H20M18.791 18.791l-1.06-1.06M18.791 5.709l-1.06 1.06M12.25 20v1.5M4.5 12.25H3M6.77 6.77 5.709 5.709M6.77 17.73l-1.061 1.061"
        fill="none"
      />
    </svg>
  );
}

function ModeToggle() {
  function toggleMode() {
    let darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    let isSystemDarkMode = darkModeMediaQuery.matches;
    let isDarkMode = document.documentElement.classList.toggle('dark');
    console.log(isDarkMode);

    if (isDarkMode === isSystemDarkMode) {
      delete window.localStorage.isDarkMode;
    } else {
      window.localStorage.isDarkMode = isDarkMode;
    }
  }

  return (
    <div className="ml-6 border-l border-slate-200 pl-6 dark:border-slate-800">
      <button type="button" aria-label="Toggle dark mode" onClick={toggleMode}>
        <SunIcon />
        <MoonIcon />
      </button>
    </div>
  );
}

function NavDesktop() {
  return (
    <nav className="fixed top-0 z-10 w-full border-b-2 border-zinc-200 py-2 dark:border-slate-800 lg:block ">
      <div className="container">
        <div className="flex justify-around space-x-8 py-2 lg:justify-end">
          <NavItem href="/login" text="Login" icon="LoginIcon" />
          <NavItem href="/" text="Home" icon="HomeIcon" />
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}

function NavMobile() {
  return (
    <nav className="fixed bottom-0 z-10 hidden w-full border-b-2 border-zinc-200 py-2">
      <div className="container">
        <div className="flex justify-around space-x-8 py-2 lg:justify-end">
          <NavItem href="/login" text="Login" icon="LoginIcon" />
          <NavItem href="/" text="Home" icon="HomeIcon" />
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}

const Nav: React.FC<INav> = ({}) => {
  return (
    <header>
      <NavDesktop />
      <NavMobile />
    </header>
  );
};

export default Nav;
