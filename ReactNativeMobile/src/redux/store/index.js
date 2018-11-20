import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import reducers from '../reducers';
import epics from '../epics';

const epicMiddleware = createEpicMiddleware();

export default function configureStore() {
    const store = createStore(
        reducers,
        applyMiddleware(epicMiddleware)
    );

    epicMiddleware.run(epics);

    return store;
}

//export const store = createStore(reducers);
