import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const ACTIVE = '#61dafb';
const REGULAR = '#ffffff';

export const LinkItem = styled(NavLink)`
  color: ${REGULAR};
  padding: 8px 16px;
  display: inline-block;
  text-decoration: none;
  border-bottom: 2px solid transparent;
  &:hover, &.active {
    color: ${ACTIVE};
  }
  &.active {
    border-bottom: 2px solid ${ACTIVE};
  }
`;
