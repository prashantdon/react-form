import React from "react";
import CreateToDo from "./createToDo";
import Task from "./task";

export default function ToDo() {
    let [tasks, setTasks] = React.useState([
        {
            title: "Go to Gym",
            completed: true
        },
        {
            title: "Read a Book",
            completed: false
        }
    ]);

    function addTask(task) {
        setTasks(tasks => {
            return [
                ...tasks,
                task
            ]
        }

        )
    }
    function removeTask(index) {
        setTasks(tasks => {
            const newTasks = [...tasks]
            newTasks.splice(index, 1)
            return newTasks
        }

        )
    }

    function updateTask(index) {
        setTasks(tasks => {
            const newTasks = [...tasks];
            tasks[index].completed = true;
            return newTasks
        })
    }

    function pendingToDoCount(){
        let counter = 0;
        
            if(!tasks.completed){
                counter = counter + 1
                console.log(counter)
            }

        return counter
    
    }

    
    
    return (
        <div className="todo-container">
            <div className="create-todo">
                <CreateToDo addTask={addTask} />
            </div>
            <div className="pending-todo">
                <h2>Pending Todos  {pendingToDoCount()}</h2>
                {tasks.map((task, index) => <Task {...task} key={index} index={index} updateTask={updateTask} removeTask={removeTask} />)}
            </div>
        </div>
    )
}