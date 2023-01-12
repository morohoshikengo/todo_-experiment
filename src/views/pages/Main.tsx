import React from 'react'
import AddTodo from '../components/AddTodo'
import TodoList from '../components/TodoList'
import { VStack } from '@chakra-ui/layout'
const Main:React.VFC = () => {
  return (
    <div>
        <VStack spacing={4} align='stretch' p={8}>
        <TodoList/>
        <AddTodo/>
        </VStack>
        </div>
  )
}

export default Main