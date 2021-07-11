import { TodosApi } from 'api/todos'
import { Todo } from 'api/todos/types'
import { GetStaticPaths, GetStaticProps } from 'next'
import React, { FC } from 'react'
import { TodoByIdView } from './Views/[id]'

type Props = {
    todo: Todo
}

const TodoById: FC<Props> = ({ todo }) => {
    return <TodoByIdView todo={todo} />
}

export const getStaticPaths: GetStaticPaths = async () => {
    const todos = await TodosApi.getAll()
    const paths = todos.map(({ id }) => `/todos/${id}`)

    return {
        paths,
        fallback: false // for 404 page
    }
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
    const { id } = params as { id: string }
    const todo = await TodosApi.getById(id)

    return {
        props: { todo }
    }
}

export default TodoById
