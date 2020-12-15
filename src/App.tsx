import React from 'react';
import './App.scss';
import ETabs from './component/ETabs';
import { useSelector } from 'react-redux';
import { selectTab } from './component/ETabs/tabSlice';

type Props = {
  children: React.ReactElement
}

function App(props: Props) {
  const { children } = props;
  const panes = useSelector(selectTab);
  return (
    <div className="App">
      <div className="App__Tabs">
        <ETabs panes={panes} children={children}/>
      </div>
    </div>
  );
}

export default App;
