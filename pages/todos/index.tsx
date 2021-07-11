import { TodosApi } from 'api/todos'
import { Todo } from 'api/todos/types'
import { GetStaticProps } from 'next'
import { FC } from 'react'
import { TodosView } from './Views/index'

type Props = {
    todos: Todo[]
}

const Todos: FC<Props> = ({ todos }) => {
    return <TodosView todos={todos} />
}

export const getStaticProps: GetStaticProps<Props> = async () => {
    const todos = await TodosApi.getAll()

    return {
        props: { todos }
    }
}

export default Todos
