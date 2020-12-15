import React from 'react';

export type PaneType = {
  title: string,
  key: string | number,
  content: React.ReactElement,
}