import TodoItem from './TodoItem';

function TodoList({
    todos
}) {

    return (
        <table className="table">
            <thead>
                <tr>
                    <th className="table-header-task">Task</th>
                    <th className="table-header-status">Status</th>
                    <th className="table-header-action">Action</th>
                </tr>
            </thead>
            <tbody>

                {todos.map(t => <TodoItem key={t._id} {...t} />)}

            </tbody>
        </table>
    );
}

export default TodoList;