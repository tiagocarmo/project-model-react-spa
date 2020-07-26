import React from 'react';
import PropTypes from 'prop-types';

import * as Style from './style';

const MenuLink = ({ text, url }) => {
  return (
    <Style.LinkItem
      exact={true}
      to={url}
    >
      {text}
    </Style.LinkItem>
  );
};

MenuLink.propTypes = {
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default MenuLink;
