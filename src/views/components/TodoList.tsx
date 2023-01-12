import React from 'react'
import TodoItem from './TodoItem'
import {Center, Flex, Heading, StackDivider} from '@chakra-ui/react'
import { Stack, HStack, VStack,Text } from '@chakra-ui/react'
import { useAppSelector } from '../../stores/hooks'
import { selectTodoList } from '../../stores/slices/todo/todoslice'
const TodoList:React.VFC = () => {
    const TodoList=useAppSelector(selectTodoList)
  return (
    <Flex flexDir='column' align='center'>
        <Center mb={8}>
            <Heading>
            Todo List
            </Heading>
            
            </Center>
            <VStack
            divider={<StackDivider borderColor='black.200'/>}
            align='stretch'
            w = {{base:'90vw',sm:'80vw',md:'70vw',lg:'60vw'}}
            border='1px' borderColor='gray.200'
            borderRadius='md'
            p={4}>
                {TodoList.length===0?
                (<Text align='center' fontWeight='bold' fontSize='lg'>No todo</Text>):
                (TodoList.map((item:any) =>{
                    return (
                         <TodoItem
                          key={item.id}
                          id={item.id} 
                          content={item.content} 
                          isDone={item.isDone}/>
                          );
                } ))}
        </VStack>
    </Flex>
  )
}

export default TodoList