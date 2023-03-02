import { useState } from "react";

function TodoItem({
    text,
    isCompleted
}) {

    const [comp, changeComp] = useState(isCompleted);

    return (
        <tr className={comp ? 'todo is-completed' : 'todo'}>
            <td>{text}</td>
            <td>{comp ? 'Complete' : 'Incomlete'}</td>
            <td className="todo-action">
                <button onClick={() => changeComp(!comp)} className="btn todo-btn">Change status</button>
            </td>
        </tr>
    );
}

export default TodoItem;