import React from 'react';
import { Tabs } from 'antd';
import { PaneType } from '../../types';

const { TabPane } = Tabs;

type Props = {
  panes: PaneType[]
}

const ETabs = (props: Props) => {
  const { panes } = props;
  return (
    <Tabs type="card">
      {panes.map(pane => (
        <TabPane tab={pane.title} key={pane.key}>
          {pane.content}
        </TabPane>
      ))}
    </Tabs>
  );
}

export default ETabs;