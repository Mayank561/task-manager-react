# Task Manager

A sample Task Manager buit with React that allows users to add, search, and tasks. The app stores tasks in the local storage so that they persist even after the page is reloaded.

## Features
- Add Tasks: Users can add tasks using an input field.

- Search Tasks: Users can search for tasks in real time.

- Delete Tasks: Users can delete tasks individually from the list

- persistent Storage: Tasks are stored in the browser's local storage, ensuring persistence across page reloads.

## screenshot
![Screenshot 2024-11-14 054311](https://github.com/user-attachments/assets/3956745c-8ea0-4d61-aa1e-3aa810a4a137)
![Screenshot 2024-11-14 054334](https://github.com/user-attachments/assets/0ab41e09-0c46-4faa-b0a5-fd35a8480a3b)
![Screenshot 2024-11-14 054353](https://github.com/user-attachments/assets/5a0e5217-d311-4215-a612-e1fb6280bf54)
![Screenshot 2024-11-14 054125](https://github.com/user-attachments/assets/43486b1d-a6f3-4b53-9861-2c317ea46400)
![Screenshot 2024-11-14 054241](https://github.com/user-attachments/assets/1478e5c7-8615-48f2-ae6c-bbf61a44358a)


## Tech Stack
 - React: For building the user interface.

 - Tailwind Css: For styling the app.

 - React Context API: For managing state across the app.

 - React Icons: For including the bin icon for deleting tasks.


# Installation

clone the repository

```bash
git clone https://github.com/Mayank561/task-manager-react.git
```

# Install dependencies:

Navigate to the project directory and run the following command to install the required dependencies

```bash
 npm install
```

# Run the app:

After the installation is complete, run the app using

```bash
 npm start
```
The app will be available at http://localhost:5173

# Usage

1.  Adding a Task:

    - Enter the task in the input field under the "Add a new Task" section and click the "Add Task" button.

    - The task will be added to the task list.

2. Searching for a Task:

    - Use the Search bar to filter tasks. As you type, the task list will be filterd to show mactching tasks.

3. Deleting a Task:

    - click on the trash bin icon next to a task to delete it from the list.

4. Persistent Storage:

    - The tasks are stored in the brower's local storage. This means tasks will persist even after you reload the page or close the browser.


# File Structure

```bash
    ├── src/
│   ├── components/
│   │   ├── Pages/
│   │   │   ├── TaskManager.js       
│   │   │   ├── TaskInput.js         
│   │   │   ├── TaskList.js          
│   │   ├── TaskStore.js             
│   ├── App.js                      
├── public/
│   ├── index.html                  
├── tailwind.config.js               
├── package.json                    
└── README.md                       
```

