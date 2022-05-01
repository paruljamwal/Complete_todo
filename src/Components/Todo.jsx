import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addtodo, deleteTodo, filter, getTodos, sort, toogle } from "../redux/Todo/action"


export const Todo = () => {
    //use state ---- that want to change -- use there

    const todos = useSelector((store) => store.todos.todos)

    //    , function equality(p,c){
    //        return true;
    //    })

    const [text, setText] = useState("")

    const [filter,setFilter]=useState("")
     
    const dispatch = useDispatch();

    //    const handleadd=()=>{
    //       dispatch(
    //           addtodo({
    //               title:text,
    //               status:false,
    //           })
    //       );
    //    };


    //dispatch come into picture when u have to show loading or err
    //no need of dispach to store things in db
    //for networking we have to store this in backend...

    const handleadd = () => {
        const payload = {
            title: text,
            status: false,
        }

        //by this it store in db


        //Toogle

    
        
        fetch("http://localhost:8080/todos", {
            body: JSON.stringify(payload),
            headers: {
                "content-type": "application/json",
            },
            method: "POST",

        }).then(() => setText("")).then(() => {
            dispatch(getTodos())
        })

    };
    //render on the screen when user landing on the page....



    // useEffect(()=>{
    //     getData()
    // },[])


    //using middlwware make req
    //giving async fun to dispatch... from todo.jsa to here
    //when you call get todo it will return asycn fun
    useEffect(() => {
        dispatch(getTodos())
        //now getTodos is a function but redux doesn't like action
    }, [])

    //streaming...............
    // const getData=()=>{
    //     fetch("http://localhost:8080/todos").then(e=>e.json()).then(data=>{
    //         // dispatch(addtodo(data))
    //     })
    // }

    return (
        <div>
            <input type="text" placeholder="📂Filter Todo" onChange={(e)=>{
                // dispatch(filter(e.target.value))
            setFilter(e.target.value)
           }} />
            <select onChange={(e)=>{
                dispatch(sort(e.target.value))
            }} id="">
                <option value="id">Sort By Id</option>
                <option value="status">Sort By Status</option>
                <option value="title">Sort By Title</option>
            </select>
            <input value={text} type="text" placeholder="✍Enter Todo here" onChange={(e) => setText(e.target.value)} />
            <button onClick={handleadd}>Add todo</button>
            {todos.filter(todo=>todo.title.includes(filter)).map((e) => (
                <div key={e.id}>{e.id}.{e.title}  {e.status ? "Done":"NotDone"} <button onClick={()=>{
                    dispatch(deleteTodo(e.id))
                }}>Delete</button><button onClick={()=>{
                    dispatch(toogle(e.id))
                }}>Toggle</button></div>

            ))}
        </div>
    )
}