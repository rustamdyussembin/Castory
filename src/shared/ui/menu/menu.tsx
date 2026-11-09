import { Menu as PaperMenu } from 'react-native-paper';

import type { IMenuItemProps, IMenuProps } from './menu.types';

const MenuItem = (props: IMenuItemProps) => {
  return <PaperMenu.Item {...props} />;
};

const MenuRoot = (props: IMenuProps) => {
  return <PaperMenu {...props} />;
};

export const Menu = Object.assign(MenuRoot, { Item: MenuItem });
