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
    <Link href={href}>
      <div className="font-semibold leading-6 hover:text-brand-500">
        <span className="hidden lg:block">{text}</span>
        <span className="lg:hidden">
          <Icon format="outline" icon={icon} />
        </span>
      </div>
    </Link>
  );
};

export default NavItem;
