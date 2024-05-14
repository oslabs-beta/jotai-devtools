import { graphlib, layout } from 'dagre';
import { Edge, MarkerType, Node, Position } from 'reactflow';
import { AnyAtom, ValuesAtomTuple } from 'src/types';
import { useAtomsSnapshots } from '../../../../../../hooks/useAtomsSnapshots';
import { atomToPrintable } from '../../../../../../utils';
import { SelectedAtomAtomData } from '../../atoms';

interface AtomNode {
  id: string;
  atom: AnyAtom;
  parent: AtomNode | null;
  children: AtomNode[];
}

//Creates a new atom node with the given atom and parent node
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

//Builds a tree structure of atom nodes based on the provided atoms and their dependencies
//Establishes parent-child relationships between atoms
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
    if (parentAtom !== childAtom) {
      const parentNode = atomMap.get(parentAtom)!;
      const childNode = atomMap.get(childAtom)!;
      if (!childNode.parent) {
        childNode.parent = parentNode;
      }
      parentNode.children.push(childNode);
    }
  });

  return Array.from(atomMap.values()).filter((node) => !node.parent);
};

//Recursively lays out the atom nodes in a Dagre graph based on their parent-child relationships
//Sets the nodes and edges in the Dagre graph
const layoutNodes = (nodes: AtomNode[], dagreGraph: graphlib.Graph): void => {
  nodes.forEach((node) => {
    dagreGraph.setNode(node.id, { width: 100, height: 50 });
    node.children.forEach((child) => {
      dagreGraph.setEdge(node.id, child.id);
    });
    layoutNodes(node.children, dagreGraph);
  });
};

// Creates a node component for rendering in the visualization based on an atom node
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

//Creates an edge component for rendering in the visualization based on the source and target atom nodes
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

//Builds the node and edge components for rendering in the visualization based on the atom nodes and their relationships
//Traverses the atom tree and creates node and edge components accordingly
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

//Main hook that orchestrates the creation and layout of atom nodes for visualization
//Retrieves the necessary data (selected atom data and atom values) and dependencies
//Builds the atom tree, lays out the nodes using Dagre, and creates the node and edge components
//Returns the atom nodes and edges for rendering in the visualization
export const useCreateAtomNodes = (
  selectedAtomData: SelectedAtomAtomData | undefined,
  values: ValuesAtomTuple[],
): { atomNodes: Node[]; atomEdges: Edge[] } => {
  const { dependents } = useAtomsSnapshots();

  const dagreGraph = new graphlib.Graph();
  dagreGraph.setGraph({
    rankdir: 'LR',
    nodesep: 100,
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
