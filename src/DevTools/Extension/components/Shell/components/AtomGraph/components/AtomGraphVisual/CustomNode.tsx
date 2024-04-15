import React, { memo } from 'react';
import { Background, Handle, Position } from 'reactflow';
// import { useDarkModeValue } from '../../../../../atoms/dark-mode';
import './CustomNode.css';

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
      <div className="internal-jotai-devtools-custom-node">{data.label}</div>
      <Handle
        type="target"
        position={Position.Left}
        className="w-16 !bg-teal-500"
      />
      <Handle
        type="source"
        position={Position.Right}
        className="w-16 !bg-teal-500"
      />
    </div>
  );
}

export default memo(CustomNode);
