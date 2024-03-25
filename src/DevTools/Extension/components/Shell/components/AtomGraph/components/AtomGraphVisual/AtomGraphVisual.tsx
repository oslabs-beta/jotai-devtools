import React, { useCallback, useEffect } from 'react';
import { useAtomValue } from 'jotai/react';
import { atomWithDefault } from 'jotai/vanilla/utils';
import ReactFlow, {
  Background,
  BackgroundVariant,
  Connection,
  Controls,
  Edge,
  addEdge,
  useEdgesState,
  useNodesState,
} from 'reactflow';
import 'reactflow/dist/style.css';
import 'reactflow/dist/base.css';
import { ValuesAtomTuple } from 'src/types';
import { useThemeMode } from '../../../../../../../../DevTools/hooks/useThemeMode';
import { valuesAtom } from '../../../../../../../atoms/values-atom';
import { useSyncSnapshotValuesToAtom } from '../../../../../../../hooks/useAtomsSnapshots';
import { useDevtoolsJotaiStoreOptions } from '../../../../../../../internal-jotai-store';
import { atomToPrintable } from '../../../../../../../utils';
import CustomNode from './CustomNode';

const allValues = atomWithDefault<ValuesAtomTuple[]>((get) => {
  const allAtoms = get(valuesAtom);
  return allAtoms;
});

const nodeTypes = {
  custom: CustomNode,
};

export const AtomGraphVisual = React.memo(() => {
  useSyncSnapshotValuesToAtom();

  const values = useAtomValue(allValues, useDevtoolsJotaiStoreOptions());
  const valuesRef = React.useRef(values);

  React.useEffect(() => {
    valuesRef.current = values;
  }, [values]);

  type nodeObj = {
    id: string;
    type: string;
    position: { x: number; y: number };
    data: { label: string };
  };

  const atomNodes = (): nodeObj[] => {
    const nodesArray: nodeObj[] = [];
    // values.map iterates through all the atoms in the application to create a node
    values.map(([atom], i) => {
      const atomKey = atom.toString();
      nodesArray.push({
        id: `atom-list-item-${atomKey + i}`,
        type: 'custom',
        // x and y position creates a grid layout based on index of the atom in values
        position: {
          x: (i % 10) * 125,
          y: Math.floor(i / 10) * 125,
        },
        data: { label: atomToPrintable(atom) },
      });
    });
    return nodesArray;
  };

  type edgeObj = {
    id: string;
    source: string;
    target: string;
  };

  const initialEdges: Edge<edgeObj>[] = [
    // { id: 'e1-2', source: '1', target: '2' },
    // { id: 'el1-3', source:'1', target: '3'}
  ];

  const [nodes, setNodes, onNodesChange] = useNodesState(atomNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  useEffect(() => {
    setNodes(atomNodes);
  }, [values]);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <ReactFlow
        fitView
        // className={styles.AtomGraph}
        nodes={nodes}
        nodeTypes={nodeTypes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        style={{ background: useThemeMode('#F5F5F5', '#111724') }}
      >
        {/* TODO: Controls are not responding to lightvsdark mode settings, need to fix  */}
        <div
          //   style={{ backgroundColor: darkMode ? '#C0C2C9' : '#F5F5F5' }}
          style={{ backgroundColor: '#C0C2C9' }}
          className="dark:bg-slate-900"
        >
          <Controls />
        </div>
        <Background
          color={useThemeMode('#FFFFFF', '#252B37')}
          variant={BackgroundVariant.Lines}
        />
      </ReactFlow>
    </div>
  );
});
