import { useState } from 'react';
import TodoList from './TodoList.js'
import EditForm from './EditForm'
const getTasks = function(){
    let tasks =JSON.parse(localStorage.getItem("tasks"))|| []
    return tasks;
}
function Todo(){

    const [tasks,setTasks] = useState(getTasks());
    const [showEditForm,setShowEditForm] = useState(false)
    const handleClick = function(e){
        e.preventDefault()
        let value = document.querySelector('input').value
        if(value!==""){
            tasks.push(value);
            localStorage.setItem("tasks",JSON.stringify(tasks));
            setTasks(getTasks())
            document.querySelector('input').value =""
        }
    }
    const removeTask =function(key){
        tasks.splice(key,1);
        localStorage.setItem("tasks",JSON.stringify(tasks));
        setTasks(getTasks())
    }
    const updateTask = function(key,newTask){
        tasks[key] = newTask;
        localStorage.setItem("tasks",JSON.stringify(tasks));
        setTasks(getTasks())
    }
    const showForm = function(key){
        if(showEditForm==false) setShowEditForm(true)
        else setShowEditForm(false)
    }
    return (
        <div className="todo">
            <form className="todo-header">
            <input type="text" name="task"></input>
            <button onClick={handleClick}>Add</button>
            </form>
            <hr></hr>
            {tasks==null?"":<TodoList updateHandler={updateTask} removeHandler={removeTask} tasks={tasks}/>}
        </div>
    )
}
export default Todo;