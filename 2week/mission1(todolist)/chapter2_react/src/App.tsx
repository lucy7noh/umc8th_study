import { useState } from 'react';
import { Task } from './types/task';
import { TodoContext } from './context/TodoContext';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  const [todos, setTodos] = useState<Task[]>([]);
  const [doneTasks, setDoneTasks] = useState<Task[]>([]);

  const addTodo = (text: string) => {
    setTodos([...todos, { id: Date.now(), text }]);
  };

  const completeTask = (task: Task) => {
    setTodos(todos.filter((t) => t.id !== task.id));
    setDoneTasks([...doneTasks, task]);
  };

  const deleteTask = (task: Task) => {
    setDoneTasks(doneTasks.filter((t) => t.id !== task.id));
  };

  
  return (
    <TodoContext.Provider value={{ todos, doneTasks, addTodo, completeTask, deleteTask }}>
      <div className="todo-container">
        <h1>YONG TODO</h1>
        <TodoForm />
        <div className="render-container">
          <TodoList title="할 일" isDone={false} />
          <TodoList title="완료" isDone={true} />
        </div>
      </div>
    </TodoContext.Provider>
  );
}

export default App;