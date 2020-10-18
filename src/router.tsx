import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import OrphanagesMap from './pages/OrphanagesMap';
import Orphanage from './pages/Orphanage';
import CreateOrphanage from './pages/CreateOrphanage';
import NotFound from './pages/NotFound';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/app" exact component={OrphanagesMap} />

        <Route path="/orphanages/create" exact component={CreateOrphanage} />
        <Route path="/orphanages/:id" component={Orphanage} />

        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
