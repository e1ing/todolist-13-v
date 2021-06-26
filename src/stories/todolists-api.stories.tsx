import React, {useEffect, useState} from 'react'
import {todolistsAPI} from "../api/todolists-api";

export default {
    title: 'API'
}

export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistsAPI.getTodolists()
            .then((res) => {
                setState(res.data);
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}

export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    const [todolistTitle, setTodolistTitle] = useState<string>("")
    const createTodolist = () => {
        todolistsAPI.createTodolist("YoYo")
            .then((res) => {
                setState(res.data);
            })
    }
    return <div> {JSON.stringify(state)}
        <div>
            <input onChange={(e) => {
                {
                    setTodolistTitle(e.currentTarget.value)
                }
            }}
                   placeholder={"todolist title"} value={todolistTitle}/>
            <button onClick={createTodolist}>create</button>
        </div>
    </div>
}

export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistsAPI.deleteTodolist('f7e41236-a840-4f42-bf5b-f7ab63f605ce')
            .then((res) => {
                setState(res.data);
            })
    }, [])

    return <div> {JSON.stringify(state)}
        <input onChange={(e) => {
        }} placeholder={"todolist Id"}/>
        <button onClick={() => {
        }}>Delete todolist
        </button>
    </div>
}

export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    const [todolistTitle, setTodolistTitle] = useState<string>("")
    const [todolistId, setTodolistId] = useState<string>("")

    const updateTodolistTitle = () => {
        todolistsAPI.updateTodolist(todolistId, todolistTitle)
            .then((res) => {
                debugger;
                setState(res.data);
            })
    }

    return <div> {JSON.stringify(state)}
        <div>
            <input placeholder={"todolist title"} value={todolistTitle} onChange={(e) => {
                setTodolistTitle(e.currentTarget.value)
            }}/>
            <button onClick={updateTodolistTitle}>update todolist title</button>
        </div>
    </div>
}

export const GetTasks = () => {
    const [state, setState] = useState<any>(null)
    const [todolistId, setTodolistId] = useState<string>("")
    const getTasks = () => {
        todolistsAPI.getTasks(todolistId)
            .then((res) => {
                setState(res.data);
            })
    }
    return <div> {JSON.stringify(state)}
        <div>
            <input placeholder={"todolistId"} value={todolistId}
                   onChange={(e) => {
                       setTodolistId(e.currentTarget.value)
                   }}/>
            <button onClick={getTasks}>get tasks</button>
        </div>
    </div>
}

export const DeleteTasks = () => {
    const [state, setState] = useState<any>(null)
    const [taskId, setTaskId] = useState<string>("")
    const [todolistId, setTodolistId] = useState<string>("")

    const deleteTask = () => {
        todolistsAPI.deleteTasks(todolistId, taskId)
            .then((res) => {
                setState(res.data);
            })
    }

    return <div> {JSON.stringify(state)}
        <div>
            <input placeholder={"todolistId"} value={todolistId} onChange={(e) => {
                setTaskId(e.currentTarget.value)
            }}/>
            <input placeholder={"taskId"} value={taskId} onChange={(e) => {
                setTaskId(e.currentTarget.value)
            }}/>
            <button onClick={deleteTask}>delete</button>
        </div>
    </div>
}

export const CreateTask = () => {
    const [state, setState] = useState<any>(null)
    const [taskTitle, setTaskTitle] = useState<string>("")
    const [todolistId, setTodolistId] = useState<string>("")

    const createTask = () => {
        todolistsAPI.createTask(todolistId, taskTitle)
            .then((res) => {
                setState(res.data);
            })
    }

    return <div> {JSON.stringify(state)}
        <div>
            <input placeholder={"todolistId"} value={todolistId}
                   onChange={(e) => {
                       setTodolistId(e.currentTarget.value)
                   }}/>
            <input placeholder={"task title"} value={taskTitle}
                   onChange={(e) => {
                       setTaskTitle(e.currentTarget.value)
                   }}/>
            <button onClick={createTask}>сreate task</button>
        </div>
    </div>
}


export const UpdateTask = () => {
    const [state, setState] = useState<any>(null)
    const [taskTitle, setTaskTitle] = useState<string>("title1")
    const [description, setDescription] = useState<string>("decription1")
    const [priority, setPriority] = useState<number>(0)
    const [status, setStatus] = useState<number>(0)
    const [startDate, setStartDate] = useState<string>("")
    const [deadline, setDeadline] = useState<string>("")
    const [todolistId, setTodolistId] = useState<string>("")
    const [taskId, setTaskId] = useState<string>("")

    const updateTaskTitle = () => {
        todolistsAPI.updateTask(todolistId, taskId, {
            deadline: "",
            description: description,
            priority: priority,
            startDate: "",
            status: status,
            title: taskTitle,
            completed: false
        })
            .then((res) => {
                debugger;
                setState(res.data);
            })
    }
    return <div> {JSON.stringify(state)}
        <div>
            <input placeholder={"task title"} value={taskTitle} onChange={(e) => {
                setTaskTitle(e.currentTarget.value)
            }}/>
            <input placeholder={"priority"} value={priority} onChange={(e) => {
                setPriority(+e.currentTarget.value)
            }}/>
            <input placeholder={"taskId"} value={taskId} onChange={(e) => {
                setTaskId(e.currentTarget.value)
            }}/>
            <input placeholder={"todolistId"} value={todolistId} onChange={(e) => {
                setTodolistId(e.currentTarget.value)
            }}/>
            <input placeholder={"description"} value={description} onChange={(e) => {
                setDescription(e.currentTarget.value)
            }}/>
            <input placeholder={"status"} value={status} onChange={(e) => {
                setStatus(+e.currentTarget.value)
            }}/>
            <button onClick={updateTaskTitle}>update todolist title</button>
        </div>
    </div>
}
