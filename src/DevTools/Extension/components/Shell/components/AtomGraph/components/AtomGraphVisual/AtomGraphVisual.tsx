import * as React from 'react';
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
import { selectedAtomAtom } from '../../../atoms';
import { useCreateAtomNodes } from '../../hooks/createAtomNodes';
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

  const selectedAtomData = useAtomValue(
    selectedAtomAtom,
    useDevtoolsJotaiStoreOptions(),
  );
  //Is this needed?
  // const selectedAtomDataRef = React.useRef(selectedAtomData);

  React.useEffect(() => {
    valuesRef.current = values;
  }, [values]);

  const atomNodes = useCreateAtomNodes(selectedAtomData, values);

  const [nodes, setNodes, onNodesChange] = useNodesState(atomNodes);
  // const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  React.useEffect(() => {
    setNodes(atomNodes);
  }, [values, selectedAtomData]);

  // const onConnect = React.useCallback(
  //   (params) => setEdges((eds) => addEdge(params, eds)),
  //   [setEdges],
  // );

  // const proOptions = { hideAttribution: true }; //Arjun tbd

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <ReactFlow
        fitView
        // className={styles.AtomGraph}
        nodes={nodes}
        nodeTypes={nodeTypes}
        // edges={edges}
        onNodesChange={onNodesChange}
        // onEdgesChange={onEdgesChange}
        // onConnect={onConnect}
        // mantine gray 2 for light, dark 8 for dark
        style={{ background: useThemeMode('#E9ECEF', '#1F1F1F') }}
        minZoom={0.15}
        maxZoom={1.0}
        draggable={false}
      >
        {/*proOptions={proOptions}  Arjun tbd */}
        {/* TODO: Controls are not responding to lightvsdark mode settings, need to fix  */}
        <div
          //   style={{ backgroundColor: darkMode ? '#C0C2C9' : '#F5F5F5' }}
          style={{ backgroundColor: '#C0C2C9' }}
          className="dark:bg-slate-900"
        >
          <Controls showInteractive={false} />
        </div>
        <Background
          color={useThemeMode('#CED4DA', '#424242')}
          variant={BackgroundVariant.Dots}
          gap={15}
          size={2}
        />
      </ReactFlow>
    </div>
  );
});
