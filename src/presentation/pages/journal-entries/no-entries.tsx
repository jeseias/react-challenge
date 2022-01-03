import React from 'react'
import { Flex, Text } from "@chakra-ui/react"
import { EmptySVG, LinkText } from 'presentation/components'
import { useLocation } from 'react-router-dom'

type LocationProps = {
  state:{
    id: string 
    title: string
  }
}

const NoEntries: React.FC = () => {
  const { state: { id, title } }  = useLocation() as LocationProps
  const createRoute = `journals/posts/${id}/create`
  return (
    <Flex flexDir="column" alignItems="center" aria-label="no entries">
      <Text m="12.4rem 0 6.694rem 0" fontSize="2.4rem"fontWeight="bold" color="#000000">{title}</Text>
      <EmptySVG aria-label="empty svg"/>
      <LinkText to={createRoute} mt="13rem">Create a note</LinkText>
    </Flex>
  )
}

export default NoEntries