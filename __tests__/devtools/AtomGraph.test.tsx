import React, { useMemo } from 'react';
import { act, screen, waitFor } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { useAtomValue } from 'jotai';
import { atom } from 'jotai/vanilla';
import { DevTools } from 'jotai-devtools';
import { customRender } from '../custom-render';

const BasicAtomsWithDevTools = () => {
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
    it('render all atom nodes when "All" button is selected', async () => {
      const { container } = customRender(<BasicAtomsWithDevTools />);

      await act(async () => {
        await userEvent.click(screen.getByText('Atom Graph'));
      });

      const nodes = await container.querySelectorAll(
        '.internal-jotai-devtools-custom-node',
      );

      expect(Object.keys(nodes)).toHaveLength(2);
    });
    it('render only selected parent node when specific atom button is selected', async () => {
      const { container } = customRender(<BasicAtomsWithDevTools />);

      await act(async () => {
        await userEvent.click(screen.getByText('Atom Graph'));

        const countAtomButton = await screen.getByTestId('countAtom');

        await userEvent.click(countAtomButton);
      });
      //expect the node to render in the container
      expect(container.querySelector('#countAtom')).toBeInTheDocument();
    });
    it('renders selected node at center of ReactFlow container', async () => {
      const { container } = customRender(<BasicAtomsWithDevTools />);

      await act(async () => {
        await userEvent.click(screen.getByText('Atom Graph'));

        const countAtomButton = await screen.getByTestId('countAtom');

        await userEvent.click(countAtomButton);
      });
      //expect the node to render in the container
      const countAtomNode = await screen.getByTestId(`atom-node-countAtom`);

      //expect the node positioning to be some specific position;
      const { x, y, width, height } =
        await countAtomNode.getBoundingClientRect();

      const reactflowContainer = screen.getByTestId('reactflow-container');
      const reactflowContainerWidth = reactflowContainer.clientWidth;
      const reactflowContainerHeight = reactflowContainer.clientHeight;

      const centerX = reactflowContainerWidth / 2;
      const centerY = reactflowContainerHeight / 2;

      const nodeCenterX = x + width / 2;
      const nodeCenterY = y + height / 2;

      expect(nodeCenterX).toBeCloseTo(centerX);
      expect(nodeCenterY).toBeCloseTo(centerY);
    });
  });
});
