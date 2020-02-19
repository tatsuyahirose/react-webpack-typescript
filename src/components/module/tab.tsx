import * as React from 'react';

interface Props {
  onClickTab: void;
}

export class Tab extends React.Component<Props> {
  render() {
    return (
      <ul className="AmebaPop_Tab">
        <li className="AmebaPop_Tab_Item">
          <button
            className="AmebaPop_Tab_Item_Button"
            onClick={() => console.log(1)}
          >
            クチコミ
          </button>
        </li>
        <li className="AmebaPop_Tab_Item">
          <button
            className="AmebaPop_Tab_Item_Button"
            onClick={() => console.log(2)}
          >
            商品詳細
          </button>
        </li>
      </ul>
    );
  };
}
