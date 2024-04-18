// import { graphlib, layout } from 'dagre';
// import { Edge, MarkerType, Node, Position } from 'reactflow';
// import { AnyAtom, ValuesAtomTuple } from 'src/types';
// import { useAtomsSnapshots } from '../../../../../../hooks/useAtomsSnapshots';
// import { atomToPrintable } from '../../../../../../utils';
// import { SelectedAtomAtomData } from '../../atoms';
// import classes from '../components/AtomGraphVisual/CustomNode.module.css';

// interface CustomNodeData {
//   label: string;
// }

// interface CustomNode extends Node<CustomNodeData, string> {
//   id: string;
//   type: string;
//   position: { x: number; y: number };
//   data: CustomNodeData;
//   width?: number;
//   height?: number;
//   targetPosition?: Position;
//   sourcePosition?: Position;
// }

// // is this necessary? does react already have this type set up?
// interface CustomEdge extends Edge<any> {
//   id: string;
//   source: string;
//   target: string;
//   animated?: boolean;
//   markerEnd?: {
//     type: string;
//     width?: number;
//     height?: number;
//     color?: string;
//     className?: any;
//   };
//   style?: object;
// }

// export const useCreateAtomNodes = (
//   selectedAtomData: SelectedAtomAtomData | undefined,
//   values: ValuesAtomTuple[],
// ): { atomNodes: CustomNode[]; atomEdges: CustomEdge[] } => {
//   const { dependents } = useAtomsSnapshots();
//   const nodesArray: CustomNode[] = [];
//   const edgesArray: CustomEdge[] = [];

//   const dagreGraph = new graphlib.Graph();
//   dagreGraph.setDefaultEdgeLabel(() => ({}));

//   // Set the node spacing
//   dagreGraph.setGraph({
//     rankdir: 'LR',
//     // nodesep: 100, // horiz spacing between nodes
//     // ranksep: 100, // vert spacing between nodes
//     // edgesep: 100,
//   });

//helper function to create individual nodes
//   const createNode = (atom: AnyAtom, i: number, isParent: boolean) => {
//     const atomKey = atom.toString();
//     const nodeId = `atom-list-item-${atomKey + i}`;
//     dagreGraph.setNode(nodeId, { width: 100, height: 50 });

//     if (isParent) {
//       dagreGraph.setNode(nodeId, { ParentNode: true, rank: i });
//     } else {
//       // Set the rank for child nodes based on their parent's rank
//       dagreGraph.setNode(nodeId, { ParentNode: false });
//     }

//     nodesArray.push({
//       id: nodeId,
//       type: 'custom',
//       position: { x: 0, y: 0 },
//       data: { label: atomToPrintable(atom) },
//       width: 100,
//       height: 50,
//     });
//     return nodeId;
//   };

//   if (!selectedAtomData) {
//     values.forEach(([atom], i) => {
//       const nodeId = createNode(atom, i, true);
//       const depsForAtom = Array.from(dependents.get(atom) || []);
//       depsForAtom.forEach((depAtom) => {
//         const depNodeId = createNode(depAtom, i, false);
//         edgesArray.push({
//           id: `${nodeId}-${depNodeId}`,
//           source: nodeId,
//           target: depNodeId,
//           animated: true,
//           markerEnd: {
//             type: MarkerType.ArrowClosed,
//             width: 20,
//             height: 20,
//           },
//           style: {
//             strokeWidth: 2,
//           },
//         });
//       });
//     });
//   } else {
//     const atom = selectedAtomData.atom;
//     const nodeId = createNode(atom, 0, true);
//     const depsForAtom = Array.from(dependents.get(atom) || []);
//     depsForAtom.forEach((depAtom) => {
//       const depNodeId = createNode(depAtom, 0, false);
//       edgesArray.push({
//         id: `${nodeId}-${depNodeId}`,
//         source: nodeId,
//         target: depNodeId,
//         animated: true,
//         markerEnd: {
//           type: MarkerType.ArrowClosed,
//           width: 20,
//           height: 20,
//         },
//         style: {
//           strokeWidth: 2,
//         },
//       });
//     });
//   }

//   layout(dagreGraph);

//   let lastParent: string;
//   let lastParentY = 0;
//   const parentNodeSpacing = 150;

//   const layoutedNodes = nodesArray.map((node, i) => {
//     const nodeWithPosition = dagreGraph.node(node.id);
//     const isParent = nodeWithPosition.ParentNode === true;

//     let position;

//     if (isParent) {
//       position = {
//         x: nodeWithPosition.x - node.width! / 2,
//         y: lastParentY,
//       };
//       lastParentY += parentNodeSpacing;

