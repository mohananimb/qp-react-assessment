import { useState } from "react";
import { TaskType } from "../../types/task";

export const useTodos = () => {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [input, setInput] = useState<string>("");

  const addTask = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    const { key } = event;

    if (key === "Enter" && !!input.trim()) {
      setTasks((prevTasks) => [...prevTasks, { id: Date.now(), completed: false, task: input }]);
      setInput("");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setInput(e.target.value);

  const toggleTask = (id: number) => {
    setTasks((prevTasks) => prevTasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)));
  };

  return { addTask, toggleTask, tasks, handleChange, input };
};
