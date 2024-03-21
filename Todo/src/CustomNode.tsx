import React, { memo } from 'react';
import { Background, Handle, Position } from 'reactflow';

function CustomNode({ data }) {
  return (
    <div>
        <div className="CustomNode">
          {data.emoji}
        </div>

      {/* <Handle type="target" position={Position.Top} className="w-16 !bg-teal-500" />
      <Handle type="source" position={Position.Bottom} className="w-16 !bg-teal-500" /> */}
    </div>
  );
}


export default memo(CustomNode);