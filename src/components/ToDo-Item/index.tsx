import React from "react";
import { TaskType } from "../../types/task";

const ToDoItem: React.FC<TaskType> = ({ completed, onChange, id, task }) => {
  return (
    <label className="checkbox-container">
      <input className="checkbox" type="checkbox" checked={completed} onChange={() => onChange && onChange(id)} />
      <span className={completed ? "completed" : ""}>{task}</span>
    </label>
  );
};

export default ToDoItem;
