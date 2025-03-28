import { createContext, useContext } from 'react';
import { Task } from '../types/task';

type TodoContextType = {
  todos: Task[];
  doneTasks: Task[];
  addTodo: (text: string) => void;
  completeTask: (task: Task) => void;
  deleteTask: (task: Task) => void;
};

export const TodoContext = createContext<TodoContextType | null>(null);

export const useTodoContext = () => {
  const context = useContext(TodoContext);
  if (!context) throw new Error('TodoContext is missing!');
  return context;
};
