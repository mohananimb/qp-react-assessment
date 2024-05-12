import ToDoItem from "../../components/ToDo-Item";
import { useTodos } from "./hooks";
import { FixedSizeList } from "react-window";

const Todos = () => {
  const { addTask, tasks, toggleTask, handleChange, input } = useTodos();
  return (
    <div className="app-container">
      <h1 className="app-heading">Todo App</h1>
      <textarea className="textarea" value={input} onChange={handleChange} placeholder="Add new task" onKeyDown={addTask} />

      <FixedSizeList height={window.innerHeight - 150} width={500} itemCount={tasks.length} itemSize={50}>
        {({ index }: { index: number }) => (
          <div className="task-item">
            <ToDoItem
              key={tasks[index].id}
              id={tasks[index].id}
              completed={tasks[index].completed}
              onChange={() => toggleTask(tasks[index].id)}
              task={tasks[index].task}
            />
          </div>
        )}
      </FixedSizeList>
    </div>
  );
};

export default Todos;
