import * as React from 'react';

interface Props {
  data: any;
}

export const Reputation: React.FunctionComponent<Props> = ({
  data,
}) => {
  return (
    <div className="AmebaPop_Reputation">
      <div className="AmebaPop_Reputation_Twitter">twitter</div>
      <div className="AmebaPop_Reputation_Rapi">apiのデータ</div>
    </div>
  );
}
