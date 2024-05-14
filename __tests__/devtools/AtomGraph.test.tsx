//copied from AtomGraph.test.tsx
import React, { useMemo } from 'react';
import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react';
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
  doubleAtom.debugLabel = 'doubleCountAtom';

  useAtomValue(countAtom);
  useAtomValue(doubleAtom);
  return <DevTools isInitialOpen={true} />;
};

//describe block: Atom Graph List
describe('DevTools - AtomGraph tab', () => {
  describe('List of atoms', () => {
    it('should render atom graph without any errors if there are no atoms', async () => {
      const { container } = customRender(<DevTools isInitialOpen={true} />);
      await waitFor(() =>
        expect(screen.getByText('Atom Graph')).toBeInTheDocument(),
      );
      expect(
        screen.getByTestId('atom-list-no-atoms-found-message'),
      ).toHaveTextContent('No Atoms found!');
      expect(screen.getByLabelText('Search')).toBeInTheDocument();
      expect(container).toMatchSnapshot();
    });

    it('should render atom viewer with correct atoms without provider', async () => {
      const { container } = customRender(<BasicAtomsWithDevTools />);
      expect(screen.getByText('countAtom')).toBeInTheDocument();
      expect(screen.getByText('doubleCountAtom')).toBeInTheDocument();
      expect(container).toMatchSnapshot();
    });
  });

  describe('Search', () => {
    it('should search for atoms correctly', async () => {
      const { container } = customRender(<BasicAtomsWithDevTools />);

      await act(async () => {
        await userEvent.type(
          screen.getByLabelText('Search'),
          'doubleCountAtom',
        );
      });

      expect(
        screen.queryByTestId('atom-list-no-atoms-found-message'),
      ).not.toBeInTheDocument();
      expect(screen.queryByText('countAtom')).not.toBeInTheDocument();
      expect(screen.getByText('doubleCountAtom')).toBeInTheDocument();
      expect(container).toMatchSnapshot();
    });

    it('should display an error if no atoms are found', async () => {
      const { container } = customRender(<BasicAtomsWithDevTools />);

      await act(async () => {
        await userEvent.type(screen.getByLabelText('Search'), 'abc 123');
      });
      expect(
        screen.getByTestId('atom-list-no-atoms-found-message'),
      ).toHaveTextContent('No Atoms found!');
      expect(screen.queryByText('countAtom')).not.toBeInTheDocument();
      expect(screen.queryByText('doubleCountAtom')).not.toBeInTheDocument();
      expect(container).toMatchSnapshot();
    });
  });

  describe('ReactFlow Container', () => {
    xit('render all atom nodes when "All" button is selected', async () => {
      const { container } = customRender(<BasicAtomsWithDevTools />);

      await waitFor(() =>
        expect(screen.getByText('Atom Graph')).toBeInTheDocument(),
      );
      const allButton = screen.getByRole('button', { name: /all/i });
      userEvent.click(allButton);

      await waitFor(() => {
        const nodes = screen.getAllByTestId('');
        expect(nodes).toHaveLength(2);
      });
    });
    it('render only selected parent node when specific atom button is selected', async () => {
      const { container } = customRender(<BasicAtomsWithDevTools />);

      await act(async () => {
        await userEvent.click(screen.getByText('Atom Graph'));
        await userEvent.click(screen.getByText('countAtom'));
      });
      //expect the node to render in the container
      expect(container.querySelector('#countAtom')).toBeInTheDocument();
    });
    xit('renders selected node at center of container', async () => {
      const { container } = customRender(<BasicAtomsWithDevTools />);

      await act(async () => {
        await userEvent.click(screen.getByText('Atom Graph'));
        await userEvent.click(screen.getByText('countAtom'));
      });
      //expect the node to render in the container
      expect(container.querySelector('#countAtom')).toBeInTheDocument();
      //expect the node positioning to be some specific position;
    });
    xit('prevents infinite scrolling', async () => {});
  });
});

//Descibe block: Atom Graph List DONE
//atoms in the left panel DONE
//check that search works DONE

//describe block: Atom Graph Visualizer
//check that 'ALL' atoms appear in visualizer
//check that random
//reactflow controller buttons work
//atoms always visable / no infinite scrolling
//nodes should be centered on load
//

//describe block: auto unmount (want it all)
