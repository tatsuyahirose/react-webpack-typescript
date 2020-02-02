import * as React from 'react';

interface Props {
}

interface State {
}

export class Tab extends React.Component<Props, State> {
  render() {
    return (
      <ul className="AmebaPop_Tab">
        <li>
          <button
            onClick={() => console.log(1)}
          >
            クチコミ
          </button>
        </li>
        <li>
          <button
            onClick={() => console.log(2)}
          >
            商品詳細
          </button>
        </li>
      </ul>
    );
  };
}
