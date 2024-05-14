//copied from AtomGraph.test.tsx
import React, { useMemo } from 'react';
import { act, render, screen, waitFor } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import * as stringifyModule from 'javascript-stringify';
import { useAtomValue } from 'jotai';
import { atom } from 'jotai/vanilla';
import { DevTools } from 'jotai-devtools';
import { AnyAtom } from 'src/types';
import { AtomGraphList } from '../../src/DevTools/Extension/components/Shell/components/AtomGraph/components/AtomGraphList/AtomGraphList';
import { customRender } from '../custom-render';

const BasicAtomsWithDevTools = () => {
  // Create atoms inside the component so that they are recreated for each test
  const countAtom = useMemo(() => atom(0), []);
  countAtom.debugLabel = 'countAtom';
  const doubleAtom = useMemo(
    () => atom((get) => get(countAtom) * 2),
    [countAtom],
  );
  const All = useMemo(() => atom((get) => get(doubleAtom) * 3), [doubleAtom]);

  doubleAtom.debugLabel = 'doubleCountAtom';
  All.debugLabel = 'AllDoubleCountAtom';

  useAtomValue(countAtom);
  useAtomValue(doubleAtom);
  useAtomValue(All);
  return <DevTools isInitialOpen={true} />;
};

//describe block: Atom Graph List
describe('DevTools - AtomGraph', () => {
  it('displays Atom Graph List items', async () => {
    const { container } = customRender(<DevTools isInitialOpen={true} />);
    await waitFor(() =>
      expect(screen.getByText('Atom Graph')).toBeInTheDocument(),
    );
  });

  it('displays atom items', async () => {
    const { container } = customRender(<DevTools isInitialOpen={true} />);
    // await waitFor(() =>
    //   expect(screen.getByText('')).toBeInTheDocument(),
    // );
    expect(
      screen.getByTestId('atom-list-no-atoms-found-message'),
    ).toHaveTextContent('No Atoms found!');
    expect(screen.getByLabelText('Search')).toBeInTheDocument();
    expect(
      screen.getByText(
        'Select an atom from the left panel to view the details',
      ),
    ).toBeInTheDocument();
  });

  it('should render atom viewer with correct atoms without provider', async () => {
    const { container } = customRender(<BasicAtomsWithDevTools />);
    expect(screen.getByText('countAtom')).toBeInTheDocument();
    expect(screen.getByText('doubleCountAtom')).toBeInTheDocument();
    // We did not add `debugLabel` to `AllDoubleCountAtom` so it should be unlabeled
    expect(screen.getByText('AllDoubleCountAtom')).toBeInTheDocument();
    // expect(container).toMatchSnapshot();
  });
});
//atoms in the left panel
//check that search works
//check that 'ALL' atoms appear in visualizer
//check that random

//describe block: Atom Graph Visualizer
//reactflow controller buttons work
//atoms always visable / no infinite scrolling
//nodes should be centered on load
//

//describe block: auto unmount (want it all)
