import React, { memo } from 'react';
import { Background, Handle, Position } from 'reactflow';
// import { useDarkModeValue } from '../../../../../atoms/dark-mode';

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
    // <div className={darkMode ? 'dark' : ''}>
    <div>
      <div
        className="CustomNode"
        style={{
          //   color: darkMode ? '#000000' : '#F5F5F5',
          color: '#000000',
          fontSize: '1em',
          textAlign: 'center',
          textOverflow: 'ellipsis',
          overflow: 'hidden',
          wordBreak: 'break-all',
          //   backgroundColor: darkMode ? '#E4F0FB' : '#252B37',
          backgroundColor: '#E4F0FB',
          //circle: 50%, squoval: 40%
          borderRadius: '50%',
          width: '6em',
          height: '6em',
          padding: '5%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {data.label}
      </div>

      {/* <Handle type="target" position={Position.Top} className="w-16 !bg-teal-500" />
      <Handle type="source" position={Position.Bottom} className="w-16 !bg-teal-500" /> */}
    </div>
  );
}

export default memo(CustomNode);
