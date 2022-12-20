import React from 'react';
import { Bar, IBarProps } from './bar/leftBar';

export function Store(props: IBarProps) {
  return (
    <main className="comtainer">
      <Bar category={props.category} brand={props.brand} />
    </main>
  );
}
