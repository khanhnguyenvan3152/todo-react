import Modal from "./Modal";
import useModal from "./useModal";
import EditForm from "./EditForm";
function TodoItem(props) {
    const {isShowing,toggle} = useModal()
    return (
        <li id={props.id} className="todo-item">
            <div aria-multiline="true">
                {props.value}
            </div>
            <button onClick={toggle}>Edit</button>
            <Modal isShowing={isShowing} hide={toggle} title={"Edit "+ props.id}>
                <EditForm currentValue={props.value} updateTask={props.updateHandler} hide={toggle  } id={props.id}></EditForm>
            </Modal>
            <button onClick={() => {
                props.removeHandler(props.id)
            }}>X</button>
        </li>
    )
}
export default TodoItem;