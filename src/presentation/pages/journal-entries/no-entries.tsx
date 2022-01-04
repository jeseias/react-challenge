import React from 'react'
import { Flex } from "@chakra-ui/react"
import { EmptySVG, LinkText, Title } from 'presentation/components'
import { useLocation, useParams } from 'react-router-dom'

type LocationProps = {
  state:{
    id: string 
    title: string
  }
}

const NoEntries: React.FC = () => {
  const { state: { title } }  = useLocation() as LocationProps
  const { entryId, userId } = useParams()
  const createRoute = `/journals/${userId}/entries/${entryId}/create`
  return (
    <Flex flexDir="column" alignItems="center" aria-label="no entries">
      <Title 
        m="12.4rem 0 6.694rem 0" 
        fontSize="2.4rem" 
        color="#000000"
      >
        {title}
      </Title>
      <EmptySVG aria-label="empty svg"/>
      <LinkText to={createRoute} linkState={{ title }} mt="13rem">Create a note</LinkText>
    </Flex>
  )
}

export default NoEntries