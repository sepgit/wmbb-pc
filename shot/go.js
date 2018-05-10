import React from 'react';
import ReactDOM from 'react-dom';
// Import css
import './src/css/common.styl';
import './src/css/Adsertage/adsertage.styl';
import './src/css/Advantage/advantage.styl';
import './src/css/Advisory/advisory.styl';
import './src/css/backplate/backplate.styl';
import './src/css/employee/employee.styl';
import './src/css/home/Home.styl';
import './src/css/inquiry/inquiry.styl';
import './src/css/login/login.styl';
import './src/css/reply/reply.styl';
import './src/css/Supplier/supplier.styl';
import './src/css/Spfreight/spfreight.styl';
import './src/css/Paymentg/Paymentg.styl';
import './src/css/Paymenth/Paymenth.styl';
import './src/css/blacklist/blacklist.styl';
import './src/css/ccom/zselect.styl';
import './src/css/newl/newl.styl';
import './src/css/meeting/meeting.styl';
import './src/css/meetqt/meetqt.styl';
import './src/css/meetxqlist/meetxqlist.styl';
import './src/css/meetyslist/meetyslist.styl';
import './src/css/meetedit/meetedit.styl';
import './src/css/cab/cab.styl';
import './src/css/cabr/cabr.styl';
import './src/css/dep/dep.styl';
import './src/css/regr/regr.styl';
import './src/css/cabsck/cabsck.styl';
import './src/css/Galy/Galy.styl';
import './src/css/comment/comment.styl';
import './src/css/cabMy/cabMy.styl';

// import react router deps
import { Router, Route, IndexRoute, browserHistory,Redirect,history } from 'react-router';
import { Provider } from 'react-redux';
import store from './store';
import { syncHistoryWithStore } from 'react-router-redux'
import {handonEnter} from './devtools/Autovilder';
import {msgEnter} from './devtools/Automsg';
import {FKEnter} from './devtools/Autofk';
import {SKEnter} from './devtools/Autosk';
const historys = syncHistoryWithStore(browserHistory, store);

const routes = {
  component: require('./containers/APP'),
  childRoutes: [
    {
      path: '/',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('./containers/login/login'))
        })
      }
    },
    {
      path: '/Regist',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('./containers/login/regist'))
        })
      }
    },
    {
      path: '/Fogotma',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('./containers/login/fogotma'))
        })
      }
    },
    {
      path: '/Home',
      onEnter:handonEnter,
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('./containers/home/Home'))
        })
      }
    },
    {
      path: '/Inquiry',
      onEnter:handonEnter,
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('./containers/inquiry/Inquiry'))
        })
      }
    },
    {
      path: '/Backplate',
      onEnter:handonEnter,
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('./containers/backplate/backplate'))
        })
      }
    },
    {
      path: '/Advisory',
      onEnter:handonEnter,
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('./containers/Advisory/advisory'))
        })
      }
    },
    {
      path: '/Reply',
      onEnter:handonEnter,
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('./containers/reply/reply'))
        })
      }
    },
    {
      path: '/Supplier',
      onEnter:handonEnter,
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('./containers/Supplier/supplier'))
        })
      }
    },
    {
      path: '/Advantage',
      onEnter:handonEnter,
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('./containers/Advantage/advantage'))
        })
      }
    },
    {
      path: '/Adsertage',
      onEnter:handonEnter,
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('./containers/Adsertage/adsertage'))
        })
      }
    },
    {
      path: '/Employee',
      onEnter:msgEnter,
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('./containers/employee/employee'))
        })
      }
    },
    {
      path: '/Spfreight',
      onEnter:handonEnter,
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('./containers/Spfreight/Spfreight'))
        })
      }
    },
    {
      path: '/Paymentg',
      onEnter:handonEnter,
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('./containers/Paymentg/Paymentg'))
        })
      }
    },
    {
      path: '/Paymenth',
      onEnter:handonEnter,
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('./containers/Paymenth/Paymenth'))
        })
      }
    },
    {
      path: '/Blacklist',
      onEnter:FKEnter,
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('./containers/blacklist/blacklist'))
        })
      }
    },
    {
      path: '/meeting',
      onEnter:handonEnter,
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('./containers/meeting/meeting'))
        })
      }
    },
    {
      path: '/meetqt',
      onEnter:handonEnter,
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('./containers/meetqt/meetqt'))
        })
      }
    },
    {
      path: '/meetxqlist',
      onEnter:handonEnter,
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('./containers/meetxqlist/meetxqlist'))
        })
      }
    },
    {
      path: '/meetyslist',
      onEnter:handonEnter,
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('./containers/meetyslist/meetyslist'))
        })
      }
    },
    {
      path: '/meetedit',
      onEnter:handonEnter,
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('./containers/meetedit/meetedit'))
        })
      }
    },
    {
      path: '/cab',
      onEnter:handonEnter,
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('./containers/cab/cab'))
        })
      }
    },
    {
      path: '/cabr',
      onEnter:handonEnter,
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('./containers/cabr/cabr'))
        })
      }
    },
    {
      path: '/dep',
      onEnter:handonEnter,
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('./containers/dep/dep'))
        })
      }
    },
    {
      path: '/regr',
      onEnter:handonEnter,
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('./containers/regr/regr'))
        })
      }
    },
    {
      path: '/cabsck',
      onEnter:SKEnter,
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('./containers/cabsck/cabsck'))
        })
      }
    },
    {
      path: '/cabg',
      onEnter:handonEnter,
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('./containers/cabg/cabg'))
        })
      }
    },
    {
      path: '/cabrg',
      onEnter:handonEnter,
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('./containers/cabrg/cabrg'))
        })
      }
    },
    {
      path: '/cabPlatform',
      onEnter:handonEnter,
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('./containers/cabPlatform/cabPlatform'))
        })
      }
    },
    {
      path: '/cabMy',
      onEnter:handonEnter,
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('./containers/cabMy/cabMy'))
        })
      }
    }
  ]
};

ReactDOM.render(
  <Provider store={store}>
    <Router history={historys} routes={routes}/>
  </Provider>, document.getElementById('app')
);

module.hot.accept();