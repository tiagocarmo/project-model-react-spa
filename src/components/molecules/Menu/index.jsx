import React from 'react';
import MenuLink from '../../atoms/MenuLink';

import * as Style from './style';

const Menu = () => {
  return (
    <Style.List>
      <Style.ListItem><MenuLink url='/' text='Home' /></Style.ListItem>
      <Style.ListItem><MenuLink url='/about' text='Sobre' /></Style.ListItem>
      <Style.ListItem><MenuLink url='/privacy-policy' text='Política Privacidade' /></Style.ListItem>
    </Style.List>
  );
};

export default Menu;
