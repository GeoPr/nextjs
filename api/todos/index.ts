import type { ID, Todo } from './types'

export class TodosApi {
    private static ALL_URL =
        'https://jsonplaceholder.typicode.com/todos?_limit=5'
    private static ID_URL = 'https://jsonplaceholder.typicode.com/todos/'

    static async getAll(): Promise<Todo[]> {
        try {
            const response = await fetch(TodosApi.ALL_URL)
            const todos = await response.json()
            return todos
        } catch (e) {
            throw e
        }
    }

    static async getById(id: ID): Promise<Todo> {
        try {
            const response = await fetch(TodosApi.ID_URL + id)
            const todo = await response.json()
            return todo
        } catch (e) {
            throw e
        }
    }
}
