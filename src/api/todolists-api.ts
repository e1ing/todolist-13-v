import axios from "axios";


const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.1/",
    withCredentials: true,
    headers: {
        "API-KEY": "b00b044a-fabf-40f0-8522-d4dd85a812f0"
    }

})

export type TodolistType = {
    id: string
    title: string
    addedDate: string
    order: number
}

 type ResponseType<D={}> = {
     resultCode: number
     messages: Array<string>
     data: D
 }

 export type TaskType = {
     description: string
     title: string
     completed: number
     status: number
     priority: number
     startDate: string
     deadline: string
     todoListId: string
     order: number
     addedDate: number
 }

type GetTasksResponse = {
    error: string|null
    totalCount: number
    items: TaskType []
}

export type UpdateTaskModelType = {
    title: string
    description: string
    completed: boolean
    status: number
    priority: number
    startDate: string
    deadline: string
}

export const todolistsAPI = {
    getTodolists(){
        return instance.get<Array<TodolistType>>("todo-lists")

    },

    createTodolist(title: string){
        return instance.post<ResponseType<{item: TodolistType}>>("todo-lists", {title})
    },

    deleteTodolist (id: string)  {
        return  instance.delete<ResponseType>(`todo-lists/${id}`)
    },

    updateTodolist(id: string, title: string){
        return instance.put<ResponseType>(`todo-lists/${id}`, {title})

    },

    getTasks(todolistId: string){
       return instance.get<GetTasksResponse>(`todo-lists/${todolistId}/tasks`)
    },

    deleteTasks(todolistId: string, taskId: string){
        return instance.delete<ResponseType>(`todo-lists/${todolistId}/tasks/${taskId}`)
    },

    createTask(todolistId: string, title: string){
        return instance.post<ResponseType>(`todo-lists/${todolistId}/tasks`, {title})
    },

    updateTask(todolistId:string, taskId: string, model:UpdateTaskModelType) {
return instance.put(`todo-lists/${todolistId}/tasks/${taskId}`, model)
    }
}