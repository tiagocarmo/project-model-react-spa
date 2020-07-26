import React from 'react';
import Header from '../../organisms/Header';

import * as Style from './style';

const Home = ({ children, dataTable }) => {
  return (
    <>
      <Header />
      <Style.ResponsiveGrid>
        {children}
        {dataTable
          && <>
            <Style.Table>
              <thead>
                <tr>
                  <Style.TableHeader>Estado</Style.TableHeader>
                  <Style.TableHeader>Casos Confirmados</Style.TableHeader>
                  <Style.TableHeader>Mortes</Style.TableHeader>
                </tr>
              </thead>
              <tbody>
                {dataTable.data && dataTable.data.map((info, key) => {
                  return <Style.TableRow key={key}>
                    <td>{info.state}</td>
                    <td>{info.cases}</td>
                    <td>{info.deaths}</td>
                  </Style.TableRow>;
                })}
              </tbody>
            </Style.Table>
          </>
        }
      </Style.ResponsiveGrid>
    </>
  );
};

export default Home;
