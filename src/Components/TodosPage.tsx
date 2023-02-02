import {FC, useState, useEffect} from 'react'
import { ITodo } from '../types/types'
import List from './List'
import { TodoItem } from './TodoItem'
import axios from 'axios';

export const TodosPage: FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([])

    useEffect(() => {
        fetchTodos()
      }, [])

    async function fetchTodos() {
      try {
        const res = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
        setTodos(res.data)
      } catch (error) {
        alert(error)
      } 
    }

  return (
    <List 
        items={todos} renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id}/>}
    />
  )
}
