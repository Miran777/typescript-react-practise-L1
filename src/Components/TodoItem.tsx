import { FC } from "react"
import { ITodo } from "../types/types"

interface TodoItemProps {
    todo: ITodo
}

export const TodoItem: FC<TodoItemProps> = ({todo}) => {
  return (
    <div style={{backgroundColor: 'blueviolet', padding: '15px', color: 'white', border: '1px solid white'}}>
        <input type='checkbox' checked={todo.completed} />
        {todo.id}. {todo.title}
    </div>
  )
}
