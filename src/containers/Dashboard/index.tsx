import React from 'react';
import Navigation from '../../component/Navigation';

type Props = {
  children: React.ReactElement
}

const Dashboard = (props: Props) => {
  const { children } = props;
  return (
    <div className="App__Dashboard">
      <div className="App__Navigation">
        <Navigation />
      </div>
      <div className="App__Content">
        {children}
      </div>
    </div>
  )
}

export default Dashboard;