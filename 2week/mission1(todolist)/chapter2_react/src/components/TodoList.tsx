import { useTodoContext } from '../context/TodoContext';

type Props = {
  title: string;
  isDone: boolean;
};

function TodoList({ title, isDone }: Props) {
  const { todos, doneTasks, completeTask, deleteTask } = useTodoContext();

  const tasks = isDone ? doneTasks : todos;

  return (
    <div className="render-container__section">
      <h2 className="render-container__title">{title}</h2>
      <ul className="render-container__list">
        {tasks.map((task) => (
          <li key={task.id} className="render-container__item">
            <span className="render-container__item-text">{task.text}</span>
            <button
              className="render-container__item-button"
              onClick={() => isDone ? deleteTask(task) : completeTask(task)}
            >
              {isDone ? '삭제' : '완료'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
