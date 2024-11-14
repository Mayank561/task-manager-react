import { useContext } from "react";
import { TaskInput } from "./TaskInput";
import { TaskList } from "./TaskList";
import { TaskStore } from "../TaskStore";

export const TaskManager = () => {
  const { searchTerm, setSearchTerm } = useContext(TaskStore);

  return (
    <section className="w-96 m-auto bg-i-body   p-4">
      <div className="flex flex-col items-center">
        <h1 className="text-white font-bold text-lg p-4 ">Task Manager</h1>
        <input
          type="text"
          placeholder="Search Tasks"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border-none p-2 w-72 rounded-md text-black mb-4"
        />
        <TaskInput />
        <TaskList />
      </div>
    </section>
  );
};
