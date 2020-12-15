import React from 'react';
import { Tabs } from 'antd';
import { PaneType } from '../../types';
import SpeedSheet from '../../containers/SpeedSheet';

const { TabPane } = Tabs;

type Props = {
  panes: PaneType[];
  children: React.ReactElement
}

const ETabs = (props: Props) => {
  const { panes, children } = props;
  return (
    <Tabs type="card">
      {panes.map(pane => (
        <TabPane tab={pane.title} key={pane.key}>
          {pane.content === 'dashboard' && children}
          {pane.content === 'speedsheet' && <SpeedSheet/>}
        </TabPane>
      ))}
    </Tabs>
  );
}

export default ETabs;