//       lastParent = node.id;
//     } else {
//       // this sets the position of the child node next to the parent node
//       const parentNodePosition = dagreGraph.node(lastParent);
//       position = {
//         x: parentNodePosition.x + node.width! * 2.5,
//         y: lastParentY - node.height! / 2 - 125,
//       };
//     }

//     return {
//       ...node,
//       targetPosition: Position.Top,
//       sourcePosition: Position.Bottom,
//       position,
//     };
//   });

//   return { atomNodes: layoutedNodes, atomEdges: edgesArray };
// };

//___________________________Original above _____________________________________

import { graphlib, layout } from 'dagre';
import { Edge, MarkerType, Node, Position } from 'reactflow';
import { AnyAtom, ValuesAtomTuple } from 'src/types';
import { useAtomsSnapshots } from '../../../../../../hooks/useAtomsSnapshots';
import { atomToPrintable } from '../../../../../../utils';
import { SelectedAtomAtomData } from '../../atoms';
// import classes from '../components/AtomGraphVisual/CustomNode.module.css';

// ... (rest of the code remains the same)

interface AtomNode {
  id: string;
  atom: AnyAtom;
  parent: AtomNode | null;
  children: AtomNode[];
}

const createAtomNode = (
  atom: AnyAtom,
  parent: AtomNode | null = null,
): AtomNode => {
  return {
    id: `atom-${atom.toString()}`,
    atom,
    parent,
    children: [],
  };
};

const buildAtomTree = (
  atoms: AnyAtom[],
  dependents: Map<AnyAtom, Set<AnyAtom>>,
  atomMap: Map<AnyAtom, AtomNode>,
): AtomNode[] => {
  const relationships: [AnyAtom, AnyAtom][] = [];

  atoms.forEach((atom) => {
    if (!atomMap.has(atom)) {
      atomMap.set(atom, createAtomNode(atom));
    }
  });

  atoms.forEach((atom) => {
    const node = atomMap.get(atom)!;
    const depsForAtom = Array.from(dependents.get(atom) || []);

    depsForAtom.forEach((depAtom) => {
      let depNode = atomMap.get(depAtom);
      if (!depNode) {
        depNode = createAtomNode(depAtom);
        atomMap.set(depAtom, depNode);
      }
      relationships.push([atom, depAtom]);
    });
  });

  relationships.forEach(([parentAtom, childAtom]) => {
    const parentNode = atomMap.get(parentAtom)!;
    const childNode = atomMap.get(childAtom)!;
    if (!childNode.parent) {
      childNode.parent = parentNode;
    }
    parentNode.children.push(childNode);
  });

  return Array.from(atomMap.values()).filter((node) => !node.parent);
};

const layoutNodes = (nodes: AtomNode[], dagreGraph: graphlib.Graph): void => {
  nodes.forEach((node) => {
    dagreGraph.setNode(node.id, { width: 100, height: 50 });
    node.children.forEach((child) => {
      dagreGraph.setEdge(node.id, child.id);
    });
    layoutNodes(node.children, dagreGraph);
  });
};

const createNodeComponent = (node: AtomNode): Node => {
  return {
    id: node.id,
    type: 'custom',
    position: { x: 0, y: 0 },
    data: { label: atomToPrintable(node.atom) },
    width: 100,
    height: 50,
  };
};

const createEdgeComponent = (source: AtomNode, target: AtomNode): Edge => {
  return {
    id: `${source.id}-${target.id}`,
    source: source.id,
    target: target.id,
    animated: true,
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
    },
    style: {
      strokeWidth: 2,
    },
  };
};

const buildComponents = (
  nodes: AtomNode[],
  atomMap: Map<AnyAtom, AtomNode>,
): { atomNodes: Node[]; atomEdges: Edge[] } => {
  const atomNodes: Node[] = [];
  const atomEdges: Edge[] = [];

  const traverseNodes = (node: AtomNode) => {
    atomNodes.push(createNodeComponent(node));
    node.children.forEach((child) => {
      if (atomMap.has(node.atom) && atomMap.has(child.atom)) {
        atomEdges.push(createEdgeComponent(node, child));
      }
      traverseNodes(child);
    });
  };

  nodes.forEach(traverseNodes);
  return { atomNodes, atomEdges };
};

