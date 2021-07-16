import PropTypes from 'prop-types';

//Check PropTypes
TodoList.propTypes = {
    todos: PropTypes.array,
    onTodoClick: PropTypes.func,
    
};
// Nếu chưa truyền prop xuống thì lấy giá trị mặc định
TodoList.defaultProps = {
    todos: [],
    onTodoClick: null,
};
function TodoList(props) {
    const {todos,onTodoClick} = props;
     function handleTodoClick(todo){
        if(onTodoClick) {
            onTodoClick(todo);
        }
    }
    return (
       <ul className="todo-list">
           {todos.map((todo) => {
               return (
               <li 
               key={todo.id}
               onClick={() => handleTodoClick(todo)}
               >
               {todo.title}
               </li>
               )}
               )
            }
       </ul>

    );
}

export default TodoList;