import { Edge } from 'reactflow';
import { ValuesAtomTuple } from 'src/types';
import { atomToPrintable } from '../../../../../../utils';
import { SelectedAtomAtomData } from '../../atoms';

type nodeObj = {
  id: string;
  type: string;
  position: { x: number; y: number };
  data: { label: string };
};

export const useCreateAtomNodes = (
  selectedAtom: SelectedAtomAtomData | undefined,
  allAtoms: ValuesAtomTuple[],
): nodeObj[] => {
  const nodesArray: nodeObj[] = [];
  if (!selectedAtom) {
    // values.map iterates through all the atoms in the application to create a node
    allAtoms.map(([atom], i) => {
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
  } else {
    const atom = selectedAtom.atom;
    const atomKey = atom.toString();
    nodesArray.push({
      id: `atom-list-item-${atomKey}`,
      type: 'custom',
      position: {
        x: 0,
        y: 0,
      },
      data: { label: atomToPrintable(atom) },
    });
  }
  return nodesArray;
};

// type edgeObj = {
//   id: string;
//   source: string;
//   target: string;
// };

// const initialEdges: Edge<edgeObj>[] = [
//   // { id: 'e1-2', source: '1', target: '2' },
//   // { id: 'el1-3', source:'1', target: '3'}
// ];
