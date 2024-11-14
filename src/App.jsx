import { TaskManager } from "./component/Pages/TaskManager";
import { TaskProvider } from "./component/TaskStore";

function App () {
  return (
    <TaskProvider>
      <div className="bg-custom-bg min-h-screen p-28">
        <TaskManager />
      </div>
    </TaskProvider>
  );
}

export default App;
