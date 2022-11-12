import { PropTypes } from 'prop-types'

const Todo = ({onClick, completed, text, id}) => {
    return(
        <li onClick={onClick}
        style={
            {textDecoration: completed? 'line-throug' : 'none',
             textDecorationColor: completed ? 'green' : 'none',
             color: completed ? 'green': 'black'}
        }>
            {id} - {text}
        </li>
    )
}

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
}

export default Todo