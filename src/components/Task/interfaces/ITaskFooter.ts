import React from 'react';

interface ITaskFooter {
  onStatusChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: (
    event:
      | React.MouseEvent<HTMLButtonElement>
      | React.MouseEvent<HTMLAnchorElement>
  ) => void;
}

export default ITaskFooter;
