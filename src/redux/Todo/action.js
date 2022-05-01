
//action type

export const ADD_TODO="ADD_TODO";

//sorting

export const SORT="SORT";

//Filter

export const FILTER="FILTER";

//Toggle

export const TOOGLE="TOOGLE";


//delete

export const DELETE="DELETE";



export const addtodo=(data)=>({
    type:ADD_TODO,
    payload:data
})


//make network req..... by converting action obj to async fun......
//action should be a obj and need dispatch until that its not work....
//get dispatch from middlerware

export const getTodos=()=>async(dispatch)=>{
   const data=await fetch("http://localhost:8080/todos").then(e=>e.json()).then(data=>{
         dispatch(addtodo(data))
    })
}


//sort fun not a network req its only memory req
//sorting doesn't need id toggling neeed id
export const sort=(by)=>{
   return {
       type:SORT,
       payload:by
   } 
}



//fILTER 

export const filter=(text)=>{
    return {
        type:FILTER,
        payload:text,
    }
}


export const toogle=(id)=>{
    return {
        type:TOOGLE,
        payload:id,
    }
}


export const deleteTodo=(id)=>{
    return{
    type:DELETE,
    payload:id,
    }
}