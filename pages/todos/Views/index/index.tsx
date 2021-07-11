import { FC } from 'react'
import Link from 'next/link'
import { Todo } from 'api/todos/types'

type Props = {
    todos: Todo[]
}

const View: FC<Props> = ({ todos }) => (
    <ul>
        {todos.map(({ title, id }) => (
            <li key={id}>
                <Link href={`/todos/${id}`}>{title}</Link>
            </li>
        ))}
    </ul>
)

export { View as TodosView }
