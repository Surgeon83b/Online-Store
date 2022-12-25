import React from 'react';
import { Bar, IBarProps } from './bar/leftBar';

export function Store(props: IBarProps) {
  return (
    <main className="bar">
      <Bar category={props.category} brand={props.brand} />
    </main>
  );
}
