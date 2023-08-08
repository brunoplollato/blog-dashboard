import MenuItem from './MenuItem';

const Menu = ({ menuItems, selected }: MenuItems) => {
  return (
    <ul className="py-7 text-indigo-900 flex flex-col w-full">
      {menuItems.map(({ text, isSelected, icon, to, customClass, subMenu }) => (
        <MenuItem
          key={text}
          isSelected={isSelected}
          icon={icon}
          text={text}
          to={to}
          customClass={`${customClass} ${
            isSelected === selected && 'bg-indigo-50'
          }`}
        >
          {subMenu && (
            <ul
              className={`px-11 py-1 flex flex-col gap-4 ${
                isSelected === selected && 'bg-indigo-100'
              }`}
            >
              {subMenu.map((subMenuItem: SubMenuItem) => (
                <MenuItem
                  key={subMenuItem.text}
                  text={subMenuItem.text}
                  to={subMenuItem.to}
                  customClass={subMenuItem.customClass}
                />
              ))}
            </ul>
          )}
        </MenuItem>
      ))}
    </ul>
  );
};

export default Menu;
