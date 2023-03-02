import { useEffect, useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Loading from './components/Loadibng';
import TodoList from './components/TodoList';

function App() {
    const [todos, setTodos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        fetch('http://localhost:3030/jsonstore/todos')
            .then(res => res.json())
            .then(data => {
                const result = Object.values(data);
                setTodos(result);
                setIsLoading(false);
            })
            .catch(err => console.log(err.message));

    }, []);

    function createTodo() {
        const _id = 'todo_' + (Number(todos[todos.length - 1]._id.slice(5)) + 1);
        const text = prompt('Text new Todo:');
        const isCompleted = false;

        setTodos([...todos, { _id, text, isCompleted }]);
    }

    return (
        <div>

            <Header />

            <main className="main">

                <section className="todo-list-container">
                    <h1>Todo List</h1>

                    <div className="add-btn-container">
                        <button onClick={createTodo} className="btn">+ Add new Todo</button>
                    </div>

                    <div className="table-wrapper">
                        {isLoading
                            ? <Loading />
                            : <TodoList todos={todos} />}
                    </div>

                </section>
            </main>

            <Footer />

        </div>
    );
}

export default App;
