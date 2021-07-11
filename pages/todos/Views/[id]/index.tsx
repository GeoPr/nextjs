import { Todo } from 'api/todos/types'
import { FC } from 'react'

type Props = {
    todo: Todo
}

const View: FC<Props> = ({ todo }) => {
    if (!todo) {
        return <div>loading...</div>
    }

    return <div>{todo.title}</div>
}

export { View as TodoByIdView }
