import { ADD_TODO, DELETE, FILTER, SORT, TOOGLE } from "./action";

const init={todos:[]} //js feature of default value;
export const todoReducer=(store=init,{type,payload})=>{
switch(type){
   
    case ADD_TODO:
        return {...store,todos: payload}
    case SORT:
        return {...store,todos:[...store.todos].sort((a,b)=>a[payload]>b[payload] ? 1 : a[payload]<b[payload] ? -1 : 0 )}
       case FILTER:
        return {...store,todos:store.todos.filter(e=>e.title.includes(payload))}
     case DELETE:
         return {...store,todos:store.todos.filter((e)=>e.id !== payload)}
      case TOOGLE:
          return {...store, 
        todos:store.todos.map(todo=>todo.id===payload ? {...todo,status : !todo.status} : todo)}
         default:
         return{...store}

    }
}


//sort is in place ---not create new array muted the same array
//sort fun incorrect
