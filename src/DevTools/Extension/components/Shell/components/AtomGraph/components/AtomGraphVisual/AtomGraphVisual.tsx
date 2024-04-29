import * as React from 'react';
import { useAtomValue } from 'jotai/react';
import { atomWithDefault } from 'jotai/vanilla/utils';
import ReactFlow, {
  Background,
  BackgroundVariant,
  Controls,
  getNodesBounds,
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
import './AtomGraphVisual.css';
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

  const { atomNodes, atomEdges } = useCreateAtomNodes(selectedAtomData, values);

  const [nodes, setNodes, onNodesChange] = useNodesState(atomNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(atomEdges);
  const [boundry, setBoundry] = React.useState([
    [-Infinity, -Infinity],
    [+Infinity, +Infinity],
  ]);

  const { fitView } = useReactFlow();

  React.useEffect(() => {
    setNodes(atomNodes);
    setEdges(atomEdges);
  }, [values, selectedAtomData]);

  React.useEffect(() => {
    if (nodes.length > 0) {
      const bounds = getNodesBounds(nodes);

      // setBoundry sets the boundry of the user's view so they cannot endlessly scroll
      setBoundry([
        [-150 + bounds.x, -150 + bounds.y],
        [100 + bounds.width + bounds.x, 100 + bounds.height + bounds.y],
      ]);
      fitView({ padding: 3, duration: 100 });
    }
  }, [nodes]);

  return (
    <div className="internal-jotai-devtools-graph-container">
      <ReactFlow
        nodes={nodes}
        nodesDraggable={false}
        nodeTypes={nodeTypes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        // mantine gray 2 for light, dark 8 for dark
        style={{ background: useThemeMode('#FFFFFF', '#1F1F1F') }}
        minZoom={0.15}
        // maxZoom={1.0}
        // onlyRenderVisibleElements={true}
        translateExtent={boundry}
      >
        <Controls showInteractive={false} />
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
