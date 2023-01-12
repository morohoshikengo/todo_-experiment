import React from 'react'
import {RiCheckboxBlankCircleLine,RiCheckboxCircleFill} from "react-icons/ri"
import {BsFillTrashFill} from "react-icons/bs"
import {Flex, Text,Icon} from '@chakra-ui/react'
import { useAppDispatch } from '../../stores/hooks'
import { deleteTodo,updateTodo } from '../../stores/slices/todo/todoslice'
type Props= {
    id:string;
    content:string;
    isDone:boolean;
}

const TodoItem:React.VFC<Props> = ({id,content,isDone}) => {
    const dispatch= useAppDispatch();
    const handleUpdate = () => {
        dispatch(updateTodo(id));

    }

    const handleDelete = () => {
        dispatch(deleteTodo(id))
    }
  return (
  <Flex w='100%' align='center' justify='space-between'>
    <Flex align='center'>
    <Icon as={isDone? RiCheckboxCircleFill:RiCheckboxBlankCircleLine} color='teal' cursor = 'pointer' h={15} 
    mr = {8} w={15} 
    onClick= {handleUpdate}
    />
    <Text fontSize='xl'>{content}</Text>
    </Flex>
    <Icon as = {BsFillTrashFill} color='pink' cursor='pointer' h={20} w={20} onClick= {handleDelete}/>
  </Flex>
  )
}

export default TodoItem