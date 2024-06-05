import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteTodo} = props
  const {title, id} = todoDetails
  const onDelete = () => {
    console.log('delete() clicked')
    deleteTodo(id)
  }
  return (
    <li className="list-container">
      <p>{title}</p>
      <button className="button" onClick={onDelete} type="button">
        Delete
      </button>
    </li>
  )
}

export default TodoItem
//https://github.com/ramadugushiva2001/simpleTodos.git
