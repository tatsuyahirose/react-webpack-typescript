import * as React from 'react';
import { Iframe } from '../module/iframe';
import { Header } from '../module/header';
import { Tab } from '../module/tab';

interface Props {
}

export class AmebaPop extends React.Component<Props> {
  // tab選択処理
  handleClickTab() {
    // クリックされたらstate(選択されているtab)を返る
  }

  render() {
    return (
      <div className="AmebaPop">
        {/* 共通ヘッダー */}
        <Header />

        {/* tab */}
        <Tab onClickTab={this.handleClickTab()} />

        {/* ブランドサイト */}
        <Iframe />

        {/* 評判 */}
        <Reputation />
      </div>
    );
  };
}
