import { useContext } from "react";
import { TaskStore } from "../TaskStore";

export const TaskInput = () => {
  const { taskInput, setTaskInput, addTask } = useContext(TaskStore);

  return (
    <section className=" p-4">
      <div className="flex flex-col gap-4 justify-center  items-center">
        <input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder="Add a new Task"
          className="border-none w-72 rounded-md p-2 "
        />
        <button
          onClick={addTask}
          className="p-2 bg-blue-500 text-white 
          rounded-md transition ease-in-out delay-150 
           hover:-translate-y-1 hover:scale-110
         hover:bg-indigo-500 duration-300 "
        >
          Add Task
          
        </button>
        
      </div>
    </section>
  );
};
