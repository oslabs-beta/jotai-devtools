import React, { useCallback } from 'react';
import './todoStyles.css';
import ReactFlow, { 
  useNodesState, 
  useEdgesState, 
  addEdge, 
  MiniMap,
  Controls,
  Background, 
  NodeToolbar,
} from 'reactflow';
import 'reactflow/dist/style.css';
import 'reactflow/dist/base.css';
import CustomNode from './CustomNode';

const nodeTypes = {
  custom: CustomNode,
};

// const nodeAtoms = 

const initialNodes = [
  { id: '1', type: 'custom', position: { x: 0, y: 0 }, data: { label: '1' } },
  { id: '2', type: 'custom', position: { x: 0, y: 100 }, data: { label: '2', emoji: '😎' } },
  { id: '3', type: 'custom', position: { x: 0, y: 200 }, data: { label: '3' } },
];


const initialEdges = [
  // { id: 'e1-2', source: '1', target: '2' },
  // { id: 'el1-3', source:'1', target: '3'}
];

function Reactflow() {
  const [ nodes, setNodes, onNodesChange ] = useNodesState(initialNodes);
  const [ edges, setEdges, onEdgesChange ] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );

  return (
      <div className="flex-container">
      <div className="reactflow-wrapper">
        <ReactFlow
          fitView
          nodes={nodes}
          nodeTypes={nodeTypes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          style={{ backgroundColor: 'black', width: '100%', height: '100%' }}
        >
          <Controls />
          <NodeToolbar />
          <Background color="black" variant="dots" />
        </ReactFlow>
      </div>
    </div>
  );
}

export default Reactflow;