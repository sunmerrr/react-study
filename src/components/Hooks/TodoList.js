import { useState } from 'react';

let nextId = 3;
const initialTodos = [
  { id: 1, title: '블로그 쓰기', done: false },
  { id: 2, title: '요가 하기', done: false },
  { id: 3, title: '도시락 만들기', done: false },
];

const TodoList = () => {
  const [todos, setTodos] = useState(initialTodos);
  const [title, setTitle] = useState('');

  function handleAdd(title) {
    setTodos([
      ...todos,
      {
        id: ++nextId,
        title: title,
        done: false,
      },
    ]);
  }

  function handleChange(nextTodo) {
    setTodos(
      todos.map((t) => {
        if (t.id === nextTodo.id) {
          return nextTodo;
        } else {
          return t;
        }
      }),
    );
  }

  function handleDelete(todoId) {
    setTodos(todos.filter((t) => t.id !== todoId));
  }

  return (
    <div>
      <input placeholder="Add Todo" value={title} onChange={(e) => setTitle(e.target.value)} />
      <button
        onClick={() => {
          setTitle('');
          handleAdd(title);
        }}
      >
        추가
      </button>
      <ul style={{ padding: '0' }}>
        {todos.map((todo) => (
          <li key={todo.id} style={{ listStyleType: 'none' }}>
            <label>
              <input
                type="checkbox"
                checked={todo.done}
                onChange={(e) => {
                  handleChange({
                    ...todo,
                    done: e.target.checked,
                  });
                }}
              />
              {todo.title}
              <button onClick={() => handleDelete(todo.id)}>Delete</button>
            </label>
          </li>
        ))}
      </ul>
      <br />
      <br />
      <br />
    </div>
  );
};

export default TodoList;
