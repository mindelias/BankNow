import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware, compose } from "redux";
import {createLogger} from "redux-logger";
import rootReducer from './rootReducer'
// import AuthReducer from './Auth/Auth.reducer'
 

declare global {
    interface Window{
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?:typeof compose
    }
}

const logger = createLogger();
const enhancers = [];
 const middleware:any[] = [thunkMiddleware];

//  const middlewares = [logger] 

if(process.env.NODE_ENV === 'development'){
    middleware.push(logger);
}
if(process.env.NODE_ENV === 'development'){
    const devToolsExtension = window?.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

    if(typeof devToolsExtension === "function"){
        enhancers.push(devToolsExtension)
    }
}

const componseEnhancers:any = compose(
    applyMiddleware(...middleware),...enhancers
);
 const store = createStore(rootReducer, componseEnhancers) 
 export default store