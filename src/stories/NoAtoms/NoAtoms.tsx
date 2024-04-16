import * as React from 'react';
// import { Title } from '@mantine/core';
import { atom, useAtom } from 'jotai';
import {
  atomWithDefault,
  atomWithObservable,
  loadable,
  splitAtom,
  unwrap,
} from 'jotai/vanilla/utils';
import { atomsWithQuery } from 'jotai-tanstack-query';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';

export const NoAtoms = () => {
  return (
    <div style={{ height: '500px' }}>
      <h1>NoAtoms</h1>
      <div>hello</div>
    </div>
  );
};
