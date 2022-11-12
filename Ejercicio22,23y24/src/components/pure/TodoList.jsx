import { PropTypes } from "prop-types"
import Todo from './Todo'



const TodoList = ({todos, onTodoclick}) => {
    return (
        <div>
            <h1>Your TODOs</h1>
            <ul>
                {todos.map((todo, index)=>( 
                    <Todo key={index} {...todo} onclick={()=> onTodoclick(todo.id)} />
                )
                )}
            </ul>

        </div>
    )
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape(
            {
                id: PropTypes.number.isRequired,
                text: PropTypes.string.isRequired,
                completed: PropTypes.bool.isRequired,
            }
        ).isRequired

    ).isRequired,
    onTodoclick: PropTypes.func.isRequired
}

export default TodoList