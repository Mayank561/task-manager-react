import React from "react";
import { useContext } from "react";
import { TaskStore } from "../TaskStore"; 
import { ImBin2 } from "react-icons/im"; 

export const TaskList = () => {
  const { filteredTasks, deleteTask } = useContext(TaskStore); 

  return (
    <ul className="flex flex-col justify-start items-start p-5 list-none text-white text-lg font-extrabold">
      {filteredTasks.length > 0 ? (
        filteredTasks.map((task, index) => (
          <li key={index} className="flex items-center justify-between  gap-40 w-full mb-2">
            <span>{task}</span>
            <button
              className="border-none text-white text-lg font-bold mx-2 hover:bg-red-600 p-2 rounded-md"
              onClick={() => deleteTask(index)}
              aria-label="Delete Task"
            >
              <ImBin2 className="w-6 h-6" />
            </button>
          </li>
        ))
      ) : (
        <p>No tasks found</p>
      )}
    </ul>
  );
};
