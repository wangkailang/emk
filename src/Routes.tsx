import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Spin } from 'antd';
import routes from './constants/routes.json';
import Dashboard from './containers/Dashboard';
import App from './App';


const LazySpeedSheet = React.lazy(() => import('./containers/SpeedSheet'));

const SpeedSheet = (props: Record<string, any>) => (
  <React.Suspense fallback={<Spin />}>
    <LazySpeedSheet {...props} />
  </React.Suspense>
)

const Routes = () => {
  return (
    <App>
      <Switch>
        <Route exact path={routes.HOME} component={Dashboard} />
        <Route path={routes.SPEEDSHEET} component={SpeedSheet} />
      </Switch>
    </App>
  )
}

export default Routes;