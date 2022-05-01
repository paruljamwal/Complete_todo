import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import { counterReducer } from "./counter/reducer";
import { todoReducer } from "./Todo/reducer";
// import {thunk} from 'redux-thunk'; //thunk means that happens in future;
//reduxtoolkit configstore

const rootReducer=combineReducers({
    counter:counterReducer,
    todos:todoReducer
})

/*MIDDLEWARE*/
//function return function --curried fun. take a argument and return

// function middleware(store){
//     return function(action){
//         return function(next){

//         }
//     }
// }

//ES6....................

// we can make requet async so we can use middlerware for that so that we have to make action async  function firslty we have to wrap the this fun and return that fun. to use Effect for tje we have to pass dispatch
// as an aregument inside async fun with the help of middleware. in middleware we have acces of store n action so we have to simply make a condition to get action if the return vale is fun === fun simply get data else goto next(action)
//store has dispatch available so pass store.dispatch to action 

const middleware=(store)=>(next)=>(action)=>{
if(typeof action === "function"){
   return action(store.dispatch)
}
console.log("Action",action)
next(action)
}


// console.log("State",store.getState());
// console.log("Heloo")

 export const store =createStore(rootReducer, applyMiddleware(middleware)
  
// export const store =createStore(rootReducer, applyMiddleware(thunk)

//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    
    );

 //{counter:0, todos:[]}

// store.subscribe(()=>{
//     console.log("Subscribe:" , store.getState())
// })

console.log("State",store.getState());
