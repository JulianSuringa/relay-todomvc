import 'babel-polyfill';

import BrowserProtocol from 'farce/lib/BrowserProtocol';
import queryMiddleware from 'farce/lib/queryMiddleware';
import createFarceRouter from 'found/lib/createFarceRouter';
import createRender from 'found/lib/createRender';
import { createResolveElements } from 'found-relay';
import React from 'react';
import ReactDOM from 'react-dom';
import Relay from 'react-relay';
import RelayLocalSchema from 'relay-local-schema';

import routes from './routes';
import schema from './data/schema';

import 'todomvc-common/base';
import 'todomvc-common/base.css';
import 'todomvc-app-css/index.css';

import './assets/learn.json';

Relay.injectNetworkLayer(
  new RelayLocalSchema.NetworkLayer({ schema }),
);

const Router = createFarceRouter({
  historyProtocol: new BrowserProtocol(),
  historyMiddlewares: [queryMiddleware],
  routeConfig: routes,

  render: createRender({}),
});

const mountNode = document.createElement('div');
document.body.appendChild(mountNode);

ReactDOM.render(
  <Router resolveElements={createResolveElements(Relay.Store)} />,
  mountNode,
);
