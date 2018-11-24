import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
//import { createEpicMiddleware } from 'redux-observable';
import reducers from '../reducers';
//import epics from '../epics';

//const epicMiddleware = createEpicMiddleware();

export default function configureStore() {
    const store = createStore(
        reducers,
        applyMiddleware(thunk)
    );

    //epicMiddleware.run(epics);

    return store;
}

