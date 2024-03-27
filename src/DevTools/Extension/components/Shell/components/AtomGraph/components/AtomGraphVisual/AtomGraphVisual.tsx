import * as React from 'react';
import { useAtomValue } from 'jotai/react';
import { atomWithDefault } from 'jotai/vanilla/utils';
import ReactFlow, {
  Background,
  BackgroundVariant,
  Connection,
  Controls,
  Edge,
  ReactFlowProvider,
  addEdge,
  useEdgesState,
  useNodesState,
  useReactFlow,
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
// import { useFocusNode } from '../../hooks/useAdjustViewport';
import classes from './AtomGraphVisual.module.css';
import CustomNode from './CustomNode';

const allValues = atomWithDefault<ValuesAtomTuple[]>((get) => {
  const allAtoms = get(valuesAtom);
  return allAtoms;
});

const nodeTypes = {
  custom: CustomNode,
};

// export const useFocusNode = (nodes, reactFlowInstance) => {
//   React.useEffect(() => {
//     if (reactFlowInstance && nodes.length > 0) {
//       const node = nodes[0];
//       const x = node.position.x;
//       const y = node.position.y;
//       const zoom = 1.85;
//       reactFlowInstance.setCenter(x, y, { zoom });
//     }
//   }, [nodes, reactFlowInstance]);
// };

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

  const { atomNodes, atomEdges } = useCreateAtomNodes(selectedAtomData, values);

  const [nodes, setNodes, onNodesChange] = useNodesState(atomNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(atomEdges);

  // const reactFlowInstance = useReactFlow();

  // useFocusNode(nodes, reactFlowInstance);

  React.useEffect(() => {
    setNodes(atomNodes);
    setEdges(atomEdges);
  }, [values, selectedAtomData]);

  // const onConnect = React.useCallback(
  //   (params) => setEdges((eds) => addEdge(params, eds)),
  //   [setEdges],
  // );

  // const proOptions = { hideAttribution: true }; //Arjun tbd

  return (
    <ReactFlowProvider>
      <div className={classes['graph-container']}>
        <ReactFlow
          // fitView
          // className={styles.AtomGraph}
          nodes={nodes}
          nodesDraggable={false}
          nodeTypes={nodeTypes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          // onConnect={onConnect}
          // mantine gray 2 for light, dark 8 for dark
          style={{ background: useThemeMode('#E9ECEF', '#1F1F1F') }}
          minZoom={0.15}
          maxZoom={1.0}
          onlyRenderVisibleElements={true}
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
    </ReactFlowProvider>
  );
});
