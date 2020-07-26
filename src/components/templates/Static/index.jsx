import React from 'react';
import Header from '../../organisms/Header';

import * as Style from './style';

const StaticPage = ({ title, content }) => {
  return (
    <>
      <Header />
      <Style.ResponsiveGrid>
        <Style.Title>{title}</Style.Title>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </Style.ResponsiveGrid>
    </>
  );
};

export default StaticPage;
