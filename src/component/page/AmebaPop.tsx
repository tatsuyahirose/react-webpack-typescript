import * as React from 'react';
import { Iframe } from '../module/iframe';
import { Header } from '../module/header';
import { Tab } from '../module/tab';

interface Props {
}

interface State {
  selectedTab: 'brand';
}

export class AmebaPop extends React.Component<Props, State> {
  render() {
    return (
      <div className="AmebaPop">
        <Header />
        <Tab />
        <Iframe />
      </div>
    );
  };
}
