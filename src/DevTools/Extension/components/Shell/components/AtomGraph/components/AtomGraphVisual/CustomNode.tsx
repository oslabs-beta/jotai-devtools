import React, { memo } from 'react';
import { Background, Handle, Position } from 'reactflow';
// import { useDarkModeValue } from '../../../../../atoms/dark-mode';
import classes from './CustomNode.module.css';

type CustomNodeData = {
  label: string;
  //possibility of adding additional relevant information to the node
  value?: string;
  valueType?: string;
  dependents?: string;
};

type CustomNodeProps = {
  data: CustomNodeData;
};

function CustomNode({ data }: CustomNodeProps) {
  //   const darkMode = useDarkModeValue();

  return (
    <div>
      <div className={classes.CustomNode}>{data.label}</div>
      <Handle
        type="target"
        position={Position.Top}
        className="w-16 !bg-teal-500"
      />
      <Handle
        type="source"
        position={Position.Bottom}
        className="w-16 !bg-teal-500"
      />
    </div>
  );
}

export default memo(CustomNode);
