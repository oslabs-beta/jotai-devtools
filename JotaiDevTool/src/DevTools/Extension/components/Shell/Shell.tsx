import '../../../../../app/globals.css';
import React, { useRef, useState } from 'react';
import { useAtomValue } from 'jotai/react';
import { shellStylesAtom } from '../../../atoms/shell-styles';
import { shellStyleDefaults } from '../../../constants';
import { useDevtoolsJotaiStoreOptions } from '../../../internal-jotai-store';
import { ErrorBoundary } from './components/ErrorBoundary';
import { Header } from './components/Header';
import { ShellResizeBar } from './components/ShellResizeBar';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '../../../../../components/ui/tabs';
import { cn } from '../../../../../lib/utils';
import { tabs } from './tabs';




export const Shell = () => {
  const [selectedTab, setSelectedTab] = useState('atom-viewer');

  const shellRef = useRef<HTMLDivElement>(null);

  // TODO move this to a custom hook
  const { height } = useAtomValue(
    shellStylesAtom,
    useDevtoolsJotaiStoreOptions(),
  );

  return (
    <Tabs
      defaultValue={selectedTab}
      className="flex w-full flex-col"
      style={{
        height: height,
        maxHeight: shellStyleDefaults.maxHeight,
      }}
      ref={shellRef}
      data-testid="jotai-devtools-shell"
      id="jotai-devtools-shell"
    >
      <ShellResizeBar shellRef={shellRef} />
      <Header />
      <ErrorBoundary>
        <TabsList className="flex w-full justify-start">
          {tabs.map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              onClick={() => setSelectedTab(tab.value)}
              className={cn(
                'flex items-center px-4 py-2 text-sm font-medium focus:outline-none',
                selectedTab === tab.value
                  ? 'text-black border-b-2 !border-black'
                  : 'text-gray-700',
              )}
            >
              {tab.icon}
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
        <div
          style={{
            height: '100%',
            overflow: 'auto',
            borderBottomLeftRadius: '7px',
            borderBottomRightRadius: '7px',
          }}
        >
          {tabs.map((tab) => (
            <TabsContent key={tab.value} value={tab.value} className="h-full">
              {tab.content}
            </TabsContent>
          ))}
        </div>
      </ErrorBoundary>
    </Tabs>
  );
};