export const useCreateAtomNodes = (
  selectedAtomData: SelectedAtomAtomData | undefined,
  values: ValuesAtomTuple[],
): { atomNodes: Node[]; atomEdges: Edge[] } => {
  const { dependents } = useAtomsSnapshots();

  const dagreGraph = new graphlib.Graph();
  dagreGraph.setGraph({
    rankdir: 'LR',
    nodesep: 100, //nodesep, ranksep, and edgesep when added auto layouts which puts the nodes out of view
    ranksep: 150,
    edgesep: 150,
  });
  dagreGraph.setDefaultEdgeLabel(() => ({}));

  let atoms: AnyAtom[];
  if (selectedAtomData) {
    atoms = [selectedAtomData.atom];
    const getDependentAtoms = (atom: AnyAtom): AnyAtom[] => {
      const depsForAtom = Array.from(dependents.get(atom) || []);
      return [...depsForAtom, ...depsForAtom.flatMap(getDependentAtoms)];
    };
    atoms = [...atoms, ...getDependentAtoms(selectedAtomData.atom)];
  } else {
    atoms = values.map(([atom]) => atom);
  }

  const atomMap = new Map(atoms.map((atom) => [atom, createAtomNode(atom)]));
  const rootNodes = buildAtomTree(atoms, dependents, atomMap);
  layoutNodes(rootNodes, dagreGraph);
  const { atomNodes, atomEdges } = buildComponents(rootNodes, atomMap);

  // Filter out edges with null or undefined targets
  // atomEdges = atomEdges.filter(
  //   (edge) => edge.target !== null && edge.target !== undefined,
  // );

  layout(dagreGraph);

  atomNodes.forEach((node) => {
    const nodeWithPosition = dagreGraph.node(node.id);
    node.targetPosition = Position.Left;
    node.sourcePosition = Position.Right;
    node.position = {
      x: nodeWithPosition.x - node.width! / 2,
      y: nodeWithPosition.y,
    };
  });

  return { atomNodes, atomEdges };
};
//_________________________TEST ABove_____________________________________________

//____
// import * as React from 'react';
// import { Edge } from 'reactflow';
// import { AnyAtom, ValuesAtomTuple } from 'src/types';
// import { useAtomsSnapshots } from '../../../../../../hooks/useAtomsSnapshots';
// import { atomToPrintable } from '../../../../../../utils';
// import { SelectedAtomAtomData } from '../../atoms';

// // accumulate all dependents of atoms

// type AtomDependentsListProps = {
//   atom: AnyAtom;
// };

//  const AtomDependentsList = ({ atom }: AtomDependentsListProps): [] => {
//   const { dependents } = useAtomsSnapshots();

//   const depsForAtom = React.useMemo(() => {
//     const arr = Array.from(dependents.get(atom) || []);
//     const filteredCurrentAtom = arr.filter(
//       (a) => a.toString() !== atom.toString(),
//     );

//     return filteredCurrentAtom;
//   }, [dependents, atom]);
// };

// //generate nodes

// type nodeObj = {
//   id: string;
//   type: string;
//   position: { x: number; y: number };
//   data: { label: string };
// };

// export const useCreateAtomNodes = (
//   selectedAtom: SelectedAtomAtomData | undefined,
//   allAtoms: ValuesAtomTuple[],
// ): nodeObj[] => {
//   const nodesArray: nodeObj[] = [];
//   if (!selectedAtom) {
//     // values.map iterates through all the atoms in the application to create a node
//     allAtoms.map(([atom], i) => {
//       const atomKey = atom.toString();
//       nodesArray.push({
//         id: `atom-list-item-${atomKey + i}`,
//         type: 'custom',
//         // x and y position creates a grid layout based on index of the atom in values
//         position: {
//           x: (i % 10) * 125,
//           y: Math.floor(i / 10) * 125,
//         },
//         data: { label: atomToPrintable(atom) },
//       });
//     });
//   } else {
//     const parentAtom = selectedAtom.atom;
//     const parentAtomKey = parentAtom.toString();
//     nodesArray.push({
//       id: `atom-list-item-${parentAtomKey}`,
//       type: 'custom',
//       position: {
//         x: 0,
//         y: 0,
//       },
//       data: { label: atomToPrintable(parentAtom) },
//     });
//     //check for dependencies
//     const dependents = AtomDependentsList(parentAtom);
//     if (dependents) {
//       dependents.map(([atom], i) => {
//         const depAtomKey = atom.toString();
//         nodesArray.push({
//           id: `atom-list-item-${depAtomKey + i}`,
//           type: 'custom',
//           // x and y position creates a grid layout based on index of the atom in values
//           position: {
//             x: (i % 10) * 125,
//             y: Math.floor(i / 10) * 125,
//           },
//           data: { label: atomToPrintable(atom) },
//         });
//       });
//     }
//   }
//   return nodesArray;
// };

// type edgeObj = {
//   id: string;
//   source: string;
//   target: string;
// };

// const initialEdges: Edge<edgeObj>[] = [
//   // { id: 'e1-2', source: '1', target: '2' },
//   // { id: 'el1-3', source:'1', target: '3'}
// ];
