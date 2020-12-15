import React from 'react';
import './App.scss';
import Navigation from './component/Navigation';
import ETabs from './component/ETabs';
import { PaneType } from './types';

type Props = {
  children: React.ReactNode;
};

function App(props: Props) {
  const { children } = props;
  const [panes, setPanes] = React.useState<PaneType[]>([]);
  React.useEffect(() => {
    setPanes([{
      title: '首页',
      content: (
        <div className="App__Dashboard">
          <div className="App__Navigation">
            <Navigation panes={panes} setPanes={setPanes}/>
          </div>
          <div className="App__Content">
            {children}
          </div>
        </div>
      ),
      key: 'homepage',
    }])
  }, []);
  console.log('panes', panes);
  return (
    <div className="App">
      <div className="App__Tabs">
        <ETabs panes={panes}/>
      </div>
    </div>
  );
}

export default App;
