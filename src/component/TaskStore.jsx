import { createContext, useContext, useEffect, useState } from "react";

export const TaskStore = createContext();

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState(() => {
    return JSON.parse(localStorage.getItem("tasks")) || [];
  });
  const [taskInput, setTaskInput] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (taskInput.trim()) {
      setTasks((prevTasks) => [...prevTasks, taskInput]);
      setTaskInput("");
    }
  };

  const deleteTask = (index) => {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  };

  const filteredTasks = tasks.filter(task =>
    task.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <TaskStore.Provider
      value={{
        tasks,
        addTask,
        deleteTask,
        taskInput,
        setTaskInput,
        searchTerm,
        setSearchTerm,
        filteredTasks,
      }}
    >
      {children}
    </TaskStore.Provider>
  );
}
