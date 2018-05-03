/**
 * Created by Zing on 2016/6/17.
 */
import { compose,createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import reducer from './reducer/rindex';
import DevTools from './devtools';

var finalCreateStore = compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : DevTools.instrument()
)(createStore);

const store = finalCreateStore(reducer);

export default store;
