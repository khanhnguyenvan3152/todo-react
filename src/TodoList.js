import TodoItem from "./TodoItem.js";
function TodoList(props){
    const listTask = props.tasks.map((value,index)=>
        <TodoItem updateHandler={props.updateHandler} removeHandler={props.removeHandler} key={index} id={index} value ={value}/>
    )
    return (
        <div className="todo-list">
           <ul>
            {listTask}
           </ul>
        </div>
    )
}

export default TodoList;