import { PossibleIcons } from 'heroicons-lookup';
import Link from 'next/link';
import Icon from '../../icon/Icon';

export interface INavItem {
  href: string;
  text: string;
  icon: PossibleIcons;
}

const NavItem: React.FC<INavItem> = ({ href, text, icon }) => {
  return (
    <Link
      href={href}
      className="flex content-center text-gray-700 hover:text-gray-500 px-2"
      legacyBehavior>
      <div className="flex items-center align-middle content-center">
        <span className="hidden lg:block">{text}</span>
        <span className="px-1">
          <Icon format="outline" icon={icon} />
        </span>
      </div>
    </Link>
  );
};

export default NavItem;
