

function EditForm({currentValue,id,updateTask,hide}){
    const handleClick = function(e){
        e.preventDefault()
        let value = document.querySelector('input[name="edit"]').value;
        updateTask(id,value)
        hide()
    }
    return (
            <div className="editForm">
                <form>
                    <input placeholder={currentValue} type = "text" name="edit"/>
                    <button type="button" onClick={handleClick}>Save</button>
                </form>
            </div>
    )
}
export default EditForm